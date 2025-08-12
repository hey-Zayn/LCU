'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from './LoadingScreen';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./navbar/Header'));
const DynamicFooter = dynamic(() => import('./Footer'));

export default function SplashWrapper({ children }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const waitForLoad = () =>
      new Promise((resolve) => {
        if (document.readyState === 'complete') resolve();
        else window.addEventListener('load', resolve);
      });

    const minTime = new Promise((resolve) => setTimeout(resolve, 2000));

    Promise.all([waitForLoad(), minTime]).then(() => setIsReady(true));
  }, []);

  const hideHeader = pathname.startsWith('/AwaisSheikh') || pathname.startsWith('/admin') || pathname.startsWith('/dashboard') || pathname.startsWith('/login');


  return (
    <>
      {!isReady && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
          <LoadingScreen />
        </div>
      )}
      {isReady && (
        <div>
          {!hideHeader && <DynamicHeader />}
          {children}
          {!hideHeader && <DynamicFooter key={pathname} />}
        </div>
      )}
    </>
  );
}




// 'use client';
// import { useEffect, useState, lazy, Suspense } from 'react';
// import { usePathname } from 'next/navigation';
// import LoadingScreen from './LoadingScreen';

// const Header = lazy(() => import('./navbar/Header'));
// const Footer = lazy(() => import('./Footer'));

// export default function SplashWrapper({ children }) {
//   const [isReady, setIsReady] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const waitForPageLoad = () =>
//       new Promise((resolve) => {
//         if (document.readyState === 'complete') {
//           resolve();
//         } else {
//           window.addEventListener('load', resolve);
//         }
//       });

//     const minDelay = new Promise((resolve) => setTimeout(resolve, 2000));

//     Promise.all([waitForPageLoad(), minDelay]).then(() => {
//       setIsReady(true);
//     });

//     return () => {
//       window.removeEventListener('load', () => {});
//     };
//   }, []);

//   return (
//     <>
//       {!isReady && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
//           <LoadingScreen />
//         </div>
//       )}

//       {isReady && (
//         <Suspense fallback={
//           <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
//            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
//           </div>
//         }>
//           <Header />
//           {children}
//           <Footer key={pathname} />
//         </Suspense>
//       )}
//     </>
//   );
// }
