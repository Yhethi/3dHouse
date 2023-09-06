import { Suspense } from "react";
import "./App.css";
import { House } from "./components/models/House";
import { Canvas } from "react-three-fiber";
import { Cloud, Lightformer, OrbitControls, Stars } from "@react-three/drei";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ zoom: 1, position: [15, 20, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[35, 35, 0]} intensity={0.4} />
        <pointLight position={[-35, 35, 0]} intensity={0.4} />
        <Suspense fallback={null}></Suspense>
        <House />
        <OrbitControls />
        <Cloud
          opacity={0.2}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1} // Z-dir depth
          segments={40} // Number of particles
        />
        <Lightformer
          form="rect" // circle | ring | rect (optional, default = rect)
          intensity={1} // power level (optional = 1)
          color="white" // (optional = white)
          scale={[10, 0]} // Scale it any way you prefer (optional = [1, 1])
          target={[0, 0, 0]} // Target position (optional = undefined)
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}

export default App;
