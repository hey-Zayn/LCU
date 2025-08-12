"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./GalaxyBackground";
import { PerformanceMonitor } from "@react-three/drei";
export default function LoadingScreen() {
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showCanvas, setShowCanvas] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowCanvas(false);
      },
    });

    tl.fromTo(
      logoRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power2.out" }
    );

    tl.to(
      progressBarRef.current,
      {
        width: "100%",
        duration: 3,
        repeat: 1,
        yoyo: true,
        background:
          "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
        backgroundSize: "100% 100%",
        ease: "power2.out",
      },
      "-=1"
    );
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black max-h-screen">
      {showCanvas && (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 10] }}
            dpr={[1, 1.5]}
            gl={{ powerPreference: "high-performance", antialias: false }}
          >
            <PerformanceMonitor onDecline={() => {}} />
            <Suspense fallback={null}>
              <Galaxy count={6000} radius={10} />
            </Suspense>
          </Canvas>
        </div>
      )}

      <div
        ref={logoRef}
        className="relative text-center flex justify-center items-center -mt-20 2xl:-mt-50 w-[50%] 2xl:w-[40%] h-50 overflow-hidden"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        <Image
          src="/dev/images/forwardsols_logo.svg"
          alt="Logo"
          width={760}
          height={460}
          priority
          className=""
        />
      </div>

      <div
        ref={progressBarRef}
        className="absolute bottom-10 left-0 w-0 h-2 bg-transparent"
      ></div>
    </div>
  );
}
