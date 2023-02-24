import { Canvas } from 'react-three-fiber'

type Props = {
  children: React.ReactNode
}

export default function FullScreenCanvas({children}: Props) {
  return (
      <Canvas
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
        {children}
      </Canvas>
  )
}
