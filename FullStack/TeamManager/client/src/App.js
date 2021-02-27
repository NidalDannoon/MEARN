import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update'
import TeamForm from './components/TeamForm'
function App() {
  return (
    <div className="App">
    <Router>
		<Main path="/"/>
        <Detail path="/:id"/>
        <TeamForm path="teams/new"/>
        <Update path="teams/:id/edit"/>
        </Router>
    </div>
  );
}
export default App;
