import { declareIndices, IVector } from "@thi.ng/vectors";
import { ColorMode } from "./constants";
import { AColor } from "./internal/acolor";
import { ensureArgs } from "./internal/ensure-args";
import type { Color } from "./api";

export function hsla(col: Color, offset?: number, stride?: number): HSLA;
export function hsla(h?: number, s?: number, l?: number, a?: number): HSLA;
export function hsla(...args: any[]) {
    return new HSLA(...ensureArgs(args));
}

export class HSLA extends AColor<HSLA> implements IVector<HSLA> {
    h!: number;
    s!: number;
    l!: number;
    a!: number;

    get mode() {
        return ColorMode.HSLA;
    }

    copy() {
        return new HSLA(this.deref());
    }

    copyView() {
        return new HSLA(this.buf, this.offset, this.stride);
    }

    empty() {
        return new HSLA();
    }
}

declareIndices(HSLA.prototype, ["h", "s", "l", "a"]);
