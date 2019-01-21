import { defmulti, MultiFn2O } from "@thi.ng/defmulti";
import { EPS, sign } from "@thi.ng/math";
import { ReadonlyVec, distSq } from "@thi.ng/vectors";
import { Circle, IShape, Type, Triangle } from "../api";
import { dispatch } from "../internal/dispatch";
import { classifyPointInTriangle2 } from "../internal/triangle-point-inside";

export const classifyPoint: MultiFn2O<IShape, ReadonlyVec, number, number> = defmulti(dispatch);

classifyPoint.addAll({

    [Type.CIRCLE]:
        ($: Circle, p: ReadonlyVec, eps = EPS) =>
            sign($.r * $.r - distSq($.pos, p), eps),

    [Type.TRIANGLE]:
        ({ points }: Triangle, p: ReadonlyVec, eps = EPS) =>
            classifyPointInTriangle2(p, points[0], points[1], points[2], eps),

});