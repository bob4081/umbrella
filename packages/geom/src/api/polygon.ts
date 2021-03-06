import { IHiccupShape, Type } from "@thi.ng/geom-api";
import { copyShape } from "../internal/copy-shape";
import { APC } from "./apc";

export class Polygon extends APC implements IHiccupShape {
    get type() {
        return Type.POLYGON;
    }

    copy(): Polygon {
        return <Polygon>copyShape(Polygon, this);
    }

    toHiccup() {
        return ["polygon", this.attribs, this.points];
    }
}
