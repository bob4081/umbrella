import { isTransferable } from "@thi.ng/checks";
import { isTypedArray } from "@thi.ng/checks";
import { ISubscriber, LOGGER } from "../api";
import { makeWorker } from "../utils/worker";

/**
 * Creates a {@link ISubscriber | subscriber} which forwards received
 * values to given worker.
 *
 * @remarks
 * The `worker` can be an existing `Worker` instance, a JS source code
 * `Blob` or an URL string. In the latter two cases, a worker is created
 * automatically. If `transfer` is true, the received values will be
 * marked as *transferrable* and the host app loses all access
 * permissions to these marked values. See `Worker.postMessage()` for
 * details.
 *
 * If `terminate` is set to a positive number, then the worker will be
 * automatically terminated after the stated number of milliseconds
 * since the parent subscription is {@link ISubscriber.done}.
 *
 * @example
 * ```ts
 * // worker source code
 * src = `self.onmessage = (e) => console.log("worker", e.data);`;
 *
 * a = stream();
 * a.subscribe(
 *   postWorker(src, { type: "application/javascript" }))
 * );
 *
 * a.next(42)
 * // worker 42
 * ```
 *
 * @param worker
 * @param transfer
 * @param terminate worker termination delay (ms)
 */
export const postWorker = <T>(
    worker: Worker | Blob | string,
    transfer = false,
    terminate = 0
): ISubscriber<T> => {
    const _worker = makeWorker(worker);
    return {
        next(x) {
            if (x instanceof Promise) {
                x.then((y) => this.next(y));
                return;
            }
            let tx;
            if (transfer) {
                const ta = isTypedArray(x);
                if (ta || isTransferable(x)) {
                    tx = [ta ? (<any>x).buffer : x];
                }
            }
            _worker.postMessage(x, tx || []);
        },
        done() {
            if (terminate > 0) {
                setTimeout(() => {
                    LOGGER.info("terminating worker...");
                    _worker.terminate();
                }, terminate);
            }
        }
    };
};
