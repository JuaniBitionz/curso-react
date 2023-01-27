import './App.css';
import {JobExperience} from './components/JobExperience/JobExperience';

function App() {
  return (
    <div className="App">
      <div className='typewriter-container'>
        <div className='typewriter'>
          <h1>Juan Ignacio Olguin</h1>
        </div>
        <div className='typewriter shown-on-animation-end'>
          <h2>Information Systems Engineer</h2>
        </div>
      </div>
      <JobExperience />
    </div>
  );
}

export default App;
