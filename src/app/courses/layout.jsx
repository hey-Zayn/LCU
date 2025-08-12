
import Navbar from '@/Dev/courseComp/Navbar';
import Footer from '@/Dev/courseComp/Footer';
import { CourseProvider } from '@/Dev/courseComp/course/CourseContext';



export default function RootLayout({ children }) {
  return (
        <div className="flex flex-col min-h-screen">
          {/* <Navbar/> */}
          <main className="flex-grow">
            <CourseProvider>
            {children}
            </CourseProvider>
          </main>
          {/* <Footer /> */}
        </div>
  );
}
