
import Navbar from '@/Dev/courseComp/Navbar';
import Footer from '@/Dev/courseComp/Footer';



export default function RootLayout({ children }) {
  return (
        <div className="flex flex-col min-h-screen">
          {/* <Navbar/> */}
          <main className="flex-grow">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
  );
}
