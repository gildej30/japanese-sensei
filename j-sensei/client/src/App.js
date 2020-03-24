import React, {useState} from 'react';
import './App.css';
import { Router } from '@reach/router';
import Dashboard from './views/Dashboard';
import Lesson from './views/Lesson'; 

function App() {

  const [userScores, setUserScores] = useState([
    {
      lessonName: "Lesson 1",
      highScore: 0,
      lessonColor: "danger"
  },
  {
      lessonName: "Lesson 2",
      highScore: 0,
      lessonColor: "danger"
  },
  {
      lessonName: "Lesson 3",
      highScore: 0,
      lessonColor: "danger"
  }
  ])
  
  const scoreUpdate = (lesson, score) => {
    let newColor = "";
  
    if(score <= 1) {
      newColor = "danger"
    }
    else if(score < 3) {
      newColor = "warning"
    }
    else {
      newColor = "success"
    }
  
    const newScore = {
      lessonName: `Lesson ${lesson}`,
      highScore: score,
      lessonColor: newColor
    }
  
    setUserScores([...userScores.slice(0, lesson-1), newScore, ...userScores.slice(lesson)])
  }

  return (
    <div className="App">
        <h1>Welcome to J-Sensei!</h1>
        <Router>
          <Dashboard path='/' userScores={userScores}/>
          <Lesson path='/lesson/:id' scoreUpdate={scoreUpdate}/>
      </Router>
    </div>
  );
}

export default App;
