import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Deskripsi singkat tentang project 1.",
      image: "/images/project1.jpg",
      link: "/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Deskripsi singkat tentang project 2.",
      image: "/images/project2.jpg",
      link: "/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Deskripsi singkat tentang project 3.",
      image: "/images/project3.jpg",
      link: "/project3",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Deskripsi singkat tentang project 4.",
      image: "/images/project4.jpg",
      link: "/project4",
    },
    {
      id: 5,
      title: "Project 5",
      description: "Deskripsi singkat tentang project 5.",
      image: "/images/project5.jpg",
      link: "/project5",
    },
    {
      id: 6,
      title: "Project 6",
      description: "Deskripsi singkat tentang project 6.",
      image: "/images/project6.jpg",
      link: "/project6",
    },
    // Tambahkan lebih banyak proyek sesuai kebutuhan
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="project-container"
    >
      <h1 className="project-title">My Projects</h1>

      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-card-image"
            />
            <div className="project-card-content">
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-card-description">{project.description}</p>
              <motion.a
                href={project.link}
                className="project-card-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Project
              </motion.a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
