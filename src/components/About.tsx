import "../styles/About.css";

export default function About() {
  return (
    <div className="about-component-container content" id="about">
      <h1>Sobre mi</h1>
      <hr />
      <p>
        Soy un desarrollador <b>Full Stack</b> con experiencia en la
        implementación de interfaces con React y APIs con Node.js (utilizando
        TypeScript). Actualmente soy estudiante de la carrera de Ciencias de la
        Computación en la Universidad de Buenos Aires. Tengo un fuerte interés
        en el desarrollo de aplicaciones web y estoy constantemente buscando
        aprender nuevas tecnologías y mejorar mis habilidades.
      </p>
      <h3>
        🎊 Actualmente estudio y busco ampliar mi campo laboral en el mundo del
        desarrollo web
      </h3>
      <p>
        Puedes ver toda mi formacion y experiencia laboral en detalle en {' '}
        <a
          href="https://www.linkedin.com/in/felipe-nahuel-delicia-b2487119a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        🎓
      </p>
    </div>
  );
}
