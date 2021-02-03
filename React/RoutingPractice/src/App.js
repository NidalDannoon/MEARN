import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import NumComponent from './components/NumComponent';

import StylComponent from './components/StylComponent';

function App() {
  return (
    <div className="App">
        <Router>
            <HomeComponent path="/home"/>
			<NumComponent path="/:id" />
            <StylComponent path="/:word/:txt/:bg" />
        </Router>
    </div>
  );
}
export default App;
