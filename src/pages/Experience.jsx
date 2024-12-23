import React, { useEffect } from "react";
import Navbar_2 from "../components/Navbar/Navbar_2";
import "../styles/experience.css";

const Experience = () => {
  useEffect(() => {
    document.body.classList.remove("old-page-style");
    document.body.classList.add("experience-page-style");
  }, []);

  const workExperience = [
    {
      title: "Frontend Developer",
      company: "TechCorp Solutions",
      dates: "Jan 2022 - Present",
      description: [
        "Developed and maintained responsive web applications using React.",
        "Collaborated with designers to create seamless user experiences.",
        "Optimized website performance, achieving a 20% improvement in load times.",
      ],
      logo: "/experience_images/techcorp_logo.png",
    },
    {
      title: "Junior Web Developer",
      company: "Innovatech",
      dates: "Jun 2020 - Dec 2021",
      description: [
        "Implemented interactive features using JavaScript and CSS.",
        "Participated in code reviews and team planning sessions.",
        "Worked on cross-browser compatibility issues.",
      ],
      logo: "/experience_images/innovatech_logo.png",
    },
  ];

  const education = [
    {
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      dates: "2016 - 2020",
      logo: "/experience_images/university_logo.png",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "UI/UX Design",
    "Problem Solving",
  ];

  return (
    <div className="experience-page">
      <Navbar_2 />
      <h1 className="experience-title">Experience</h1>

      <section className="work-experience">
        <div className="experience-cards">
          {workExperience.map((job, index) => (
            <div key={index} className="experience-card">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="experience-logo"
              />
              <div className="experience-details">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <p className="experience-dates">{job.dates}</p>
                <ul>
                  {job.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-cards">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="education-logo"
              />
              <div className="education-details">
                <h3>{edu.institution}</h3>
                <p>{edu.degree}</p>
                <p className="education-dates">{edu.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
