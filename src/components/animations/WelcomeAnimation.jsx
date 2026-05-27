import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Glass Sphere Component
function GlassSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhysicalMaterial
          transmission={0.96}
          thickness={0.6}
          roughness={0}
          metalness={0}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={1.2}
          opacity={0.92}
          transparent
        />
      </mesh>
      {/* Inner warm glow */}
      <mesh>
        <sphereGeometry args={[1.95, 32, 32]} />
        <meshBasicMaterial
          color="#fbbf24"
          opacity={0.25}
          transparent
          side={THREE.BackSide}
        />
      </mesh>
      {/* Secondary inner glow */}
      <mesh>
        <sphereGeometry args={[1.9, 24, 24]} />
        <meshBasicMaterial
          color="#fb923c"
          opacity={0.15}
          transparent
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
}

// Bokeh Particles Background
function BokehParticles() {
  const particles = useMemo(() => {
    const count = 150;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      sizes[i] = Math.random() * 0.15 + 0.05;
    }
    return { positions, sizes };
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Scene Component
function Scene() {
  return (
    <>
      {/* Warm ambient lighting */}
      <ambientLight intensity={0.4} color="#fff5e6" />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffedd5" />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#fed7aa" />
      
      {/* Warm glow point lights */}
      <pointLight position={[0, 2, 3]} intensity={0.8} color="#fbbf24" distance={8} decay={2} />
      <pointLight position={[-3, 1, 2]} intensity={0.5} color="#fb923c" distance={6} decay={2} />
      <pointLight position={[3, 1, -2]} intensity={0.5} color="#f59e0b" distance={6} decay={2} />

      {/* Dark gradient background effect */}
      <mesh position={[0, 0, -10]} scale={[30, 30, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#0a0a0f" transparent opacity={0.95} />
      </mesh>
      
      {/* Bokeh particles */}
      <BokehParticles />

      {/* Glass sphere */}
      <GlassSphere />

      {/* Smooth camera orbit */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.3}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

// Main Export Component
export default function WelcomeAnimation() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 55 }}
        gl={{ 
          alpha: true, 
          antialias: true, 
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

