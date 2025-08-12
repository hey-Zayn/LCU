"use client";
import React, {
  useRef,
  Suspense,
  useState,
  useLayoutEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";
import { PerformanceMonitor } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Galaxy } from "./GalaxyBackground";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

/* eslint-disable react/no-unknown-property */
const LogoModel = ({ url, modelRef, visible, emissiveIntensity = 0 }) => {
  const { scene } = useLoader(GLTFLoader, url);

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.emissive = new THREE.Color("yellow");
        child.material.emissiveIntensity = emissiveIntensity;
      }
    });
  }, [emissiveIntensity, scene]);

  return <primitive ref={modelRef} object={scene} visible={visible} />;
};

LogoModel.propTypes = {
  url: PropTypes.string.isRequired,
  modelRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  visible: PropTypes.bool.isRequired,
  emissiveIntensity: PropTypes.number,
};

const Scene = ({ progress, leftModelRef, rightModelRef }) => {
  const cameraRef = useRef(null);
  const [emissiveIntensity, setEmissiveIntensity] = useState(0);
  const [bloomIntensity, setBloomIntensity] = useState(1);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  useLayoutEffect(() => {
    if (!leftModelRef?.current || !rightModelRef?.current) return;

    leftModelRef.current.position.set(-4, 0, 0);
    rightModelRef.current.position.set(4, 0, 0);
    leftModelRef.current.rotation.set(0, 0, 0);
    rightModelRef.current.rotation.set(0, Math.PI, 0);
    leftModelRef.current.scale.set(15, 15, 15);
    rightModelRef.current.scale.set(15, 15, 15);

    if (progress < 0.5) {
      const moveProgress = progress / 0.5;
      const reverseGlow = moveProgress;

      leftModelRef.current.position.x = -4 + 4 * moveProgress;
      rightModelRef.current.position.x = 4 - 4 * moveProgress;

      const intensity = reverseGlow * 45;
      setEmissiveIntensity(intensity);
      setBloomIntensity(reverseGlow * 2.5);

      const colorValue = 70 + reverseGlow * 30;

      leftModelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color = new THREE.Color(
            `hsl(50, 200%, ${colorValue}%)`
          );
        }
      });

      rightModelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color = new THREE.Color(
            `hsl(50, 100%, ${colorValue}%)`
          );
        }
      });
    } else if (progress < 0.7) {
      setBloomIntensity(0);
    }
  }, [progress, leftModelRef, rightModelRef]);

  const blackTexture = useMemo(() => {
   const texture = new THREE.DataTexture(
    new Uint8Array([128, 128, 128, 255]), // Neutral gray
    1, 1,
    THREE.RGBAFormat
  );
  texture.needsUpdate = true;
  return texture;
  }, []);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000}
        makeDefault
        position={[0, 0, 10]}
      />
       <color attach="background" args={["#000000"]} />
      <Environment map={blackTexture} background={false} />

      <EffectComposer>
        <Bloom
          intensity={bloomIntensity}
          kernelSize={4}
          luminanceThreshold={0}
          luminanceSmoothing={0.2}
          height={300}
          
        />
      </EffectComposer>

      <LogoModel
        url="/left_logo.gltf"
        modelRef={leftModelRef}
        visible={progress < 0.5}
        emissiveIntensity={emissiveIntensity}
      />
      <LogoModel
        url="/right_logo.gltf"
        modelRef={rightModelRef}
        visible={progress < 0.5}
        emissiveIntensity={emissiveIntensity}
      />
    </>
  );
};

Scene.propTypes = {
  progress: PropTypes.number.isRequired,
  leftModelRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  rightModelRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
};

const ScrollMerge3D = () => {
  const containerRef = useRef();
  const leftModelRef = useRef();
  const rightModelRef = useRef();
  const [progress, setProgress] = useState(0);

  //.fade-in_ani

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = containerRef.current;
      imagesLoaded(section, { background: true }, () => {
        const elements = gsap.utils.toArray(".fade-in_ani");

        elements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx;
    let trigger;
    let loadTimeout;

    const initScrollTrigger = () => {
      ctx = gsap.context(() => {
        const section = containerRef.current;
        if (!section) return;

        trigger = ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => setProgress(self.progress),
        });
      }, containerRef);
    };

    // Initialize after images load (with fallback)
    loadTimeout = setTimeout(initScrollTrigger, 1000);
    imagesLoaded(containerRef.current, { background: true }, initScrollTrigger);

    return () => {
      clearTimeout(loadTimeout);
      trigger?.kill(); // Kill ScrollTrigger first
      ctx?.revert(); // Then revert GSAP context
    };
  }, []);

  const data = [
    {
      title: "Quality Blinds & Shades",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Quality-Blinds.svg",
    },
    {
      title: "Pert Pert Guys",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Peri-Peri.svg",
    },
    {
      title: "Kinetic By Windstream",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Kinetic-by-Windstream-.svg",
    },
    {
      title: "CenturyLink",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Centurylink-Logo.svg",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[150vh] max-sm:h-[120vh] bg-black"
    >
      <div className="sticky top-0  h-screen w-full max-sm:hidden">
        <Canvas
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <PerformanceMonitor onDecline={() => {}} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Scene
              progress={progress}
              leftModelRef={leftModelRef}
              rightModelRef={rightModelRef}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-30">
        {progress < 0.5 ? (
          <h1 className="text-4xl md:text-3xl font-bold text-white text-center px-4 fade-in_ani">
            <p>
              <span className="block">We have worked with</span> some of the
              biggest names in USA
            </p>
          </h1>
        ) : (
          <div>
            <div className="absolute inset-0 z-[-1] h-[150vh] max-sm:h-[125vh] w-full top-[-50]">
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
            <div className="flex items-center justify-center w-full relative z-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-sm:grid-cols-2 max-sm:gap-4 w-[80%]">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 z-200 cursor-pointer"
                  >
                    <div className="mb-4">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-50 h-26 m-0"
                      />
                    </div>
                    <div className="text-2xl font-bold mb-2 text-white">
                      {item.title}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-200">
                      <img
                        src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667aca61d042ae963615ccce_Vector%2051.svg"
                        alt="Arrow 1"
                        className="absolute top-0 left-0 w-4 h-4 animate-pulse"
                      />
                      <img
                        src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667aca6107b7a31ee16d000d_Vector%2054.svg"
                        alt="Arrow 2"
                        className="absolute top-0 right-0 w-4 h-4 animate-pulse"
                      />
                      <img
                        src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667acb7520e9415502cb2e7c_Vector%2058.svg"
                        alt="Arrow 3"
                        className="absolute bottom-0 left-0 w-4 h-4 animate-pulse"
                      />
                      <img
                        src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667acb75bc1b8ff571ae54ef_Vector%2060.svg"
                        alt="Arrow 4"
                        className="absolute bottom-0 right-0 w-4 h-4 animate-pulse"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollMerge3D;
