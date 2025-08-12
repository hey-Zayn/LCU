import React from 'react';
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
export default function Resume() {

  const skills = [
    { name: 'Full Stack Web', level: '99%' },
    { name: 'PHP', level: '99%' },
    { name: 'MERN Stack', level: '99%' },
    { name: 'Python', level: '99%' },
    { name: 'JavaScript', level: '99%' },
    { name: 'React', level: '99%' },
  ]
  const education = [
    {
      date: '2012-2016',
      institution: 'University of Central Punjab',
      location: 'Pakistan',
      degree: 'Bachelor in Software Engineering',
    },
  
  ];

  const experience = [
    {
      date: '2018 - Present',
      title: 'CEO and Founder',
      location: 'Pakistan',
      description:
        'FORWORD SOLS',
    },
    {
      date: '2020 - Present ',
      title: 'DIRECTOR - Forward Traning Institute',
      location: 'Pakistan',
      description:
        'It s really feel great to be part of such inspiring communities and become a part of this communities ,it gives you so many opportunities and platform to show your skills and take advantage of, we must need to step up a little and grab those opportunities',
    },
    {
      date: '2018 - 2022',
      title: 'Full Stack Web Trainer  and Consultant - PNY Training',
      location: 'Pakistan',
     
    },
    {
      date: '2017 - 2019',
      title: 'Software Engineer',
      location: 'Pakistan',
      description:
        'DevBatch-Digital - Mobility - Tech - Enterprice Solutions',
    },
  ];


  return (
    <>
      <section className="text-white border-b pb-4 border-gray-500">
        <h2 className="text-4xl font-bold mb-6">Resume</h2>
        <div className="font-bold italic flex flex-wrap gap-3 items-center text-lg text-[#00a5f8] mb-6">
          <span className="whitespace-nowrap">10+ Years in Development</span>
          <span className="whitespace-nowrap text-gray-400">/</span>
          <span className="whitespace-nowrap">Sr. Software Engineer</span>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
        Experienced Software Engineer and Web Trainer with 10 years in full stack development (React.js, MERN, Python, PHP, AI). Skilled in delivering innovative solutions and impactful training, fostering collaborative learning, and staying ahead of industry trends. Passionate about mentoring aspiring developers and equipping them with real-world skills for success in web development.
        </p>

      </section>
      <section className="mt-8 border-b pb-4 border-gray-500">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <span className="mr-2">

            <IoSpeedometerOutline className='text-[#00a5f8]' />
          </span>
          Skills
        </h2>


        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span className="text-[#00a5f8]">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-[#00a5f8] h-1.5 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        
        <section className="mt-8 pb-4">
          <div className='flex gap-3'>
            <LuGraduationCap  className='text-[#00a5f8] text-3xl mt-1' />
            <h2 className="text-3xl font-bold mb-4">Education</h2>
          </div>

          {education.map((item, index) => (
            <div key={index} className="mb-4">
              <p className="text-[#00a5f8] font-bold">{item.date}</p>
              <p className="text-xl font-bold">{item.institution}</p>
              <p className="text-gray-400">{item.location}</p>
              <p className="text-gray-300">{item.degree}</p>
            </div>
          ))}
        </section>


        <section className="mt-8 pb-4">
          <div className='flex gap-3'>
            <TfiBag  className='text-[#00a5f8] text-3xl mt-1' />
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
          </div>

          {experience.map((item, index) => (
            <div key={index} className="mb-4">
              <p className="text-[#00a5f8] font-bold">{item.date}</p>
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-gray-400">{item.location}</p>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </section>
      </div>

    </>
  );
}
