import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// DNA Helix Component
function DNAHelix() {
  const groupRef = useRef();
  const particlesRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.004;
    }
  });

  // Create DNA helix curves
  const helixCurve1 = useMemo(() => {
    const points = [];
    const count = 80;
    for (let i = 0; i <= count; i++) {
      const t = (i / count) * Math.PI * 5;
      points.push(
        new THREE.Vector3(
          Math.cos(t) * 1.2,
          (i / count) * 4 - 2,
          Math.sin(t) * 1.2
        )
      );
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  const helixCurve2 = useMemo(() => {
    const points = [];
    const count = 80;
    for (let i = 0; i <= count; i++) {
      const t = (i / count) * Math.PI * 5 + Math.PI;
      points.push(
        new THREE.Vector3(
          Math.cos(t) * 1.2,
          (i / count) * 4 - 2,
          Math.sin(t) * 1.2
        )
      );
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  // Connecting lines/rungs
  const connections = useMemo(() => {
    const lines = [];
    const count = 25;
    
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 5;
      const y = (i / count) * 4 - 2;
      const radius = 1.2;
      
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;
      
      lines.push(x1, y, z1, x2, y, z2);
    }
    
    return new Float32Array(lines);
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.25}>
        {/* First DNA spiral */}
        <mesh>
          <tubeGeometry args={[helixCurve1, 80, 0.08, 12, false]} />
          <meshStandardMaterial
            color="#88ccff"
            emissive="#4488ff"
            emissiveIntensity={0.7}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>

        {/* Second DNA spiral */}
        <mesh>
          <tubeGeometry args={[helixCurve2, 80, 0.08, 12, false]} />
          <meshStandardMaterial
            color="#88ccff"
            emissive="#4488ff"
            emissiveIntensity={0.7}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>

        {/* Connecting lines/rungs */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={connections.length / 3}
              array={connections}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.5} linewidth={2} />
        </lineSegments>

        {/* Floating tech nodes/particles along helix */}
        <group ref={particlesRef}>
          {Array.from({ length: 60 }).map((_, i) => {
            const t = (i / 60) * Math.PI * 5;
            const y = (i / 60) * 4 - 2;
            const radius = 1.25;
            const phase = i % 2 === 0 ? 0 : Math.PI;
            
            return (
              <mesh
                key={i}
                position={[
                  Math.cos(t + phase) * radius,
                  y,
                  Math.sin(t + phase) * radius
                ]}
              >
                <sphereGeometry args={[0.04, 8, 8]} />
                <meshBasicMaterial 
                  color={i % 3 === 0 ? "#ffffff" : "#88ccff"} 
                  transparent 
                  opacity={0.7}
                  emissive={i % 3 === 0 ? "#ffffff" : "#4488ff"}
                  emissiveIntensity={0.5}
                />
              </mesh>
            );
          })}
        </group>

        {/* Additional floating particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 2.5;
          return (
            <mesh
              key={`particle-${i}`}
              position={[
                Math.cos(angle) * radius,
                Math.sin(i * 0.5) * 1,
                Math.sin(angle) * radius
              ]}
            >
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshBasicMaterial 
                color="#ffffff" 
                transparent 
                opacity={0.4}
                emissive="#88ccff"
                emissiveIntensity={0.3}
              />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
}

// Bokeh Particles Background
function BokehParticles() {
  const particles = useMemo(() => {
    const count = 100;
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
        color="#88ccff"
        transparent
        opacity={0.25}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Scene Component
function Scene() {
  return (
    <>
      {/* Clean scientific lighting */}
      <ambientLight intensity={0.35} color="#e0f2fe" />
      <directionalLight position={[5, 5, 5]} intensity={0.7} color="#bae6fd" />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#7dd3fc" />

      {/* Light blue point lights */}
      <pointLight position={[0, 3, 4]} intensity={0.9} color="#88ccff" distance={10} decay={2} />
      <pointLight position={[-4, 2, 3]} intensity={0.6} color="#7dd3fc" distance={8} decay={2} />
      <pointLight position={[4, 2, -3]} intensity={0.6} color="#93c5fd" distance={8} decay={2} />

      {/* Modern gradient dark background */}
      <mesh position={[0, 0, -10]} scale={[30, 30, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#0a0f1a" transparent opacity={0.95} />
      </mesh>

      {/* Bokeh particles */}
      <BokehParticles />

      {/* DNA Helix */}
      <DNAHelix />

      {/* Smooth slow camera orbit */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.2}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

// Main Export Component
export default function TechnologiesAnimation() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 52 }}
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

