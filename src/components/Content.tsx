import '../styles/Content.css'
import About from './About';
import Contact from './Contact';
import Formation from './Formation';
import Landing from './Landing';
import Skills from './Skills';

function Content() {
  return (
  <div className="content-component-container" id='contact'>
    <Landing/>
    <About/>
    <Formation/>
    <Skills/>
    <Contact/>
  </div>
  )
}

export default Content;
