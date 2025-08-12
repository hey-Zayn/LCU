import { CheckCircle2, Trophy, Users, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen size={36} className="text-[#520ADE] group-hover:text-pink-700" />,
      title: "Expert-Led Instruction",
      description: "Learn from industry professionals with real-world experience in their fields."
    },
    {
      icon: <Trophy size={36} className="text-[#520ADE] group-hover:text-pink-700" />,
      title: "Industry-Recognized Certificates",
      description: "Earn credentials that are respected and recognized by employers worldwide."
    },
    {
      icon: <Users size={36} className="text-[#520ADE] group-hover:text-pink-700" />,
      title: "Collaborative Learning",
      description: "Connect with peers, build your network, and learn through group-projects."
    },
    {
      icon: <CheckCircle2 size={36} className="text-[#520ADE] group-hover:text-pink-700" />,
      title: "Job-Ready Skills",
      description: "Develop practical, hands-on skills that prepare you for immediate employment."
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-black">
      <div className="mx-auto max-sm:px-6 px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Forwardsols</h2>
            <p className="text-gray-300 mb-6 text-lg">
              At Forwardsols, we're dedicated to transforming careers through high-quality, industry-relevant education. Our mission is to make professional skills accessible to everyone, everywhere.
            </p>
            <p className="text-gray-300 mb-8">
              Founded in 2018, we've helped over 25,000 students master in-demand skills and secure positions at leading companies. Our expert instructors bring real-world experience to every course, ensuring you learn practical skills that employers value.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Why Choose Forwardsols?</h3>
              <ul className="space-y-3">
                {["Industry-relevant curriculum", "Hands-on, project-based learning", "Personalized mentorship", "Career support services", "Flexible learning options"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} className="text-[#520ADE] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="#courses" 
              className="inline-block bg-pink-700 hover:bg-pink-600 text-white px-8 py-3 rounded-lg transition-colors font-medium"
            >
              View Our Courses
            </a>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students collaborating" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Online learning" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/7233951/pexels-photo-7233951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Student achievement" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Career preparation" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-10 -right-10 bg-gray-800 text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100+</p>
                  <p className="text-sm">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">50+</p>
                  <p className="text-sm">Instructors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">15+</p>
                  <p className="text-sm">Subject Areas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">90%</p>
                  <p className="text-sm">Completion Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Approach to Learning</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We believe in a comprehensive approach that combines expert instruction, hands-on practice, and career support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-transparent hover:bg-[#520ADE] border border-white p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2 hover:rotate-15">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;