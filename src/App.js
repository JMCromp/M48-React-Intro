import './App.css';
import Person from './components/Person';
import Netflix from './components/Netflix';
import Abnb from './components/Abnb';
import Bbc from './components/Bbc';
import Statetest from './components/Statetest';
import Clicker from './components/Clicker';
import { useState } from 'react';

function App() {
  const [example, setExample] = useState("Jordan");
  const [testState, setTestState] = useState();
  const [clicker, setClicker] = useState(0);

  const changeSomething = () => {
    setExample("Not Jordan");
  }

  return (
    <div className="App">
      <Clicker clickerValue={clicker} clickerMethod={setClicker}/>
      <p>{example}</p>
      <button onClick={changeSomething}>Click me</button>
      <Abnb data={example}/>
      <Statetest data={testState} dataMethod={setTestState}/>
      <Netflix />
      <Bbc />
      <Person word="jelly" sub="1" image="" />
      <Person word="duck" sub="2" image="" />
      <Person word="blue worm" sub="3" image="" />
      <Person word="grogu" sub="4" image="" />
    </div>
  );
}

export default App;