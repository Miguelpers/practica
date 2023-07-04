import logo from './logo.svg';
import './App.css';

import { Albani, Miguel, Nelson } from './container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
	  <Albani />
	  <Miguel />
	  <Nelson />
    </div>
  );
}

export default App;
