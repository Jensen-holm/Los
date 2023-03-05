interface Props {
    posX: number;
    posY: number;
    posZ: number;
}


export default function Cube({posX, posY, posZ}: Props) {
    return (
        <mesh position={[posX, posY, posZ]}>
            <boxBufferGeometry/>
        </mesh>
    );
}
