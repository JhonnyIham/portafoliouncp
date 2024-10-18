import "./proyectos.css";

const Proyectos = () => {
  const proyectos = [
    {
      image: "../assets/images/proyectos/semana1.png",
      title: "Semana 01",
      description:
        "Aplicación Web que nos trae citas aleatorias",
      techStack: ["HTML", "CSS"],
      link: "https://drive.google.com/file/d/1TcIJksCs4zycHmCPXIQtPkhKKrjrvjLE/view?usp=sharing",
      github: "https://drive.google.com/file/d/1TcIJksCs4zycHmCPXIQtPkhKKrjrvjLE/view?usp=sharing",
    },
    {
      image: "../assets/images/proyectos/semana2.png",
      title: "Semana 02",
      description:
        "Aplicación Web que nos trae citas aleatorias",
      techStack: ["HTML", "CSS"],
      link: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
      github: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
    },
    {
      image: "../assets/images/proyectos/semana2.png",
      title: "Semana 03",
      description:
        "Aplicación Web que nos trae citas aleatorias",
      techStack: ["HTML", "CSS"],
      link: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
      github: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
    },
    {
      image: "../assets/images/proyectos/semana2.png",
      title: "Semana 04",
      description:
        "Aplicación Web que nos trae citas aleatorias",
      techStack: ["HTML", "CSS"],
      link: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
      github: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
    },
    {
      image: "../assets/images/proyectos/semana2.png",
      title: "Semana 05",
      description:
        "Aplicación Web que nos trae citas aleatorias",
      techStack: ["HTML", "CSS"],
      link: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
      github: "https://docs.google.com/document/d/1bzYDG0zR6iofNReCd35tERF793rBENeI/edit?usp=sharing&ouid=101829656461149724915&rtpof=true&sd=true",
    },
  ];

  return (
    <div className="proyectos">
      <h2 className="proyectos-title">Proyectos</h2>
      <p className="proyectos-subtitle">
        Algunas aplicaciones que he desarrollado
      </p>
      <div className="proyectos-grid">
        {proyectos.map((project, index) => (
          <div key={index} className="project-item">
            <div className="proyecDatos">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="link-outline"></ion-icon>
                </a>
                <a
                  href={project.github}
                  className="project-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
            <a href={project.link}         target="_blank">
              <figure className="figureProy">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </figure>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Proyectos;
