import {useRef} from "react";
import {useFrame} from "react-three-fiber";


interface Props {
    position: number[];
    lookAt: number[];
}


export default function Camera({position, lookAt}: Props) {
    const ref = useRef();
    useFrame(() => {
        // @ts-ignore
        ref.current.position.copy(position);
        // @ts-ignore
        ref.current.lookAt(lookAt);
    });
    // @ts-ignore
    return <perspectiveCamera ref={ref}/>;
}