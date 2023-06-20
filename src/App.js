import './App.css';
import Person from './components/Person';
import Netflix from './components/Netflix';
import Abnb from './components/Abnb';
import Bbc from './components/Bbc';

function App() {
  return (
    <div className="App">
      <Person word="jelly" sub="1" image=""/>
      <Person word="duck" sub="2" image=""/>
      <Person word="blue worm" sub="3" image=""/>
      <Person word="grogu" sub="4" image=""/>
      <Netflix />
      <Abnb />
      <Bbc />
    </div>
  );
}

export default App;