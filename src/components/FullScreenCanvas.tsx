import {Canvas} from "react-three-fiber";

interface Prop {
    x: number;
    y: number;
    z: number;
}

export default function FullScreenCanvas(objects: Prop[]) {
    return (
        <Canvas
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
        >
        </Canvas>
    );
}
