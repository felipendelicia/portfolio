import '../styles/Content.css'
import About from './About';
import Formation from './Formation';
import Landing from './Landing';
import Skills from './Skills';

function Content() {
  return (
  <div className="content-component-container">
    <Landing/>
    <About/>
    <Formation/>
    <Skills/>
  </div>
  )
}

export default Content;
