import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Banner 1: Welcome - Floating Light Particles with Gentle Motion
function WelcomeAnimation({ isActive = false }) {
  const welcomeGroupRef = useRef();
  const particleCount = 18; // Reduced from 30

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      initialX: (Math.random() - 0.5) * 10,
      initialY: (Math.random() - 0.5) * 7,
      initialZ: (Math.random() - 0.5) * 6,
      size: 0.08 + Math.random() * 0.12,
      speed: 0.3 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2
    }));
  }, []);

  useFrame((state) => {
    if (welcomeGroupRef.current && isActive) {
      welcomeGroupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={welcomeGroupRef}>
      {particles.map((particle, i) => (
        <FloatingParticle key={particle.id} particle={particle} isActive={isActive} index={i} />
      ))}
      <WelcomeOrb isActive={isActive} />
      <LightRays isActive={isActive} />
    </group>
  );
}

// Floating Particle Component
function FloatingParticle({ particle, isActive, index }) {
  const particleRef = useRef();

  useFrame((state) => {
    if (particleRef.current && isActive) {
      const time = state.clock.elapsedTime;
      particleRef.current.position.y = particle.initialY + Math.sin(time * particle.speed + particle.phase) * 2;
      particleRef.current.position.x = particle.initialX + Math.cos(time * particle.speed * 0.7 + particle.phase) * 1.5;
      const scale = 1 + Math.sin(time * 2 + particle.phase) * 0.3;
      particleRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group
      ref={particleRef}
      position={[particle.initialX, particle.initialY, particle.initialZ]}
    >
      <mesh>
        <sphereGeometry args={[particle.size, 6, 6]} />{/* Reduced from 16,16 */}
        <meshStandardMaterial
          color="#88ccff"
          emissive="#4488ff"
          emissiveIntensity={isActive ? 1.5 : 0.3}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      <pointLight
        position={[0, 0, 0]}
        intensity={isActive ? 0.8 : 0.1}
        color="#88ccff"
        distance={3}
        decay={2}
      />
    </group>
  );
}

// Welcome Orb
function WelcomeOrb({ isActive }) {
  const orbRef = useRef();

  useFrame((state) => {
    if (orbRef.current && isActive) {
      const time = state.clock.elapsedTime;
      orbRef.current.position.y = Math.sin(time * 0.5) * 0.5;
      orbRef.current.rotation.y += 0.005;
      const scale = 1 + Math.sin(time * 1.5) * 0.1;
      orbRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={orbRef} position={[0, 0, 0]}>
      <mesh>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#88ccff"
          emissiveIntensity={isActive ? 0.8 : 0.2}
          metalness={0.2}
          roughness={0.1}
          transparent
          opacity={isActive ? 0.9 : 0.4}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.85, 16, 16]} />
        <meshBasicMaterial
          color="#88ccff"
          transparent
          opacity={isActive ? 0.4 : 0.1}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.6, 24]} />
        <meshBasicMaterial
          color="#4488ff"
          transparent
          opacity={isActive ? 0.3 : 0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      <pointLight
        position={[0, 0, 0]}
        intensity={isActive ? 2 : 0.3}
        color="#88ccff"
        distance={8}
        decay={2}
      />
    </group>
  );
}

// Gentle Light Rays
function LightRays({ isActive }) {
  const raysRef = useRef();
  const rayCount = 6; // Reduced from 8

  useFrame((state) => {
    if (raysRef.current && isActive) {
      raysRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={raysRef} position={[0, 0, 0]}>
      {Array.from({ length: rayCount }).map((_, i) => {
        const angle = (i / rayCount) * Math.PI * 2;
        const radius = 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            rotation={[0, 0, angle]}
          >
            <planeGeometry args={[0.06, 2.5]} />
            <meshBasicMaterial
              color="#88ccff"
              transparent
              opacity={isActive ? 0.4 : 0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Banner 2: 3D Network Dots
function NetworkDots({ isActive = false }) {
  const networkRef = useRef();
  const nodeCount = 20; // Reduced from 35

  const nodes = useMemo(() => {
    const nodeArray = [];
    for (let i = 0; i < nodeCount; i++) {
      nodeArray.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 8
        ],
        size: 0.06 + Math.random() * 0.1
      });
    }
    return nodeArray;
  }, []);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        if (dist < 3) {
          lines.push([...nodes[i].position, ...nodes[j].position]);
        }
      }
    }
    return new Float32Array(lines.flat());
  }, [nodes]);

  useFrame((state) => {
    if (networkRef.current && isActive) {
      networkRef.current.rotation.y += 0.005;
      networkRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={networkRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#88ccff"
          transparent
          opacity={isActive ? 0.4 : 0.15}
        />
      </lineSegments>

      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          <mesh>
            <sphereGeometry args={[node.size, 6, 6]} />{/* Reduced from 16,16 */}
            <meshStandardMaterial
              color="#88ccff"
              emissive="#4488ff"
              emissiveIntensity={isActive ? 1.5 : 0.3}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
          <pointLight
            position={[0, 0, 0]}
            intensity={isActive ? 0.8 : 0.1}
            color="#88ccff"
            distance={3}
            decay={2}
          />
        </group>
      ))}
    </group>
  );
}

// Banner 3: Digital Grid
function DigitalGrid({ isActive = false }) {
  const gridRef = useRef();
  const gridSize = 10;
  const gridSpacing = 0.7;

  useFrame((state) => {
    if (gridRef.current && isActive) {
      const time = state.clock.elapsedTime;
      const scale = 0.8 + Math.sin(time * 0.6) * 0.15;
      gridRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.08);
      gridRef.current.rotation.z = Math.sin(time * 0.2) * 0.05;
    }
  });

  const gridLines = useMemo(() => {
    const lines = [];
    for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
      lines.push(-gridSize * gridSpacing, i * gridSpacing, 0, gridSize * gridSpacing, i * gridSpacing, 0);
    }
    for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
      lines.push(i * gridSpacing, -gridSize * gridSpacing, 0, i * gridSpacing, gridSize * gridSpacing, 0);
    }
    for (let i = -gridSize / 2; i <= gridSize / 2; i += 2) {
      lines.push(-gridSize * gridSpacing, 0, i * gridSpacing * 0.5, gridSize * gridSpacing, 0, i * gridSpacing * 0.5);
      lines.push(0, -gridSize * gridSpacing, i * gridSpacing * 0.5, 0, gridSize * gridSpacing, i * gridSpacing * 0.5);
    }
    return new Float32Array(lines);
  }, []);

  const gridPoints = useMemo(() => {
    const points = [];
    for (let x = -gridSize / 2; x <= gridSize / 2; x += 1) {
      for (let y = -gridSize / 2; y <= gridSize / 2; y += 1) {
        points.push(x * gridSpacing, y * gridSpacing, 0);
        if ((x + y) % 3 === 0) {
          points.push(x * gridSpacing, y * gridSpacing, -0.5);
          points.push(x * gridSpacing, y * gridSpacing, 0.5);
        }
      }
    }
    return new Float32Array(points);
  }, []);

  return (
    <group ref={gridRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={gridLines.length / 3}
            array={gridLines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#22d3ee"
          transparent
          opacity={isActive ? 0.8 : 0.2}
        />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={gridPoints.length / 3}
            array={gridPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isActive ? 0.12 : 0.06}
          color="#22d3ee"
          transparent
          opacity={isActive ? 1 : 0.3}
        />
      </points>

      <pointLight position={[0, 0, 0]} intensity={isActive ? 1.2 : 0.3} color="#22d3ee" distance={6} decay={2} />
      <pointLight position={[-3, 1.5, 0]} intensity={isActive ? 0.8 : 0.2} color="#06b6d4" distance={6} decay={2} />
      <pointLight position={[3, -1.5, 0]} intensity={isActive ? 0.8 : 0.2} color="#06b6d4" distance={6} decay={2} />
    </group>
  );
}

// Background particles - reduced count
function BackgroundParticles({ isActive = false }) {
  const particlesRef = useRef();
  const particles = useMemo(() => {
    const count = 60; // Reduced from 100
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return { positions };
  }, []);

  useFrame((state) => {
    if (particlesRef.current && isActive) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      // Only update every other frame for performance
      if (Math.round(state.clock.elapsedTime * 60) % 2 === 0) {
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }
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
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.25}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Main Scene Component
function Scene({ activeSlide = 0 }) {
  return (
    <>
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight position={[8, 6, 6]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-8, -6, -6]} intensity={0.4} color="#4488ff" />
      <directionalLight position={[0, 8, 0]} intensity={0.3} color="#88ccff" />

      <BackgroundParticles isActive={true} />

      {activeSlide === 0 && <WelcomeAnimation isActive={true} />}
      {activeSlide === 1 && <NetworkDots isActive={true} />}
      {activeSlide === 2 && <DigitalGrid isActive={true} />}

      <ResponsiveCamera />
    </>
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const aspect = size.width / size.height;
    const targetWidth = 14;
    const fovRad = (camera.fov * Math.PI) / 180;
    const distance = targetWidth / (2 * Math.tan(fovRad / 2) * aspect);
    camera.position.z = Math.max(8, Math.min(distance, 25));
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

// Main Export Component — pauses WebGL when scrolled out of view
export default function Hero3DAnimation({ activeSlide = 0 }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          alpha: true,
          antialias: false, // Disabled for performance
          preserveDrawingBuffer: false,
          powerPreference: 'high-performance'
        }}
        frameloop={isVisible ? 'always' : 'never'} // Pause when off-screen
        style={{
          background: 'transparent',
          width: '100%',
          height: '85%',
          display: 'block'
        }}
        dpr={1} // Fixed at 1x — eliminates 4x pixel cost on retina screens
      >
        <Scene activeSlide={activeSlide} />
      </Canvas>
      {/* High-performance bottom fade-out overlay instead of expensive CSS WebGL masking */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent pointer-events-none" />
    </div>
  );
}
