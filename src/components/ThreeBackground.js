"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

// Colors: High Contrast Medical Palette
const COLOR_PRIMARY = "#0369a1"; // Deep Sky Blue (sky-700)
const COLOR_SECONDARY = "#0d9488"; // Deep Teal (teal-600)
const COLOR_ACCENT = "#38bdf8"; // Bright Blue (sky-400)
const COLOR_BOND = "#94a3b8"; // Slate Gray (slate-400) - Visible against white

// Material: Glossy but opaque enough to be seen
const MaterialSettings = {
    roughness: 0.2,
    metalness: 0.1,
    transmission: 0, // No glass effect for visibility
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    opacity: 1, // Full opacity
    transparent: false,
};

function Molecule({ position, rotation, scale = 1, type = "primary" }) {
    const group = useRef();

    useFrame((state, delta) => {
        if (group.current) {
            // Gentle constant rotation
            group.current.rotation.x += 0.001;
            group.current.rotation.y += 0.002;
        }
    });

    const atomColor = type === "primary" ? COLOR_PRIMARY : COLOR_SECONDARY;
    const orbColor = type === "primary" ? COLOR_SECONDARY : COLOR_ACCENT;

    return (
        <Float
            speed={1.0}
            rotationIntensity={0.4}
            floatIntensity={0.6}
            position={position}
        >
            <group ref={group} rotation={rotation} scale={scale}>
                {/* Central Atom */}
                <Sphere args={[0.7, 32, 32]}>
                    <meshPhysicalMaterial color={atomColor} {...MaterialSettings} />
                </Sphere>

                {/* Bond 1 */}
                <Cylinder args={[0.1, 0.1, 1.8]} rotation={[0, 0, Math.PI / 3]} position={[0.7, 0.6, 0]}>
                    <meshStandardMaterial color={COLOR_BOND} />
                </Cylinder>
                <Sphere args={[0.4, 32, 32]} position={[1.4, 1.2, 0]}>
                    <meshPhysicalMaterial color={orbColor} {...MaterialSettings} />
                </Sphere>

                {/* Bond 2 */}
                <Cylinder args={[0.1, 0.1, 1.8]} rotation={[0, 0, -Math.PI / 3]} position={[-0.7, 0.6, 0]}>
                    <meshStandardMaterial color={COLOR_BOND} />
                </Cylinder>
                <Sphere args={[0.4, 32, 32]} position={[-1.4, 1.2, 0]}>
                    <meshPhysicalMaterial color={orbColor} {...MaterialSettings} />
                </Sphere>

                {/* Bond 3 */}
                <Cylinder args={[0.1, 0.1, 1.6]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.6, 0.6]}>
                    <meshStandardMaterial color={COLOR_BOND} />
                </Cylinder>
                <Sphere args={[0.35, 32, 32]} position={[0, -1.0, 1.2]}>
                    <meshPhysicalMaterial color={orbColor} {...MaterialSettings} />
                </Sphere>
            </group>
        </Float>
    );
}

function Particles() {
    // Count optimized for a single fixed screen - "Scattered everywhere"
    const count = 25;
    const items = useMemo(() => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push({
                position: [
                    (Math.random() - 0.5) * 35, // Wide X
                    (Math.random() - 0.5) * 25, // Full Screen Y
                    (Math.random() - 0.5) * 15  // Depth
                ],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
                scale: 0.25 + Math.random() * 0.35, // Smaller scale
                type: Math.random() > 0.5 ? "primary" : "secondary"
            });
        }
        return arr;
    }, []);

    return (
        <>
            {items.map((item, i) => (
                <Molecule
                    key={i}
                    position={item.position}
                    rotation={item.rotation}
                    scale={item.scale}
                    type={item.type}
                />
            ))}
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-slate-100/80" />

            <Canvas
                camera={{ position: [0, 0, 15], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#38bdf8" />

                <Environment preset="city" />

                <Particles />

                {/* Subtle fog */}
                <fog attach="fog" args={['#F8FAFC', 5, 25]} />
            </Canvas>
        </div>
    );
}
