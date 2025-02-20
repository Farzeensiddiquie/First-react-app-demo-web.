import './App.css';
import header from './components/header.js';
import {Section1} from './components/section1.js';
import Section2 from './components/section2.js';
import Section3 from './components/section3.js';
import Section4 from './components/section4.js';
import Section5 from './components/section5.js';
import Section6 from './components/section6.js';
import Section7 from './components/section7.js';
import Section8 from './components/section8.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {header()}
        <Section1/>
      </header>
      <div className="App-section2">
      <Section2/>
      </div>
      <div className="App-section3">
      <Section3/>
      </div>
      <div className="App-section4">
      <Section4/>
      </div>
      <div className="App-section5">
        <Section5/>
        </div>
        <div className="App-section6">
<Section6/>
        </div>
        <div className='App-section7'>
          <Section7/>
        </div>
        <div className='App-section8'>
          <Section8/>
        </div>
        <div className='App-footer'>
          <Footer/>
        </div>

    </div>
  );
}

export default App;
