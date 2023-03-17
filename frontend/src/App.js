// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>Workout Logbook</h1>
            <p>Welcome to the beginning of an incredible self care journey.</p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/AddExercisePage">
              <AddExercisePage />
            </Route>
            
            <Route path="/EditExercisePage">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

          <footer>
            <p>&copy; 2022 Jorge Alejandre</p>
          </footer>

      </Router>
    </>
  );
}

export default App;