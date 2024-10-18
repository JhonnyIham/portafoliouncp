import "./conocimientos.css";

const Conocimientos = () => {

  const tecnologias = [
    {
      nombre: "Java",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      nombre: "python",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    },
    {
      nombre: "HTML",
      imagen:
      "https://cdn-icons-png.flaticon.com/256/174/174854.png",
    },
    {
      nombre: "CSS",
      imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/2048px-Devicon-css3-plain.svg.png",
    },
    {
      nombre: "JavaScript",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      nombre: "React JS",
      imagen:
        "https://blog.octo.com/pourquoi-sinteresser-a-react/react-logo-1000-transparent.webp",
    },
    {
      nombre: "Tailwind",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png",
    },
    {
      nombre: "Node.js",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
  ]

  const certificaciones = [
    {
      name: "Introduction to Cybersecurity",
      institution: "CISCO | Networkin Academy",
      date: "2023",
      icon: "../assets/images/certificados/Introduction to Cybersecurity.png",
      enlace: 'https://www.credly.com/badges/65fab888-12d9-4b9c-b479-13c7e2405cb6/print'
    },
    {
      name: "Ethical Hacker",
      institution: "CISCO | Networkin Academy",
      date: "2024",
      icon: "../assets/images/certificados/EthicalHaker.png",
      enlace: 'https://www.credly.com/go/9pmb19aA'
    },
    {
      name: "Fundamentos Del Desarrollo Web",
      institution: "Academlo | School of Technology and Computer Science",
      date: "2024",
      icon: "../assets/images/certificados/Fundamentos.png",
      enlace: 'https://certiwise.co/verify/422'
    },
    {
      name: "Desarrollo de Aplicaciones Web con React",
      institution: "Academlo | School of Technology and Computer Science",
      date: "2024",
      icon: "../assets/images/certificados/react.png",
      enlace: 'https://certiwise.co/verify/4936'
    },
    {
      name: "Back-End Development con Node.js",
      institution: "Academlo | School of Technology and Computer Science",
      date: "2024",
      icon: "../assets/images/certificados/Back-End Development with NodeJS.png",
      enlace: 'https://certiwise.co/verify/5439'
    },
    {
      name: "Full Stack Web",
      institution: "Academlo | School of Technology and Computer Science",
      date: "2024",
      icon: "../assets/images/certificados/Full Stack Web.png",
      enlace: 'https://certiwise.co/verify/5437'
    },
  ]

  return (
    <div className="conocimientos">
      <section className="herramientas">
        <h2>Habilidades Tecnológicas</h2>
        <p>Un resumen de mis herramientas y lenguajes.</p>
        <div className="tecnologias">
          {
          tecnologias.map((tecnologia, index) => (
            <div key={index} className="tecnologia-item">
              <figure className="figureTec">
                <img src={tecnologia.imagen} alt={tecnologia.nombre} />
              </figure>
              <p>{tecnologia.nombre}</p>
            </div>
          ))
          }
        </div>
      </section>
      <section className="certificaciones">
        <h2>Certificados</h2>
        <p>
          Aquí está una selección de certificaciones profesionales que respaldan
          mi experiencia y conocimiento en el campo de la tecnología.
        </p>
        <div className="certificados">
          {
            certificaciones.map((certificado, index) => (
              <div key={index} className="certificado-item">
                <a href={certificado.enlace} target="_blank">
                  <figure className="figureCert">
                    <img src={certificado.icon} alt={certificado.name} className="certificado-icon" />
                  </figure>
                </a>
                <h3 className="certificado-name">{certificado.name}</h3>
                <p className="certificado-institution">{certificado.institution}</p>
                <span className="certificado-date">{certificado.date}</span>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};
export default Conocimientos;
