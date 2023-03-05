import Head from 'next/head';
import Cube from "@/components/Cube";
import {Canvas} from "react-three-fiber";


export default function Home() {
    return (
        <>
            <Head>
                <title>L.O.S</title>
                <meta name="description"
                      content="Luminaries Of Sound - Carlos Fabbro (developed by Jensen Holm)"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1"/>
                <link rel="icon"
                      href="/favicon.ico"/>
            </Head>
            <Canvas
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Cube posX={1}
                      posY={1}
                      posZ={1}></Cube>
            </Canvas>
        </>
    )
}
