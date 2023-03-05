import {Canvas} from "react-three-fiber";
import Object from "@/components/Object";


export default function FullScreenCanvas(...args: Object[]) {
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
