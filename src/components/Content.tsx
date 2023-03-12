import '../styles/Content.css'
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Formation from './Formation';
import Landing from './Landing';
import Portfolio from './Portfolio';

function Content() {
  return (
    <div className="content-component-container">
      <Landing />
      <hr id="about"/>
      <About/>
      <hr id="experience"/>
      <Experience />
      <hr id="formation"/>
      <Formation />
      <hr id="portfolio"/>
      <Portfolio />
      <hr id="contact"/>
      <Contact />
    </div>
  )
}

export default Content;
