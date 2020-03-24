import React, {useState} from 'react';
import './App.css';
import { Router } from '@reach/router';
import Dashboard from './views/Dashboard';
import Lesson from './views/Lesson'; 

function App() {

  const [userScores, setUserScores] = useState([
    {
      lessonName: "Hiragana 1",
      highScore: 0,
      lessonColor: "danger"
  },
  {
      lessonName: "Hiragana 2",
      highScore: 0,
      lessonColor: "danger"
  },
  {
      lessonName: "Hiragana 3",
      highScore: 0,
      lessonColor: "danger"
  }
  ])
  
  const scoreUpdate = (lesson, score) => {
    let newColor = "";
    let highScore = Math.max(score, userScores[lesson-1].highScore);
    let lessonName = userScores[lesson-1].lessonName;
  
    if(highScore <= 1) {
      newColor = "danger"
    }
    else if(highScore < 3) {
      newColor = "warning"
    }
    else {
      newColor = "success"
    }
  
    const newScore = {
      lessonName: lessonName,
      highScore: highScore,
      lessonColor: newColor
    }
  
    setUserScores([...userScores.slice(0, lesson-1), newScore, ...userScores.slice(lesson)])
  }

  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand mr-auto" href="#">J-Sensei!</a>
          <span class="navbar-text">Welcome, TestUser!</span>
        </nav>
        <hr />
        <Router>
          <Dashboard path='/' userScores={userScores}/>
          <Lesson path='/lesson/:id' userScores={userScores} scoreUpdate={scoreUpdate}/>
      </Router>
    </div>
  );
}

export default App;
