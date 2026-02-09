"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Environment, PresentationControls, ContactShadows } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const materials = [
    { name: "Carrara Marble", texture: "/assets/marble.png", color: "#ffffff", desc: "Sourced from the heart of Tuscany, exhibiting ethereal veining." },
    { name: "Brushed Gunmetal", texture: "/assets/metal.png", color: "#2a2a2a", desc: "Precision engineered with a hand-brushed artisanal finish." },
    { name: "Royal Taupe Suede", texture: "/assets/hero.png", color: "#483c32", desc: "Italian-tanned hide with a non-reflective, deep tactile soul." },
    { name: "Aged Smoked Walnut", texture: "/assets/hero.png", color: "#1a1614", desc: "Centuries-old timber treated with natural oils and smoke." },
];

const MaterialSample = ({ material, index, active }: { material: any, index: number, active: boolean }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useLoader(THREE.TextureLoader, material.texture);

    useFrame((state) => {
        if (meshRef.current && !active) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={active ? 0.2 : 1} floatIntensity={1}>
            <PresentationControls
                enabled={active}
                global
                snap
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 2, Math.PI / 2]}
            >
                <mesh
                    ref={meshRef}
                    position={[(index - 1.5) * 2.5, 0, 0]}
                    scale={active ? [1.8, 1.8, 0.15] : [1.2, 1.2, 0.1]}
                    castShadow
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhysicalMaterial
                        map={texture as any}
                        color={material.color}
                        reflectivity={1}
                        roughness={0.1}
                        metalness={0.5}
                        clearcoat={1}
                    />
                </mesh>
            </PresentationControls>
        </Float>
    );
};

export default function MaterialsCraftsmanship() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="h-screen bg-black relative overflow-hidden flex items-center">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_70%)]" />

            <div className="absolute inset-0 z-0">
                <Canvas shadows camera={{ position: [0, 0, 6], fov: 40 }}>
                    <Suspense fallback={null}>
                        <Scene materials={materials} activeIndex={activeIndex} />
                    </Suspense>
                    <Environment preset="studio" />
                    <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={15} blur={3} far={5} />
                </Canvas>
            </div>

            <div className="container mx-auto px-8 md:px-20 relative z-10 pointer-events-none">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <span className="text-gold text-[10px] uppercase tracking-[1em] block mb-12 opacity-60">The Physical Manifest</span>
                        <h2 className="text-white text-7xl md:text-[10rem] font-serif uppercase leading-none mb-16">
                            Tectonic <br />
                            <span className="italic text-gold-soft">Finesse.</span>
                        </h2>

                        <div className="flex flex-col gap-8 pointer-events-auto max-w-xs transition-all">
                            {materials.map((m, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`group text-left transition-all duration-700 ${activeIndex === i ? 'pl-8' : 'pl-0'}`}
                                >
                                    <div className="flex flex-col">
                                        <span className={`text-[11px] uppercase tracking-[0.5em] mb-2 ${activeIndex === i ? 'text-gold' : 'text-white/20'}`}>
                                            {m.name}
                                        </span>
                                        <div className={`h-[1px] bg-gold/30 transition-all duration-700 ${activeIndex === i ? 'w-full' : 'w-12'}`} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/2 right-12 md:right-24 -translate-y-1/2 text-right hidden lg:block pointer-events-none max-w-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-end"
                    >
                        <span className="text-gold font-serif text-[12rem] italic leading-none mb-8 opacity-40">0{activeIndex + 1}</span>
                        <h4 className="text-white text-2xl uppercase tracking-widest mb-6 font-serif">Aesthetic DNA</h4>
                        <p className="text-white/40 text-sm leading-relaxed font-light italic">
                            "{materials[activeIndex].desc}"
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

function Scene({ materials, activeIndex }: { materials: any[], activeIndex: number }) {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={2} angle={0.2} penumbra={1} color="#e5d5b0" />

            {materials.map((material, index) => (
                <MaterialSample
                    key={index}
                    material={material}
                    index={index}
                    active={activeIndex === index}
                />
            ))}
        </>
    );
}
