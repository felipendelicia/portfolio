import '../styles/Formation.css'
import language_conf from '../data/language_conf'
import languageContext from '../context/languageContext';
import { useContext } from 'react';
import formation from '../data/formation';


export default function Formation() {

  const { language } = useContext(languageContext)

  return (
    <div className="formation-component-container content" id="formation">
      <h1>{language_conf[language].formation_title}</h1>
      <hr />
      <div className="formation-blocks">

        {
          formation.map((formation, i) => {
            return (
              <div className="formation-block" key={i}>
                <h3>{formation.title[language]}</h3>
              </div>
            )
          })
        }

        <div className="formation-block">
          <h3>Licenciatura en Ciencias de la Computacion</h3>
          <h5>Universidad de Buenos Aires 🏫</h5>
          <p>Junio 2022 - Presente</p>
        </div>
        <div className="formation-block">
          <h3>Front End Development Libraries</h3>
          <h5>freeCodeCamp 🏕️</h5>
          <p>Diciembre 2022</p>
        </div>
        <div className="formation-block">
          <h3>Responsive Web Design</h3>
          <h5>freeCodeCamp 🏕️</h5>
          <p>Diciembre 2022</p>
        </div>
        <div className="formation-block">
          <h3>Javascript Algorithms and Data Structures</h3>
          <h5>freeCodeCamp 🏕️</h5>
          <p>Diciembre 2022</p>
        </div>
        <div className="formation-block">
          <h3>Desarrollo de aplicaciones moviles</h3>
          <h5>Aprende Programando 👨‍💻</h5>
          <p>Noviembre 2020</p>
        </div>
      </div>
    </div>
  );
}
