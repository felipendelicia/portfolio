import '../styles/Content.css'
import About from './About';
import Formation from './Formation';
import Landing from './Landing';

function Content() {
  return (
  <div className="content-component-container">
    <Landing/>
    <About/>
    <Formation/>
  </div>
  )
}

export default Content;
