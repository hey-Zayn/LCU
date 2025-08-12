import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-[#520ADE]/95 via-[#520ADE]/90 to-[#000000] overflow-hidden text-white relative isolate">
      {/* Abstract shapes for background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* <div className="absolute top-10 left-10 w-72 h-72 bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 max-sm:hidden"></div> */}
        <span className="size-200 absolute -top-50 -right-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
      </div>
      
      <div className="mx-auto px-15 max-sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master New Skills to 
              <span className="text-white"> Advance Your Career</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Join over 25,000 learners who have transformed their careers through our expert-led training programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#courses" 
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Explore Courses
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#about-us" 
                className="bg-transparent  border-2 border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                About Us
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="w-full h-[400px] bg-white rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students learning together" 
                className="w-full h-full object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a]/90 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-center animate-fade-in">
                  <div className="hover:scale-105 transition-transform duration-300">
                    <p className="text-4xl font-extrabold text-pink-500 drop-shadow-lg">25K+</p>
                    <p className="text-[#F8F9FA] text-sm mt-2 font-medium tracking-wide">Successful Graduates</p>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <p className="text-4xl font-extrabold text-pink-500 drop-shadow-lg">96%</p>
                    <p className="text-[#F8F9FA] text-sm mt-2 font-medium tracking-wide">Career Placement Rate</p>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <p className="text-4xl font-extrabold text-pink-500 drop-shadow-lg">4.8/5</p>
                    <p className="text-[#F8F9FA] text-sm mt-2 font-medium tracking-wide">Average Rating</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-bold text-sm">Industry-Recognized</p>
                  <p className="text-gray-600 text-xs">Certifications</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-bold text-sm">Flexible Learning</p>
                  <p className="text-gray-600 text-xs">Learn at your pace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by */}
        <div className="mt-20 text-center">
          <p className="text-gray-200 mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-4 opacity-100">
            {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((company, index) => (
              <div key={index} className="text-white font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;