import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <HomePage setExerciseToEdit={setExerciseToEdit} />
        </Route>
        <Route exact path='/edit-exercise'>
          <EditPage exerciseToEdit={exerciseToEdit} />
        </Route>
        <Route exact path='/add-exercise'>
          <CreatePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
