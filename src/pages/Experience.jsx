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
      title: "Student Web Developer",
      company: "Ontario Power Generation",
      dates: "September 2023 - Present",
      logo: "/experience_images/opg_logo.png", // Replace with the actual path
    },
    {
      title: "Lifeguard",
      company: "Cornell Community Centre",
      dates: "January 2023 - June 2023",
      logo: "/experience_images/cornell_logo.png", // Replace with the actual path
    },
    {
      title: "Administration",
      company: "Pro Music",
      dates: "July 2022 - February 2023",
      logo: "/experience_images/promusic_logo.png", // Replace with the actual path
    },
    {
      title: "Swimming Instructor",
      company: "Olympian Swimming",
      dates: "May 2019 - September 2019",
      logo: "/experience_images/olympian_logo.png", // Replace with the actual path
    },
  ];

  const education = {
    institution: "York University",
    degree: "Digital Technologies (BASc)",
    dates: "September 2023 - Present",
    logo: "/experience_images/york_logo.png", // Replace with the actual path
  };

  const skills = [
    "Python (Pygame, Tkinter)",
    "Java (JavaFX)",
    "Version Control (Git)",
    "Visual Studio Code",
    "Microsoft 365",
    "Google Workspace",
    "Adobe Photoshop",
    "Premiere Pro",
    "After Effects",
    "Lightroom",
    "Vegas Pro",
  ];

  return (
    <div className="experience-page">
      <Navbar_2 />
      <h1 className="experience-title">Experience</h1>

      <section className="work-experience">
        <h2>Job Experience</h2>
        <div className="experience-cards">
          {workExperience.map((job, index) => (
            <div key={index} className="experience-card">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="experience-logo"
              />
              <h3 className="experience-title-bold">{job.title}</h3>
              <h4>{job.company}</h4>
              <p className="experience-dates">{job.dates}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-card">
          <img
            src={education.logo}
            alt={`${education.institution} logo`}
            className="education-logo"
          />
          <h3 className="experience-title-bold">{education.institution}</h3>
          <p>{education.degree}</p>
          <p className="education-dates">{education.dates}</p>
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

      <div className="resume-download">
        <a
          href="/resume/Alicia_Loi_Resume.pdf"
          download="Alicia_Loi_Resume.pdf"
          className="resume-button"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
