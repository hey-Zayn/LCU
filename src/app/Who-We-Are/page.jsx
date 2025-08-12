import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Dev//Components/ui/carousel";
import IntegritySection from "@/Dev//Components/integrity-section";
import BusinessOperations from "@/Dev//Components/Business-operations";
import ParticlesBackground from "@/Dev/Components/ParticlesBackground";

import MeetPandasCSR from "@/Dev//Components/MeetPandasCSR";
import {
  Code2, Boxes, FileType, FileBadge, Database, Flame,  
  Laptop, Globe, MonitorSmartphone, Coffee, Hexagon, Binary, Smartphone,
  PenTool, Layout, ShoppingBag, Clock, ShirtIcon, CreditCard, FileText
} from "lucide-react";

const page = () => {
  const Staff = [
    {
      name: "Awais Sheikh",
      position: "CEO",
      img: "/images/sirAwais.jpg",
      link : "",
    }
  ];

  const SEOTpyes = [

    {
      title: "AI Solutions",
      dis: "We provide cutting-edge AI solutions including machine learning, natural language processing, and computer vision to transform your business operations. Our team develops intelligent systems that automate processes, enhance decision-making, and unlock new opportunities for innovation and growth.",
    },
    {
      title: "Web Development",
      dis: "Our web development services create robust, secure, and scalable web applications. We specialize in modern frameworks and technologies to deliver high-performance solutions tailored to your business needs, ensuring seamless user experiences across all devices.",
    },
    {
      title: "Digital Marketing",
      dis: "We offer comprehensive digital marketing strategies to boost your online presence. Our services include SEO, social media marketing, PPC campaigns, and content marketing, all designed to increase brand visibility, engage your target audience, and drive measurable results.",
    },
    {
      title: "E-commerce Solutions",
      dis: "We build powerful e-commerce platforms that deliver exceptional shopping experiences. From custom store development to platform migrations, we create secure, scalable, and feature-rich solutions that drive sales and grow your online business.",
    },
    {
      title: "Web Design",
      dis: "Our web design services focus on creating visually stunning, responsive, and user-friendly websites. We combine modern design principles with the latest technologies to deliver engaging digital experiences that convert visitors into customers.",
    },
    
  ];


  const categories = [
    {
      title: "Development",
      items: [
        { name: "React", icon: <Code2 size={20} /> },
        { name: "Vue", icon: <Boxes size={20} /> },
        { name: "Angular", icon: <Hexagon size={20} /> },
        { name: "JavaScript", icon: <FileType size={20} /> },
        { name: "TypeScript", icon: <FileBadge size={20} /> },
        { name: "Node.js", icon: <Binary size={20} /> },
        { name: "MongoDB", icon: <Database size={20} /> },
        { name: "Firebase", icon: <Flame size={20} /> },
      ]
    },
    {
      title: "Mobile Dev",
      items: [
        { name: "Hybrid/Native app", icon: <MonitorSmartphone size={20} /> },
        { name: "Java", icon: <Coffee size={20} /> },
        { name: "Kotlin", icon: <Smartphone size={20} /> },
        { name: "Swift", icon: <Laptop size={20} /> },
        { name: "React Native", icon: <Code2 size={20} /> },
        { name: "Android", icon: <Smartphone size={20} /> },
        { name: "Flutter", icon: <Boxes size={20} /> },
        { name: "Web app", icon: <Globe size={20} /> },
      ]
    },
    {
      title: "Designing",
      items: [
        { name: "UI/UX", icon: <Layout size={20} /> },
        { name: "Prototype", icon: <PenTool size={20} /> },
        { name: "Logo", icon: <Hexagon size={20} /> },
        { name: "Letterhead", icon: <FileText size={20} /> },
        { name: "T-Shirt/Uniform", icon: <ShirtIcon size={20} /> },
        { name: "Business Card", icon: <CreditCard size={20} /> },
        { name: "Mug/Clock/File", icon: <Clock size={20} /> },
        { name: "Shopping bag", icon: <ShoppingBag size={20} /> },
      ]
    }
  ];


  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <div
          id="seo-hero"
          className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
        >
          <ParticlesBackground />
          <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
          <h1
            // ref={mainHeading}
            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
          >
            Who We Are
          </h1>
        </div>
      </div>

      <IntegritySection />
      <MeetPandasCSR />

      <div className="w-full h-screen max-sm:h-full flex flex-col justify-between gap-4 items-center bg-[#E8E0CD] py-12">
        <h1 className="text-5xl font-bold  text-black  mb-12 text-center">
        Meet our team
        </h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[90%]"
        >
          <CarouselContent>
            {Staff?.map((card, index) => (
              <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/4 ">
                <div className="p-0 "> 
                  <div className={`bg-transparent`}>
                    <div className="w-full ">
                      <div className="w-full h-full object-cover border-2 border-black/50 rounded-xl overflow-hidden">
                        <img
                          src={card.img}
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-2xl font-bold text-black"> {card.name}</h2>
                        <p className="text-base font-medium text-black">{card.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`max-sm:hidden`} />
          <CarouselNext className={`max-sm:hidden`}/>
        </Carousel>
      </div>

      <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
          Services We Offer
          </h1>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {SEOTpyes?.map((card, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className=" text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6 ">{category.title}</h3>
              <div className="space-y-4 w-full">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-center  space-x-3 pl-4 p-4 rounded-xl bg-gradient-to-r from-[#191919] via-[#520ADE] to-[#191919]">
                    <span className="bg-pink-800 text-white  p-1 rounded-full">
                      {item.icon}
                    </span>
                    <span className="">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
       

        
      <section className="w-full text-white body-font">
        <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
            <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              We are a full-service digital transformation partner, delivering cutting-edge AI and technology solutions globally.
            </h1>
            <p className="mb-8 leading-relaxed">
              We've empowered businesses across industries with our expertise in AI, web development, and digital marketing, driving innovation and measurable growth for our clients.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                Connect Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              src="/videos/WhoWeAre.mp4"
              className="object-cover object-center rounded"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
        </div>
      </section>

      <BusinessOperations />
    </div>
  );
};

export default page;
