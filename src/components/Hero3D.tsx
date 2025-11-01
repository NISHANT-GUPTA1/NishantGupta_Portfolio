import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Sphere, Box, Torus } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function Robot() {
  const { scene } = useGLTF('/models/robot.gltf');
  const robotRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Object3D | null>(null);
  const leftArmRef = useRef<THREE.Object3D | null>(null);
  const rightArmRef = useRef<THREE.Object3D | null>(null);
  const leftLegRef = useRef<THREE.Object3D | null>(null);
  const rightLegRef = useRef<THREE.Object3D | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isGreeting, setIsGreeting] = useState(true);
  const greetingStartTime = useRef<number>(0);

  useEffect(() => {
    // Find the head, arms, and legs in the scene
    if (robotRef.current) {
      const head = robotRef.current.getObjectByName('Head');
      if (head) {
        headRef.current = head;
      }
      // Try to find arms for animation
      const leftArm = robotRef.current.getObjectByName('Left Arm') || robotRef.current.getObjectByName('LeftArm');
      const rightArm = robotRef.current.getObjectByName('Right Arm') || robotRef.current.getObjectByName('RightArm');
      if (leftArm) leftArmRef.current = leftArm;
      if (rightArm) rightArmRef.current = rightArm;
      
      // Try to find legs for animation
      const leftLeg = robotRef.current.getObjectByName('Left Leg') || robotRef.current.getObjectByName('LeftLeg');
      const rightLeg = robotRef.current.getObjectByName('Right Leg') || robotRef.current.getObjectByName('RightLeg');
      if (leftLeg) leftLegRef.current = leftLeg;
      if (rightLeg) rightLegRef.current = rightLeg;
    }
  }, [scene]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Initialize greeting start time
    if (greetingStartTime.current === 0) {
      greetingStartTime.current = time;
    }
    
    const greetingElapsed = time - greetingStartTime.current;
    const greetingDuration = 2.5; // 2.5 seconds greeting
    
    // Greeting animation (first 2.5 seconds)
    if (isGreeting && greetingElapsed < greetingDuration) {
      // Wave the right arm
      if (rightArmRef.current) {
        const waveSpeed = 8;
        const waveAmount = 0.8;
        rightArmRef.current.rotation.z = -0.5 + Math.sin(time * waveSpeed) * waveAmount;
        rightArmRef.current.rotation.x = 0.3 + Math.sin(time * waveSpeed * 0.5) * 0.2;
      }
      
      // Slight head tilt during greeting
      if (headRef.current) {
        headRef.current.rotation.z = Math.sin(time * 4) * 0.1;
      }
      
      // Gentle body sway during greeting
      if (robotRef.current) {
        robotRef.current.position.y = -1.8 + Math.sin(time * 3) * 0.08;
      }
    } else {
      // End greeting after duration
      if (isGreeting) {
        setIsGreeting(false);
      }
      
      // Normal animations after greeting
      // Animate the head to follow cursor with even faster response
      if (headRef.current) {
        headRef.current.rotation.y = THREE.MathUtils.lerp(
          headRef.current.rotation.y,
          mousePosition.x * 0.6,
          0.2
        );
        headRef.current.rotation.x = THREE.MathUtils.lerp(
          headRef.current.rotation.x,
          mousePosition.y * 0.4,
          0.2
        );
        headRef.current.rotation.z = THREE.MathUtils.lerp(
          headRef.current.rotation.z,
          0,
          0.1
        );
      }

      // Add more pronounced idle body animation
      if (robotRef.current) {
        robotRef.current.rotation.y = Math.sin(time * 1.2) * 0.12;
        robotRef.current.position.y = -1.8 + Math.sin(time * 2.5) * 0.12;
        robotRef.current.rotation.z = Math.sin(time * 0.8) * 0.03;
      }

      // Animate arms with more dynamic movement and scroll-based interaction
      const scrollFactor = scrollY * 0.001;
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(time * 2) * 0.3 + scrollFactor * 0.5;
        leftArmRef.current.rotation.x = Math.sin(time * 1.5) * 0.1 + scrollFactor * 0.2;
      }
      if (rightArmRef.current) {
        rightArmRef.current.rotation.z = Math.sin(time * 2 + Math.PI) * 0.3 - scrollFactor * 0.5;
        rightArmRef.current.rotation.x = Math.sin(time * 1.5 + Math.PI) * 0.1 - scrollFactor * 0.2;
      }

      // Animate legs with scroll-based movement
      if (leftLegRef.current) {
        leftLegRef.current.rotation.x = Math.sin(time * 1.8) * 0.15 + scrollFactor * 0.3;
        leftLegRef.current.rotation.z = Math.sin(time * 1.2) * 0.05;
      }
      if (rightLegRef.current) {
        rightLegRef.current.rotation.x = Math.sin(time * 1.8 + Math.PI) * 0.15 - scrollFactor * 0.3;
        rightLegRef.current.rotation.z = Math.sin(time * 1.2 + Math.PI) * 0.05;
      }
    }
  });

  return (
    <primitive 
      ref={robotRef} 
      object={scene} 
      scale={0.9}
      position={[0, -1.8, 0]}
    />
  );
}

function FloatingElement({ position, scale, type }: { position: [number, number, number], scale: number, type: 'sphere' | 'box' | 'torus' }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.3;
    ref.current.rotation.y = time * 0.4;
    ref.current.position.y = position[1] + Math.sin(time * 0.8 + position[0]) * 0.3;
  });

  const material = <meshStandardMaterial 
    color="#a78bfa" 
    transparent 
    opacity={0.4}
    emissive="#a78bfa"
    emissiveIntensity={0.5}
    wireframe
  />;

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {type === 'sphere' && <sphereGeometry args={[1, 16, 16]} />}
      {type === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {type === 'torus' && <torusGeometry args={[1, 0.3, 16, 32]} />}
      {material}
    </mesh>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, 5, -5]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[0, -5, 5]} intensity={1.5} color="#a78bfa" />
        <directionalLight position={[0, 0, 10]} intensity={2.0} color="#ffffff" />
        <spotLight position={[0, 10, 0]} angle={0.4} intensity={2.0} color="#ffffff" />
        <pointLight position={[5, 0, 5]} intensity={1.5} color="#00ffff" />
        <pointLight position={[-5, 0, 5]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[0, 5, 3]} intensity={1.2} color="#ffffff" />
        
        {/* Floating decorative elements */}
        <FloatingElement position={[-4, 0, -2]} scale={0.6} type="sphere" />
        <FloatingElement position={[4, 1, -2]} scale={0.5} type="box" />
        <FloatingElement position={[-3.5, -1, -1]} scale={0.4} type="torus" />
        <FloatingElement position={[3.5, -0.5, -1.5]} scale={0.45} type="sphere" />
        <FloatingElement position={[-4.5, 2, -3]} scale={0.35} type="box" />
        <FloatingElement position={[4.5, -2, -3]} scale={0.4} type="torus" />
        
        <Robot />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};
