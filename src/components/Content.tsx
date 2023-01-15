import '../styles/Content.css'
import About from './About';
import Contact from './Contact';
import Formation from './Formation';
import Landing from './Landing';
import Portfolio from './Portfolio';

function Content() {
  return (
  <div className="content-component-container">
    <Landing/>
    <About/>
    <Formation/>
    <Portfolio/>
    <Contact/>
  </div>
  )
}

export default Content;
