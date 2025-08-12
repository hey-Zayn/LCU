"use client";

import React, { useState } from 'react';
import ProjectDetail from './MyWorkProjectDetail';

const MyWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const [selectedProject, setSelectedProject] = useState(null); 

  const categories = [
    'All',
    'Designing',
    'MERN',
    'MEAN',
    'WordPress',
    'Mobile Apps',
    'UI/UX-Design',
    'Other CMS',
  ];


  const works = [
    {
      category: 'WordPress',
      img: '/Wordpress1.png',
      title: 'Business Boost',
      intro: 'Business Boost is a WordPress-based project aimed at creating a sleek and professional web presence for modern businesses. The project features customizable templates, allowing companies to tailor the look and feel to match their branding. With integrated plugins, Business Boost supports advanced SEO, enabling better visibility and customer reach.This WordPress site includes a user-friendly admin panel, making updates and maintenance effortless. The responsive design ensures seamless performance on mobile devices, tablets, and desktops, giving users an optimized experience across platforms. Its intuitive interface promotes engagement, turning visitors into loyal customers.',
      date: 'March 12, 2021',
      siteLink: '#'
    },
    {
      category: 'WordPress',
      img: '/Wordpress2.png',
      title: 'Creative Studio',
      intro: 'Creative Studio is a portfolio-oriented WordPress project, designed to showcase artists and designers. It emphasizes high-quality visuals, easy navigation, and a beautiful layout that grabs attention. The project supports multimedia content, including video, audio, and galleries, making it perfect for creative individuals.Enhanced with social sharing options, Creative Studio boosts online engagement, allowing users to share their favorite content effortlessly. It is built with a modern aesthetic, focusing on clean typography and vibrant images, ensuring that the portfolio stands out in a competitive market.',
      date: 'June 5, 2022',
      siteLink: '#'
    },
    {
      category: 'WordPress',
      img: '/Wordpress3.png',
      title: 'Eco-Shop',
      intro: 'Eco-Shop is a WordPress e-commerce project tailored for environmentally conscious businesses. This site comes with integrated WooCommerce support, making it easy to set up an online store that promotes eco-friendly products. The project includes green-themed templates that resonate with the sustainability movement.The design is focused on clean lines and simple navigation, encouraging customers to explore the product catalog. Each product page is optimized for fast loading, ensuring a smooth shopping experience. The platforms built-in analytics tools allow business owners to track sales and improve their strategies.',
      date: 'September 1, 2023',
      siteLink: '#'
    },
    {
      category: 'WordPress',
      img: '/Wordpress4.png',
      title: 'Travel Vibes',
      intro: 'Travel Vibes is a WordPress travel blog project crafted for adventure seekers and globetrotters. It provides an immersive experience through rich content, stunning photos, and interactive maps, guiding readers to explore new destinations. The site is designed to be highly visual, using sliders and galleries to highlight travel experiences.SEO optimization is a key feature, driving organic traffic and attracting travel enthusiasts worldwide. Customizable layouts allow bloggers to personalize their site, giving them full control over the presentation. The theme is responsive and mobile-friendly, making it easy to navigate on the go.',
      date: 'December 15, 2024',
      siteLink: '#'
    },{
      category: 'Other CMS',
      img: 'https://img.freepik.com/free-vector/flat-content-management-system-web-template_23-2148812889.jpg?t=st=1732827870~exp=1732831470~hmac=f6a1c62c0f166d002b5a2342b1bb8f7de789a725af60bab81eac1f15e33f4ab3&w=740',
      title: 'Tech Gear',
      intro: 'Tech Gear is a CMS-powered website designed to provide detailed reviews, comparisons, and news about the latest gadgets and technology. With a customizable backend, content managers can easily update articles and reviews, ensuring that the audience stays informed with fresh information.The design emphasizes readability with a clean, minimalist interface. Users can navigate through different categories with ease, thanks to the intuitive menu and search functionality. Its a perfect platform for tech enthusiasts who want a visually appealing yet highly functional website.',
      date: 'February 22, 2020',
      siteLink: '#'
    },
    {
      category: 'Other CMS',
      img: 'https://img.freepik.com/premium-vector/smart-home-use-clean-energy-save-nature-website-template-landing-homepage-flat-isolated-background-vector-design-illustration_197170-1672.jpg?w=826',
      title: 'Health First',
      intro: 'Health First is a CMS-driven project dedicated to health and wellness topics. The platform is structured to deliver informative articles, expert tips, and video content focused on a healthy lifestyle. Custom widgets make it easy for admins to organize content according to various health categories.This CMS site utilizes engaging visuals and a light, welcoming theme that enhances the reading experience. Its designed to load quickly, even with media-rich pages, ensuring visitors have a pleasant browsing experience. Health First is an ideal resource for health professionals and enthusiasts alike.',
      date: 'March 18, 2021',
      siteLink: '#'
    },
    {
      category: 'Other CMS',
      img: 'https://img.freepik.com/premium-vector/task-board-display-monitor-laptop-campaign-web-website-home-homepage-landing-page-template-banner-with-modern-illustration_197170-579.jpg?w=826',
      title: 'Artistic Corner',
      intro: 'Artistic Corner is a CMS project that serves as a digital gallery for artists to showcase their work. The site allows for the easy upload and management of artwork, creating a stunning online portfolio. With a focus on visual impact, Artistic Corner is equipped with a lightbox feature and customizable grids to highlight each piece beautifully.The CMS makes it straightforward to manage multiple categories, from paintings to digital art, giving users a seamless experience. The design is sleek and professional, emphasizing the artwork without distractions, perfect for creative professionals.',
      date: 'July 10, 2022',
      siteLink: '#'
    },
    {
      category: 'Other CMS',
      img: 'https://img.freepik.com/premium-vector/responsive-design-concept-campaign-web-website-home-homepage-landing-page-template-banner-with-flat-style-vector_197170-563.jpg?w=826',
      title: 'Green Thumb',
      intro: 'Green Thumb is a gardening-focused CMS website project designed for horticulture enthusiasts and professionals. The project includes blogs, how-to guides, and an interactive plant database that makes gardening accessible to everyone. The CMS enables easy updates, allowing gardeners to keep the site fresh with seasonal tips.The visual design incorporates earth tones and vibrant images, reflecting the gardening theme. Users will find it easy to navigate, thanks to a well-structured layout and search functionality. The platform is a go-to resource for anyone looking to start or maintain a garden.',
      date: 'October 3, 2023',
      siteLink: '#'
    },{
      category: 'MERN',
      img: '/Mern1.png',
      title: 'Code Academy',
      intro: 'Code Academy is an education-focused platform built with the MERN stack, targeting aspiring developers. It features a comprehensive course catalog, complete with coding challenges, project-based learning, and a supportive community forum. The site emphasizes interactive learning to keep students engaged.The modern, clean interface offers seamless navigation, making it easy to access lessons and track progress. With its scalable backend, Code Academy can handle a growing user base, providing a reliable learning experience for all. This project is perfect for those looking to expand their coding knowledge.',
      date: 'January 12, 2022',
      siteLink: '#'
    },
    {
      category: 'MERN',
      img: '/Mern2.png',
      title: 'Fitness Tracker',
      intro: 'Fitness Tracker is a MERN stack project that allows users to monitor their health journey. It features a personalized dashboard, workout schedules, and nutritional advice, making it easy to maintain a healthy lifestyle. The backend is designed to store and analyze user data for better recommendations.With a focus on user engagement, the design includes graphs and progress indicators that visualize achievements. The interface is user-friendly and accessible on both desktop and mobile devices, making it a versatile tool for fitness enthusiasts. Regular updates ensure the platform remains relevant and effective.',
      date: 'April 25, 2023',
      siteLink: '#'
    },
    {
      category: 'MERN',
      img: '/Mern3.png',
      title: 'E-Library',
      intro: 'E-Library is a MERN-based online library system that provides easy access to a vast collection of digital books and resources. It supports advanced search functionalities, allowing users to find the material they need quickly. The project is designed with educators and students in mind.The responsive design ensures a smooth reading experience on any device. The backend architecture supports user account management, secure login, and personalized book collections. The intuitive interface makes it easy to browse genres, mark favorites, and add reviews, enhancing the learning experience.',
      date: 'August 13, 2023',
      siteLink: '#'
    },
    {
      category: 'MERN',
      img: '/Mern4.png',
      title: 'Travel Log',
      intro: 'Travel Log is a MERN-based web application for travelers who want to document their journeys. The project includes a photo gallery, blog entries, and a map feature that shows visited locations. Its a community-driven platform where users can share tips and travel experiences.The apps layout is visually captivating, with photo-centric design elements that bring stories to life. The powerful backend handles large image uploads and social interactions without a hitch. Travel Log provides a perfect blend of functionality and aesthetic, inspiring users to explore the world.',
      date: 'November 19, 2024',
      siteLink: '#'
    },{
      category: 'Mobile Apps',
      img: '/Mobileapp1.png',
      title: 'Daily Habits',
      intro: 'Daily Habits is a mobile application focused on habit-building and personal growth. The app helps users track daily routines, set reminders, and visualize progress. With an intuitive user interface, its designed to make habit formation a fun and engaging process.The application is built using React Native, ensuring compatibility with both iOS and Android platforms. Customizable themes and notifications make it easy for users to personalize their experience. The apps lightweight design keeps performance fast, ensuring users remain motivated throughout their journey of self-improvement.',
      date: 'February 8, 2022',
      siteLink: '#'
    },
    {
      category: 'Mobile Apps',
      img: '/Mobileapp2.png',
      title: 'Recipe Hub',
      intro: 'Recipe Hub is a mobile app that serves as a comprehensive recipe book, perfect for food enthusiasts and home cooks. Users can browse through thousands of recipes, save favorites, and create custom grocery lists. The app features stunning food photography that brings each recipe to life.Built with Flutter, Recipe Hub offers a smooth user experience, ensuring that navigation and searching are quick and intuitive. Users can filter recipes by dietary preferences, making it easy to find the perfect dish. Recipe Hub aims to inspire creativity in the kitchen with its vast recipe collection.',
      date: 'May 17, 2023',
      siteLink: '#'
    },
    {
      category: 'Mobile Apps',
      img: '/Mobileapp2.png',
      title: 'Budget Buddy',
      intro: 'Budget Buddy is a mobile app that helps users manage their finances by tracking income, expenses, and savings goals. The apps minimalistic interface makes financial planning simple, helping users stay on top of their spending habits.Developed using Kotlin, Budget Buddy ensures a fast, secure, and reliable experience for Android users. It includes visual tools like pie charts and graphs to illustrate financial status. This app is perfect for anyone looking to improve their financial health without the complexity of traditional budgeting tools.',
      date: 'October 2, 2023',
      siteLink: '#'
    },
    {
      category: 'Mobile Apps',
      img: '/Mobileapp3.png',
      title: 'FitMate',
      intro: 'FitMate is a fitness tracking app designed to motivate users on their health journey. It features workout plans, calorie tracking, and a community feature for connecting with friends. The apps sleek design encourages consistent use, helping users stay committed to their fitness goals.Created with Swift, FitMate takes full advantage of iOSs capabilities, offering smooth animations and seamless integration with Apples Health app. The apps user-friendly interface and customizable options make it a go-to for anyone serious about fitness.',
      date: 'December 12, 2024',
      siteLink: '#'
    },{
      category: 'Designing',
      img: 'https://img.freepik.com/free-vector/creative-process-landing-page_23-2148155552.jpg?t=st=1732831844~exp=1732835444~hmac=dd2af292abdd559d0351e0d31ac20943ba2bc52db9196bd2e0bc587212406036&w=740',
      title: 'Fashion Lookbook',
      intro: 'Fashion Lookbook is a digital design project showcasing seasonal collections from top fashion brands. The design combines high-resolution images, video content, and interactive elements, creating an engaging browsing experience. Its tailored for fashion-forward audiences who appreciate style and aesthetics.Crafted using Adobe XD and Figma, the layout is sleek, with bold typography and minimalist aesthetics. The project emphasizes visual storytelling, ensuring that each collection gets the attention it deserves. Fashion Lookbook is the perfect showcase of how digital design can elevate brand identity.',
      date: 'January 22, 2021',
      siteLink: '#'
    },
    {
      category: 'Designing',
      img: 'https://img.freepik.com/premium-vector/flat-design-web-designer-landing-page_23-2150373684.jpg?w=740',
      title: 'Creative Agency',
      intro: 'Creative Agency is a web design project that represents a modern agency focusing on digital solutions. The design features a vibrant color scheme, dynamic animations, and a structured layout, making navigation intuitive and visually appealing.Tools like Sketch and InVision were utilized to create a seamless prototype, ensuring that the final product met the clients expectations. This project demonstrates how effective design can enhance user engagement and communication. The Creative Agency site is a prime example of creativity meeting functionality.',
      date: 'June 30, 2022',
      siteLink: '#'
    },
    {
      category: 'Designing',
      img: 'https://img.freepik.com/free-vector/creative-process-landing-page_52683-8461.jpg?t=st=1732831943~exp=1732835543~hmac=0c426904f563571c4059135958cfb66af943569d3d56b000e3794abc7f1c9d35&w=740',
      title: 'Photography Portfolio',
      intro: 'Photography Portfolio is a design project aimed at photographers looking to create a stunning online presence. The layout is minimalist, emphasizing high-quality visuals that highlight the photographers best work. It is an ideal solution for artists who want a clean and professional showcase.Utilizing Photoshop and Figma, the design features interactive elements like hover effects and a fullscreen gallery. The project focuses on easy navigation, allowing potential clients to view portfolios without distractions. This portfolio site combines beauty with practicality, enhancing a photographers brand.',
      date: 'September 15, 2023',
      siteLink: '#'
    },
    {
      category: 'Designing',
      img: 'https://img.freepik.com/free-vector/creative-process-landing-page_23-2148163466.jpg?t=st=1732831881~exp=1732835481~hmac=a80c972586890d4d89142b76102615b60f1fc2144c2a41844e645e9be27ca2ae&w=740',
      title: 'Minimalist Blog',
      intro: 'Minimalist Blog is a clean and modern blog design project that caters to content creators and bloggers. The designs simplicity and elegance make it ideal for readers who value a distraction-free experience. It focuses on typography and whitespace, giving the text room to breathe.Built with tools like Adobe Illustrator and Sketch, the blog includes subtle animations and a responsive layout, ensuring readability on any device. This project exemplifies how minimalism can make a powerful statement, allowing content to take center stage without unnecessary clutter.',
      date: 'December 5, 2024',
      siteLink: '#'
    },{
      category: 'MEAN',
      img: '/Mean1.png',
      title: 'HealthTracker',
      intro: 'HealthTracker is a web application developed using the MEAN stack, aimed at individuals looking to monitor their daily health metrics. The platform offers a dashboard where users can input and track health data such as weight, blood pressure, and daily steps.The clean, intuitive interface makes data entry simple, with results visualized through interactive graphs. This project combines Angulars front-end flexibility with Node.jss powerful backend, providing a seamless user experience. HealthTracker empowers users to take charge of their well-being through technology.',
      date: 'March 20, 2024',
      siteLink: '#'
    },
    {
      category: 'MEAN',
      img: '/Mean2.png',
      title: 'E-Commerce Portal',
      intro: 'E-Commerce Portal is a full-featured shopping platform built with the MEAN stack, designed to offer a robust e-commerce experience. It includes features like product listings, shopping cart functionality, user authentication, and secure payment processing.The sites modern design is built to handle high traffic, making it suitable for large online stores. This project showcases how the MEAN stack can be utilized to create fast and scalable web applications that deliver a great user experience, from browsing to checkout.',
      date: 'July 5, 2023',
      siteLink: '#'
    },
    {
      category: 'MEAN',
      img: '/Mean3.png',
      title: 'JobBoard',
      intro: 'JobBoard is a MEAN-based web platform for job seekers and employers. Users can create profiles, upload resumes, and apply for job postings, while employers can manage job listings and candidate applications. The platform is designed to make the job search process seamless and efficient.The sites design is user-friendly, with responsive elements that adjust to any screen size. The backend efficiently handles user data and search queries, making JobBoard a go-to resource for career growth and hiring needs. This project highlights the versatility of the MEAN stack in building complex applications.',
      date: 'November 10, 2024',
      siteLink: '#'
    },
    {
      category: 'MEAN',
      img: '/Mean4.png',
      title: 'Event Planner',
      intro: 'Event Planner is a MEAN stack-based project aimed at simplifying event management. The platform allows users to organize events, send invitations, and manage RSVPs all in one place. The sleek design enhances user experience, making event planning stress-free.The app supports user profiles, calendar integration, and automated reminders. Its a comprehensive tool for both small gatherings and large-scale events. Event Planner demonstrates the power of the MEAN stack in creating web applications that are both functional and visually appealing.',
      date: 'February 28, 2023',
      siteLink: '#'
    },{
      category: 'UI/UX-Design',
      img: '/UIUX-Design1.png',
      title: 'Music Streaming App',
      intro: 'The Music Streaming App is a UI/UX design project focused on creating an intuitive and visually appealing music listening experience. It incorporates a dark theme with vibrant accents, ensuring that album covers and content are the main focus. The design is aimed at mobile users.Crafted with Figma, the apps interface is sleek and user-friendly, featuring easy-to-navigate playlists and smooth transitions. The project is a great example of how effective UI/UX design can make digital experiences more enjoyable and accessible for users of all ages.',
      date: 'April 14, 2024',
      siteLink: '#'
    },
    {
      category: 'UI/UX-Design',
      img: '/UIUX-Design2.png',
      title: 'Travel Booking Platform',
      intro: 'The Travel Booking Platform is a UI/UX project that simplifies the booking process for users looking to plan their vacations. It focuses on a clean, minimalist design, guiding users seamlessly from searching destinations to finalizing bookings.Using tools like Adobe XD and Sketch, the platform was designed with user comfort in mind. The interface features interactive maps, a comparison tool, and a straightforward checkout process. The project highlights how thoughtful design can improve user satisfaction and streamline complex tasks.',
      date: 'July 7, 2023',
      siteLink: '#'
    },
    {
      category: 'UI/UX-Design',
      img: '/UIUX-Design3.png',
      title: 'E-Commerce Redesign',
      intro: 'E-Commerce Redesign is a project aimed at revamping a traditional online store into a modern, user-centric experience. The design emphasizes fast-loading pages, easy navigation, and visually appealing product displays that drive engagement and sales.The redesign was executed using Figma and Adobe Illustrator, with a focus on mobile-first principles. Interactive prototypes allowed for user testing, ensuring the final product met all client expectations. This project showcases the importance of user feedback in creating compelling digital interfaces.',
      date: 'September 20, 2024',
      siteLink: '#'
    },
    {
      category: 'UI/UX-Design',
      img: '/UIUX-Design4.png',
      title: 'Personal Finance Dashboard',
      intro: 'The Personal Finance Dashboard is a UI/UX design project focused on providing users with a clear overview of their financial health. The layout includes intuitive graphs, a clean color scheme, and easy-to-access features that simplify financial management.Developed with tools like InVision and Sketch, the dashboard is designed for both desktop and mobile platforms. Its straightforward interface makes complex data easier to understand, catering to a wide range of users. This project is a testament to how good design can empower users to make better financial decisions.',
      date: 'October 29, 2023',
      siteLink: '#'
    }
  ]
    
  const filteredWorks = activeCategory === 'All'
    ? works
    : works.filter(work => work.category === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project); 
    playBeep();
  };

  const handleBack = () => {
    setSelectedProject(null);
    playBeep(); 
  };

  const playBeep = () => {
    const beep = new Audio("onclick.mp3");
    beep.play();
  };

  return (
    <>
    <div>
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBack} />
      ) : (
        <>
          <h2 className="text-3xl font-bold text-white mb-4">My Works</h2>
          <div className="flex gap-x-4 mb-6 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {setActiveCategory(category); playBeep();}}
                className={`${
                  activeCategory === category ? 'text-[#00a5f8]' : 'text-white'
                } hover:text-[#00a5f8]`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredWorks.map((work, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => handleProjectClick(work)} 
              >
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-auto hover:bg-black "
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-5 group-hover:opacity-90"
                >
                  <p className="text-[#00a5f8] text-2xl font-bold"> {work.title} </p>
                  <p className="text-white text-lg">{work.category}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default MyWork;
