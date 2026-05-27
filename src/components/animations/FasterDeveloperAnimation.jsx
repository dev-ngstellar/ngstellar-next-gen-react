import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Trail } from '@react-three/drei';
import * as THREE from 'three';

// Fast orbiting particle with trail
function FastOrbitingParticle({ cubePosition, orbitRadius = 3, speed = 3 }) {
  const particleRef = useRef();
  
  useFrame((state) => {
    if (particleRef.current) {
      const time = state.clock.elapsedTime * speed;
      particleRef.current.position.x = Math.cos(time) * orbitRadius;
      particleRef.current.position.z = Math.sin(time) * orbitRadius;
      particleRef.current.position.y = Math.sin(time * 2) * 0.8;
    }
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.12, 8, 8]} />
      <meshBasicMaterial color="#00f0ff" emissive="#00ffff" emissiveIntensity={1} />
    </mesh>
  );
}

// Additional fast particle
function FastOrbitingParticle2({ cubePosition, orbitRadius = 3.5, speed = -2.5 }) {
  const particleRef = useRef();
  
  useFrame((state) => {
    if (particleRef.current) {
      const time = state.clock.elapsedTime * speed;
      particleRef.current.position.x = Math.cos(time) * orbitRadius;
      particleRef.current.position.z = Math.sin(time) * orbitRadius;
      particleRef.current.position.y = Math.cos(time * 1.8) * 0.6;
    }
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="#00aaff" emissive="#0088ff" emissiveIntensity={1} />
    </mesh>
  );
}

// Neon Holographic Cube
function NeonCube() {
  const cubeRef = useRef();
  const wireframeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.02;
      cubeRef.current.rotation.y += 0.02;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= 0.015;
      wireframeRef.current.rotation.y -= 0.015;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={0.6}>
      {/* Main cube with emissive glow */}
      <mesh ref={cubeRef} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00aaff"
          emissiveIntensity={1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Wireframe overlay with rotation offset */}
      <mesh ref={wireframeRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial
          color="#00ffff"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner glow core */}
      <mesh>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Speed line particles in space
function SpeedParticles() {
  const particles = useMemo(() => {
    const count = 80;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    return { positions, velocities };
  }, []);

  const particlesRef = useRef();

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += particles.velocities[i] * 2;
        positions[i + 1] += particles.velocities[i + 1] * 2;
        positions[i + 2] += particles.velocities[i + 2] * 2;
        
        // Reset if out of bounds
        if (Math.abs(positions[i]) > 8) positions[i] *= -1;
        if (Math.abs(positions[i + 1]) > 8) positions[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 8) positions[i + 2] *= -1;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#00f0ff" transparent opacity={0.9} />
    </points>
  );
}

// Bokeh Particles Background
function BokehParticles() {
  const particles = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00aaff"
        transparent
        opacity={0.3}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Scene Component
function Scene() {
  return (
    <>
      {/* Cool ambient lighting */}
      <ambientLight intensity={0.2} color="#0066ff" />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#00aaff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#0088ff" />

      {/* Electric blue emissive lighting */}
      <pointLight position={[0, 2, 3]} intensity={1.5} color="#00f0ff" distance={10} decay={2} />
      <pointLight position={[-4, 1, 2]} intensity={1} color="#00aaff" distance={8} decay={2} />
      <pointLight position={[4, 1, -2]} intensity={1} color="#0088ff" distance={8} decay={2} />

      {/* Dark gradient background */}
      <mesh position={[0, 0, -10]} scale={[30, 30, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#050515" transparent opacity={0.95} />
      </mesh>

      {/* Bokeh particles */}
      <BokehParticles />

      {/* Speed particles */}
      <SpeedParticles />

      {/* Neon cube */}
      <NeonCube />

      {/* Fast orbiting particles with trails */}
      <Trail
        width={0.4}
        length={6}
        color="#00f0ff"
        attenuation={(width) => width * 0.3}
        local={false}
      >
        <FastOrbitingParticle cubePosition={[0, 0, 0]} />
      </Trail>

      <Trail
        width={0.35}
        length={5}
        color="#00aaff"
        attenuation={(width) => width * 0.35}
        local={false}
      >
        <FastOrbitingParticle2 cubePosition={[0, 0, 0]} />
      </Trail>

      {/* Fast camera movement */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping
        dampingFactor={0.02}
      />
    </>
  );
}

// Main Export Component
export default function FasterDeveloperAnimation() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 50 }}
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

