import React from 'react';
import AboutImage from '../../assets/cvImage.jpeg';
import './cv.css';

const CV = () => {
  const personalDetails = {
    name: 'Donald Bilbili',
    email: 'donaldbilbili94@gmail.com',
    phone: '+355698950020',
    linkedin: 'linkedin.com/in/donald-bilbili-92730b20b',
  };

  const workExperience = [
    {
      title: 'Front End Developer',
      company: 'SDA Albania by Protik, Tirana',
      startDate: 'Apr 2023',
      endDate: 'Present',
      responsibilities: [],
    },

    {
      title: 'WordPress Developer',
      company: 'Freelancer, Tirana',
      startDate: '2019',
      endDate: 'Present',
      responsibilities: [
        'Web Developer WordPress',
        'HTML, CSS, Javascript',
      ],
    },

    {
      title: 'Service Technician',
      company: 'Alb Computers and Distribution, Tirana',
      startDate: 'Nov 2018',
      endDate: 'Present',
      responsibilities: [
        '-Repair of computers, laptops, phones, tablets, cameras (diagnostic and replacement of components and parts of boards - capacitors, microcircuits, etc.)',
        '-Maintenance of office equipment.',
        '-Time management and logical skills.',
        '-Ability to adapt new technology to meet user needs.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Software Developer',
      institution: 'SDA Albania by Protik, Tirana',
      startDate: '2019',
      endDate: 'Present',
      responsibilities: [
        'Enthusiast about coding in HTML, CSS and Javascript, proficient in React for dynamic web applications.',
        'Proficient in version control using Git and experienced in using WordPress for content management.',
        'Familiar with front-end and back-end tools, including Node.js, npm and various CMS platforms',
      ],
    },

    {
      degree: 'Administration of Computer Networks',
      institution: '"Harry Fultz" Institute Community College, Tirana',
      startDate: 'Mar-2020',
      endDate: 'Aug-2020',
      responsibilities: ['"Network Administration"',
      '- Computer Networks (LAN/WAN)',
      '- Windows server 2008 (Network Infrastructure)',
      '- Linux (Unix) and Network Administration',
      '- Implementing and Administering Cisco Solution (CCNA)',
      '- Telephone',
    ],
    },
    
    {
      degree: 'Bachelor Italian Language',
      institution: 'Aleksander Xhuvani University, Elbasan',
      startDate: 'Oct 2012',
      endDate: 'Jun 2015',
    },
  ];

  const skills = [
    '-Web Developer - WordPress',
    '-HTML',
    '-CSS',
    '-JavaScript',
    '-ReactJS',
    '-Bootstrap',
    '-GIT',
    '-Administration of Computer Networks',
  ];

  const certificates = [
    {
      title: 'Implementing and Administering Cisco Solutions (CCNA)',
      date: 'Aug 2020 - Present',
      link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/training/training-services/courses/implementing-and-administering-cisco-solutions-ccna.html',
    },
    {
      title: 'JavaScript from Scratch',
      date: 'Dec 2023 - Present',
      link: 'https://app.diplomasafe.com/en-Us/diploma/dab435d928415709b689d531a8d00298521c8f08d/javascript_from_scratch',
    },
  ];

  const hobbies = ['- Football', '- Tennis', '- Swimming'];

  const internship = {
    title: 'Frontend Developer',
    company: 'SDA Albania by Protik, Tirana',
    startDate: 'Apr 2023',
    endDate: 'Present',
  };

  return (
    <div className="cv">
                                    <div className="cv__header">
      {/* Personal Details */}
      <div className="personal-details">
  <div className="personal__info">
    <img src={AboutImage} alt="Profile Photo" className="photo" />
    
        <div className="personal__title">
      <h1 className="personal__name">{personalDetails.name}</h1>
                <p className='title__profession'>Front-End Developer</p>
      </div>

      <div className="personal__contact">
      <p className="personal__email">Email: {personalDetails.email}</p>
      <p className="personal__phone">Phone: {personalDetails.phone}</p>
      <p className="personal__linkedin">LinkedIn: {personalDetails.linkedin}</p>

      </div>

    
  </div>
</div>
            </div>
                                    <div className="table__left">
      {/* Work Experience */}
      <div className="work-experience">
        <h2>Work Experience</h2>
        {workExperience.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3>{experience.title}</h3>
            <p>{experience.startDate} - {experience.endDate}</p>
            <p>{experience.company}</p>
            <p>{experience.address}</p>
            <ul>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      

      {/* Skills */}
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Certificates */}
      <div className="certificates">
        <h2>Certificates</h2>
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-item">
            <h3>{certificate.title}</h3>
            <p>Date: {certificate.date}</p>
            <p><a href={certificate.link} target="_blank" rel="noopener noreferrer">Certificate Link</a></p>
          </div>
        ))}
      </div>
                           </div>
                           <div className="table__right">
      {/* Education */}
      <div className="education">
        <h2>Education and Qualifications</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.startDate} - {edu.endDate}</p>
            <p>{edu.institution}</p>
            {edu.responsibilities && (
        <ul>
          {edu.responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      )}
          </div>
        ))}
      </div>

      {/* Hobbies */}
      <div className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      {/* Internship */}
      <div className="internship">
        <h2>Internship</h2>
        <h3>{internship.title}</h3>
        <p>{internship.startDate} - {internship.endDate}</p>
        <p>{internship.company}</p>
      </div>
      </div>
    </div>
  );
};

export default CV;