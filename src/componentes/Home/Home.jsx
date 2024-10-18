import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="contain">
        <div className="home__presentacion">
          <h1>Hola👋, soy <span className="name">Jhonny Iham Torres Vilcapoma</span></h1>
          <h2>Desarrollador Web</h2>
          <h2>Ingeniero de Sistemas</h2>
          <p>
            Mi objetivo principal es diseñar y desarrollar una aplicación web
            innovadora que resuelva problemas en mi comunidad de Huancayo,
            demostrando mis habilidades en programación y desarrollo de software.
          </p>
        </div>
        <figure className="home__foto">
          <img src="../assets/images/jhonny.png" alt="JITV" />
        </figure>
      </div>
    </div>
  );
};
export default Home;
