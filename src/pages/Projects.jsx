import React, { useEffect } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import "../styles/projects.css";
import Navbar_2 from "../components/Navbar/Navbar_2";

const Projects = () => {
  useEffect(() => {
    document.body.classList.remove("old-page-style");
    document.body.classList.add("projects-page");
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mass Encryptor",
      description: `MASS Encryptor is a web application designed to engage users 
      in cryptography by providing tools to encrypt and decrypt messages 
      using common ciphers. It's an educational and fun tool suitable for a wide range of users.`,
      images: ["/project_images/mass_encryptor.png"],
      github: "https://github.com/kxrai/digt2107-mass-splitter",
      website: "https://mass-encryptor.vercel.app",
    },
    {
      id: 2,
      title: "Mass Splitter",
      description: `MASS Splitter is a simple and intuitive app designed to solve 
      the common headache of splitting bills during group outings. 
      Whether you’re out with friends for dinner or on a group trip, 
      MASS Splitter helps you manage shared expenses effortlessly.`,
      images: ["/project_images/mass_splitter.png"],
      github: "",
      website: "",
    },
    {
      id: 3,
      title: "Chord Master",
      description: `Guitar Chord Library is a simple and intuitive app for 
      guitarists to explore and learn chords. Browse, view, and listen 
      to a wide range of chords, making practice and learning effortless 
      for beginners and pros alike.`,
      images: ["/project_images/chord_master.png"],
      github: "",
      website: "",
    },
  ];

  return (
    <div className="projects-page">
      <Navbar_2 />
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="projects-card">
            <div className="projects-card-header">
              <img
                src={project.images[0]}
                alt={`${project.title} Image`}
                className="projects-image"
              />
            </div>
            <div className="projects-card-content">
              <h2 className="projects-card-title">{project.title}</h2>
              <p className="projects-card-description">{project.description}</p>
              <div className="projects-card-buttons">
                {/* GitHub button with animated icon */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-button github-button"
                  >
                    <UseAnimations animation={github} size={40} />
                  </a>
                )}

                {/* Website button */}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-button website-button"
                  >
                    <img
                      src="/project_images/website_link.png"
                      alt="Visit Website"
                      className="button-icon"
                    />
                  </a>
                )}

                {/* "Still in Progress" badge for missing links */}
                {!project.github && !project.website && (
                  <span className="in-progress-badge">Still in Progress</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
