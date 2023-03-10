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
      <hr />
      <About />
      <hr />
      <Experience />
      <hr />
      <Formation />
      <hr />
      <Portfolio />
      <hr />
      <Contact />
    </div>
  )
}

export default Content;
