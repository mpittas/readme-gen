"use client"

import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Mesh } from "three"
import { Box } from "@mui/joy"

function MeshComponent() {
  const fileUrl = "/shiba/scene.gltf"
  const mesh = useRef<Mesh>(null!)
  // const gltf = useLoader(GLTFLoader, fileUrl)

  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })

  return <mesh ref={mesh}>{/* <primitive object={gltf.scene} /> */}</mesh>
}

export function TestAnim() {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
