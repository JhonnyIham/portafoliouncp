import "./sobreMi.css"

const SobreMi = () => {
  const educacion = [
    {
      como:"Experto en Ensamblaje, Mantenimiento y Reparación de PC's",
      institucion: 'Universidad Continental',
      tipo: 'Full Time',
      dedeHasta: 'Mar 2012 - Mar 2013'
    },
    {
      como:"Licenciatura en Ingeniería de Sistemas",
      institucion: 'Universidad Nacional de Centro del Perú',
      tipo: 'Full Time',
      dedeHasta: 'Ene 2020 - Act'
    },
    {
      como:"Desarrollo Web Full Stack",
      institucion: 'Academlo | School of Technology and Computer Science',
      tipo: 'Part Time',
      dedeHasta: 'Dic 2023 - Dic 2024'
    }
  ]
  return (
    <div className="sobreMi">
      <article className="sobreMi-biografia">
        <h2 className="sobreMi-titulo">Sobre mí</h2>
        <p className="sobreMi-texto">Como estudiante de noveno semestre de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú, mi pasión por la programación y el desarrollo de software se ha convertido en el núcleo de mi perfil profesional. A los 31 años, mi enfoque en el trabajo en equipo, junto con una ética de trabajo marcada por la responsabilidad y puntualidad, define mi compromiso con la excelencia.</p>
        <br></br>
        <p className="sobreMi-texto">Viviendo en Huancayo, Perú, la búsqueda constante de retos y el afán por mantenerme al día con las últimas tendencias tecnológicas han sido mis compañeros constantes en este viaje de aprendizaje. Mi objetivo es aplicar mis conocimientos adquiridos en proyectos innovadores, ofreciendo soluciones prácticas y creativas que aporten valor tangible.</p>
        <br></br>
        <p className="sobreMi-texto">Mi filosofía profesional se centra en la adaptabilidad y el autodesarrollo, competencias esenciales en la era digital, que me permiten navegar con confianza en el dinámico campo de la informática. Con un compromiso incansable hacia el mejoramiento continuo y una actitud proactiva, busco oportunidades que no solo pongan a prueba mis habilidades sino que también contribuyan significativamente a los objetivos de la organización.</p>
      </article>
      <article className="sobreMi-educacion">
        <h2 className="sobreMi-titulo">Educación</h2>
        {
          educacion.map((item, index) => (
            <article key={index} className="educacion-item">
              <div className="educacion-content">
                <div className="educacion-detalle">
                  <h3 className="educacion-titulo">{item.como}</h3>
                  <p className="educacion-institucion">{item.institucion}</p>
                </div>
                <div className="educacion-info">
                  <div className="tipo-contain">
                    <h3 className="educacion-tipo">{item.tipo}</h3>
                  </div>
                  <p className="educacion-periodo"><ion-icon name="calendar-clear-outline"></ion-icon>{item.dedeHasta}</p>
                </div>
              </div>
              <hr className="educacion-separador" />
            </article>
          ))
        }
      </article>
    </div>
  )
}
export default SobreMi