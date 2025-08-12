import mongoose from "mongoose";
import Course from "../src/lib/models/Course.js"; // or the correct path


const courses = [
  {
    id: 'full-stack-java-developer',
    title: 'Full Stack Java Developer',
    shortDescription: "Forwardsols's Full-Stack Java Developer course provides expert-led Java training for a successful software career.",
    description: 'Forwardsols offers a comprehensive 32-week Full-Stack Java Developer program. Students learn core and advanced Java, front-end and back-end frameworks, databases, and web services. The curriculum covers all skills needed to succeed as a full-stack or backend Java developer.',
    category: 'Programming',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753512998/postman-uploads/jhlvzgpe6iifitwaulcx.jpg',
    duration: '32 weeks',
    level: 'All Levels',
    price: 4999,
    oldPrice: 5999,
    rating: 4.5,
    students: 1500,
    exercises: 50,
    features: ['Project-based Learning', 'Expert Instructors'],
    audience: ['Aspiring full-stack developers', 'Career changers'],
    jobTitles: ['Full-Stack Java Developer', 'Java Developer', 'Software Engineer'],
    syllabus: [
      { title: 'Core Java', items: ['Basic Java', 'Advanced Java', 'Lambda Expressions'] },
      { title: 'Web & DB', items: ['Git/GitHub', 'SQL (MySQL)', 'Advanced SQL', 'JDBC', 'Hibernate', 'RESTful APIs', 'Spring Framework'] },
      { title: 'Architecture', items: ['Design Patterns', 'Algorithms', 'Unit Testing', 'Microservices (Spring Boot)'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  },
  {
    id: 'full-stack-python-developer',
    title: 'Full Stack Python Developer',
    shortDescription: 'This 30-week Full-Stack Python program offers thorough training in Python and web technologies.',
    description: 'The Full Stack Python Developer course provides in-depth instruction in Python programming and related web development skills. Students learn core Python, Django, front-end basics, and databases, preparing for roles such as Python Developer or Back-End Developer.',
    category: 'Programming',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753513137/postman-uploads/rvtzmrdackny8bwml8tg.jpg',
    duration: '30 weeks',
    level: 'All Levels',
    price: 4799,
    oldPrice: 5799,
    rating: 4.5,
    students: 1200,
    exercises: 40,
    features: ['Hands-on Projects', 'Mentorship Support'],
    audience: ['Aspiring full-stack developers', 'IT professionals'],
    jobTitles: ['Full-Stack Python Developer', 'Back-End Developer', 'Database Administrator'],
    syllabus: [
      { title: 'Fundamentals', items: ['IT Foundations', 'Data Types (Strings, Lists, etc.)', 'Control Flow (If-Else, Loops)'] },
      { title: 'Core Python', items: ['Functions', 'OOP in Python', 'File Handling', 'Exceptions'] },
      { title: 'Advanced Topics', items: ['Git/GitHub', 'APIs', 'HTML/CSS/JS', 'Django', 'React', 'MongoDB', 'AWS/Docker'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  },
  {
    id: 'full-stack-mobile-developer',
    title: 'Full Stack Mobile Developer',
    shortDescription: 'A 36-week course (All Levels) teaching React and React Native for mobile app development.',
    description: 'Forwardsols’s Full Stack Mobile Developer program spans 36 weeks and covers mobile development with React and React Native. It includes Java for back-end services, web front-end skills, API integration, and database management. Graduates can build and deploy Android/iOS apps end-to-end.',
    category: 'Programming',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753513040/postman-uploads/ivocbue3oikhinl4aykc.jpg',
    duration: '36 weeks',
    level: 'All Levels',
    price: 5499,
    oldPrice: 6499,
    rating: 4.5,
    students: 900,
    exercises: 45,
    features: ['Live Projects', 'Career Guidance'],
    audience: ['Aspiring mobile developers'],
    jobTitles: ['Full-Stack Mobile Developer', 'Mobile Developer', 'Android Developer', 'iOS Developer', 'Front-End Developer', 'Back-End Developer'],
    syllabus: [
      { title: 'Java & Backend', items: ['Basic Java', 'Advanced Java', 'Lambda', 'SQL/Advanced SQL', 'JDBC', 'Hibernate', 'Spring'] },
      { title: 'Development Tools', items: ['Git/GitHub', 'APIs (REST)', 'Microservices', 'Algorithms', 'Unit Testing'] },
      { title: 'Frontend & DevOps', items: ['HTML/CSS/JS', 'Bootstrap', 'SASS', 'Webpack', 'React', 'Redux Toolkit'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  },
  {
    id: 'selenium-automation-tester',
    title: 'Selenium Automation Tester',
    shortDescription: 'A 28-week test automation course for aspiring QA engineers, called a Full-Stack Automation Engineer program.',
    description: 'The Selenium Automation Tester course (28 weeks) trains students in automated software testing. It covers IT fundamentals, Java, Selenium, Git, databases (SQL), HTML/CSS, and related tools. Graduates can pursue roles like Test Automation Engineer or SDET.',
    category: 'Programming',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753513098/postman-uploads/h74eqzmcqcf6zlip2mqg.jpg',
    duration: '28 weeks',
    level: 'All Levels',
    price: 3999,
    oldPrice: 4999,
    rating: 4.5,
    students: 1100,
    exercises: 30,
    features: ['Real-world Testing Projects', 'Certification Prep'],
    audience: ['Future QA engineers'],
    jobTitles: ['Full-Stack Automation Engineer', 'Test Automation Engineer', 'QA Engineer', 'Software Development Engineer in Test (SDET)', 'Test Lead', 'QA Analyst'],
    syllabus: [
      { title: 'Fundamentals', items: ['IT Fundamentals', 'SDLC/STLC', 'Manual Testing', 'IT Security Basics'] },
      { title: 'Programming', items: ['Core Java', 'Lambda', 'Git & GitHub', 'HTML/CSS', 'SQL/Advanced SQL', 'API'] },
      { title: 'Automation Tools', items: ['Selenium WebDriver', 'JUnit/TestNG', 'Maven', 'JMeter'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  },
  {
    id: 'salesforce-admin-and-developer',
    title: 'Salesforce Admin & Developer',
    shortDescription: 'A 28-week program covering both Salesforce administration and Apex development.',
    description: 'Forwardsols’s Salesforce course (28 weeks) teaches students both the administrative and developer sides of Salesforce. Topics include cloud CRM fundamentals, Salesforce customization (admins), and Apex programming. The goal is to prepare graduates for roles in the Salesforce ecosystem.',
    category: 'IT Infrastructure',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753513199/postman-uploads/gt1acywzeiwytnwmcq95.jpg',
    duration: '28 weeks',
    level: 'All Levels',
    price: 5299,
    oldPrice: 6299,
    rating: 4.5,
    students: 800,
    exercises: 20,
    features: ['Official Salesforce Material', 'Hands-on Labs'],
    audience: ['Aspiring Salesforce professionals'],
    jobTitles: ['Salesforce Administrator', 'Salesforce Developer', 'CRM Specialist'],
    syllabus: [
      { title: 'Admin Skills', items: ['Salesforce Fundamentals', 'Data Modeling & Security', 'Automation Tools (Flows, Process Builder)', 'Reports & Dashboards'] },
      { title: 'Developer Skills', items: ['Apex Programming', 'Visualforce & Lightning Components', 'APIs & Integration', 'Deployment & Testing'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  },
  {
    id: 'cyber-security-analyst',
    title: 'Cyber Security Analyst',
    shortDescription: 'A 22-week Cyber Security program training students for high-demand security careers.',
    description: 'The Cyber Security Analyst course (22 weeks) provides comprehensive training in information security. It covers IT fundamentals, Python scripting, Linux/Network security, defensive/offensive operations, AWS, and hands-on labs. The program targets roles like SOC Analyst and Security Specialist.',
    category: 'IT Infrastructure',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753513259/postman-uploads/kmyg6g76fqdxl0qxmlij.jpg',
    duration: '22 weeks',
    level: 'All Levels',
    price: 4599,
    oldPrice: 5599,
    rating: 4.5,
    students: 700,
    exercises: 25,
    features: ['Virtual Labs', 'Industry Certifications Prep'],
    audience: ['Aspiring security professionals'],
    jobTitles: ['SOC Analyst', 'Information Security Specialist', 'Security Administrator', 'Cybersecurity Analyst', 'Security Engineer'],
    syllabus: [
      { title: 'Foundations', items: ['IT Fundamentals (ITF)', 'Network Security Basics', 'Linux Administration'] },
      { title: 'Tools & Skills', items: ['Python for Security', 'SQL', 'AWS Cloud Services'] },
      { title: 'Security Operations', items: ['Offensive Security (Penetration Testing)', 'Defensive Security (IDS/Firewalls)', 'SIEM & Incident Response', 'Virtual Lab Setup'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    shortDescription: 'A 6-week intensive course focused on React Native mobile app development.',
    description: 'This fast-track Mobile Developer course (6 weeks) is designed for students with prior front-end/back-end experience. It covers React and React Native, UI development, API integration, and deployment. Graduates can build cross-platform mobile applications and pursue mobile development roles.',
    category: 'Programming',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753513301/postman-uploads/gvsu1hgjhgrhhnfuljpf.jpg',
    duration: '6 weeks',
    level: 'All Levels',
    price: 2999,
    oldPrice: 3999,
    rating: 4.5,
    students: 400,
    exercises: 10,
    features: ['React Native Focus', 'Capstone Project'],
    audience: ['Front-end developers entering mobile'],
    jobTitles: ['Mobile Developer', 'Android Developer', 'iOS Developer'],
    syllabus: [
      { title: 'Mobile Development', items: ['React Native Basics', 'UI/UX for Mobile', 'API Integration', 'Deployment to App Stores'] },
      { title: 'Projects & DevOps', items: ['Hands-on Mobile Project', 'Use/Deployment in Production'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  },
  {
    id: 'react-js-frontend-developer',
    title: 'React JS Frontend Developer',
    shortDescription: 'An 18-week course teaching ReactJS/NextJS for modern web front-end development.',
    description: 'The React JS Frontend Developer course (18 weeks) trains students in building dynamic web interfaces with React and Next.js. Topics include advanced JavaScript, UI components, state management (Redux), testing, Docker/AWS deployment, and a month-long capstone project.',
    category: 'Programming',
    image: 'https://res.cloudinary.com/dd9j33dja/image/upload/v1753512515/postman-uploads/nlkfsawqjzeezcjvmexk.jpg',
    duration: '18 weeks',
    level: 'All Levels',
    price: 4299,
    oldPrice: 5299,
    rating: 4.5,
    students: 600,
    exercises: 35,
    features: ['Client-Side Focus', 'Industry Projects'],
    audience: ['Aspiring front-end developers'],
    jobTitles: ['Frontend Developer', 'Web Developer', 'UI/UX Developer', 'React Developer', 'Next.js Developer', 'JavaScript Developer'],
    syllabus: [
      { title: 'Front-End Tools', items: ['HTML5/CSS3', 'JavaScript/ES6+', 'Webpack/Babel', 'Bootstrap/SASS'] },
      { title: 'React Ecosystem', items: ['ReactJS Fundamentals', 'Redux Toolkit', 'React Testing (Jest/RTL)'] },
      { title: 'Advanced Topics', items: ['Next.js (SSR/SSG)', 'Docker & AWS Deployment', 'Agile Capstone Project'] }
    ],
    instructor: {
      name: "Awais Sheikh",
      title: "Senior Full-Stack Developer",
      bio: "CEO & Founder Forward Solutions | Fullstack Web Mentor | Sr. Software Engineer | IT Career Consultant | Hiring Resource | Javascript, Python ,PHP, React, Node.js, Django, Laravel, WordPress, MERN Stack | 10+ Years of Experience",
      image: "/awaisSheikh.png"
    },
    status : "open"
  }
];

// Connect to MongoDB and insert the data
mongoose.connect('mongodb+srv://forwardsols:ForwardSols@cluster0.nvkpy.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('Seed complete – courses added.');
    mongoose.disconnect();
}).catch(err => {
    console.error('Database error:', err);
});
