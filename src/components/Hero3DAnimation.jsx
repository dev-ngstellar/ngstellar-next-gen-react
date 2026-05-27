import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Trail } from '@react-three/drei';
import * as THREE from 'three';

// Banner 1: Welcome - Floating Light Particles with Gentle Motion
function WelcomeAnimation({ isActive = false }) {
  const welcomeGroupRef = useRef();
  const particleCount = 30;

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
      {/* Floating light particles */}
      {particles.map((particle, i) => (
        <FloatingParticle key={particle.id} particle={particle} isActive={isActive} index={i} />
      ))}

      {/* Central welcoming light orb */}
      <WelcomeOrb isActive={isActive} />

      {/* Gentle light rays */}
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
      particleRef.current.rotation.y += 0.01;
      // Gentle pulsing
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
        <sphereGeometry args={[particle.size, 16, 16]} />
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

// Welcome Orb - Central welcoming element
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
      {/* Main orb */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
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
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.85, 24, 24]} />
        <meshBasicMaterial
          color="#88ccff"
          transparent
          opacity={isActive ? 0.4 : 0.1}
          side={THREE.BackSide}
        />
      </mesh>
      {/* Outer glow rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.6, 32]} />
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
  const rayCount = 8;

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

// Banner 2: 3D Rotating Dots and Lines Network - Full Container
function NetworkDots({ isActive = false }) {
  const networkRef = useRef();
  const nodeCount = 35;
  
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

  // Create connections between nearby nodes
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
          lines.push([
            ...nodes[i].position,
            ...nodes[j].position
          ]);
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
      {/* Connection lines */}
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
          linewidth={1}
        />
      </lineSegments>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          <mesh>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial
              color="#88ccff"
              emissive="#4488ff"
              emissiveIntensity={isActive ? 1.5 : 0.3}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
          {/* Outer glow ring */}
          <mesh>
            <ringGeometry args={[node.size * 1.5, node.size * 2, 16]} />
            <meshBasicMaterial
              color="#88ccff"
              transparent
              opacity={isActive ? 0.3 : 0.1}
              side={THREE.DoubleSide}
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

// Banner 3: 3D Growing Digital Grid - Full Container
function DigitalGrid({ isActive = false }) {
  const gridRef = useRef();
  const gridSize = 10;
  const gridSpacing = 0.7;

  useFrame((state) => {
    if (gridRef.current && isActive) {
      const time = state.clock.elapsedTime;
      // Growing animation with pulse
      const scale = 0.8 + Math.sin(time * 0.6) * 0.15;
      gridRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.08);
      // Subtle rotation
      gridRef.current.rotation.z = Math.sin(time * 0.2) * 0.05;
    }
  });

  // Grid lines
  const gridLines = useMemo(() => {
    const lines = [];
    
    // Horizontal lines
    for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
      lines.push(
        -gridSize * gridSpacing, i * gridSpacing, 0,
        gridSize * gridSpacing, i * gridSpacing, 0
      );
    }
    
    // Vertical lines
    for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
      lines.push(
        i * gridSpacing, -gridSize * gridSpacing, 0,
        i * gridSpacing, gridSize * gridSpacing, 0
      );
    }
    
    // Depth lines
    for (let i = -gridSize / 2; i <= gridSize / 2; i += 2) {
      lines.push(
        -gridSize * gridSpacing, 0, i * gridSpacing * 0.5,
        gridSize * gridSpacing, 0, i * gridSpacing * 0.5
      );
      lines.push(
        0, -gridSize * gridSpacing, i * gridSpacing * 0.5,
        0, gridSize * gridSpacing, i * gridSpacing * 0.5
      );
    }
    
    return new Float32Array(lines);
  }, []);

  // Grid points/intersections with depth layers
  const gridPoints = useMemo(() => {
    const points = [];
    for (let x = -gridSize / 2; x <= gridSize / 2; x += 1) {
      for (let y = -gridSize / 2; y <= gridSize / 2; y += 1) {
        // Main layer
        points.push(x * gridSpacing, y * gridSpacing, 0);
        // Depth layers
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
      {/* Grid lines */}
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
          linewidth={1.5}
        />
      </lineSegments>

      {/* Grid points with varying sizes */}
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
          emissive="#06b6d4"
          emissiveIntensity={isActive ? 1.5 : 0.3}
        />
      </points>

      {/* Multiple glow points for full coverage */}
      <pointLight
        position={[0, 0, 0]}
        intensity={isActive ? 1.2 : 0.3}
        color="#22d3ee"
        distance={6}
        decay={2}
      />
      <pointLight
        position={[-3, 1.5, 0]}
        intensity={isActive ? 0.8 : 0.2}
        color="#06b6d4"
        distance={6}
        decay={2}
      />
      <pointLight
        position={[3, -1.5, 0]}
        intensity={isActive ? 0.8 : 0.2}
        color="#06b6d4"
        distance={6}
        decay={2}
      />
    </group>
  );
}

// Background particles for all banners - Full Container
function BackgroundParticles({ isActive = false }) {
  const particlesRef = useRef();
  const particles = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() * 0.06 + 0.03;
    }
    return { positions, sizes };
  }, []);

  useFrame((state) => {
    if (particlesRef.current && isActive) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Slow drift animation
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
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
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
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

// Ambient glow background planes for depth - removed square background
function AmbientGlow({ activeSlide }) {
  // No square background - just ambient effects
  return null;
}

// Main Scene Component
function Scene({ activeSlide = 0 }) {
  return (
    <>
      {/* Enhanced ambient lighting - blue theme for all */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight position={[8, 6, 6]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-8, -6, -6]} intensity={0.4} color="#4488ff" />
      <directionalLight position={[0, 8, 0]} intensity={0.3} color="#88ccff" />

      {/* Ambient glow background */}
      <AmbientGlow activeSlide={activeSlide} />

      {/* Background particles */}
      <BackgroundParticles isActive={true} />

      {/* Banner 1: Welcome Animation (Slide 0) */}
      {activeSlide === 0 && (
        <WelcomeAnimation isActive={true} />
      )}

      {/* Banner 2: Network Dots (Slide 1) */}
      {activeSlide === 1 && (
        <NetworkDots isActive={true} />
      )}

      {/* Banner 3: Digital Grid (Slide 2) */}
      {activeSlide === 2 && (
        <DigitalGrid isActive={true} />
      )}

      {/* Camera controls - static view for full container */}
      {/* OrbitControls removed to prevent touch event stealing on mobile */}

      
      {/* Responsive Camera Adjustment */}
      <ResponsiveCamera />
    </>
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const aspect = size.width / size.height;
    // Ensure the scene fits horizontally
    // The scene width is roughly 10-12 units
    const targetWidth = 14; 
    const fovRad = (camera.fov * Math.PI) / 180;
    const distance = targetWidth / (2 * Math.tan(fovRad / 2) * aspect);
    
    // Clamp the distance
    // Min 8 (original desktop distance)
    // Max 25 (for very narrow screens)
    camera.position.z = Math.max(8, Math.min(distance, 25));
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

// Main Export Component
export default function Hero3DAnimation({ activeSlide = 0 }) {
  return (
    <div 
      className="w-full h-full relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          alpha: true, 
          antialias: true, 
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance'
        }}
        style={{ 
          background: 'transparent', 
          width: '100%', 
          height: '85%',
          display: 'block'
        }}
        dpr={[1, 2]}
      >
        <Scene activeSlide={activeSlide} />
      </Canvas>
    </div>
  );
}
