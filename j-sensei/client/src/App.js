import React, {useState} from 'react';
import './App.css';
import { Router } from '@reach/router';
import Register from './views/Register';
import Main from './views/Main';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './views/Dashboard';
import Lesson from './views/Lesson';
import { UserData } from './data/UserData';


function App() {
    const style = {
    card: {
      borderRadius: '10px',
      margin: '15px',
      padding: '15px',
      textAlign: 'left'
    },
    label: {
      fontWeight: 'bold'
    },
    span: {
      color: 'red'
    },
    invalid: {
      display: 'inline-block',
      fontSize: '14px',
      color: 'red',
      margin: '0px',
      padding: '0px'
    }
  }

  const [userScores, setUserScores] = useState(UserData);
  
  const scoreUpdate = (lesson, score) => {
    let lessonNumber = parseInt(lesson);
    let newColor = "";
    let highScore = Math.max(score, userScores[lesson].highScore);
    let lessonName = userScores[lesson].lessonName;
    let alphabet = userScores[lesson].alphabet;
    let type = userScores[lesson].type;
  
    if(type === "quiz") {
      if(highScore <= 4) {
        newColor = "danger"
      }
      else if(highScore < 10) {
        newColor = "warning"
      }
      else {
        newColor = "success"
      }
    }
    else {
      if(highScore <= 3) {
        newColor = "danger"
      }
      else if(highScore < 8) {
        newColor = "warning"
      }
      else {
        newColor = "success"
      }
    }
  
    let newScore = {
      lessonName: lessonName,
      highScore: highScore,
      lessonColor: newColor,
      alphabet: alphabet,
      type: type
    };
  
    setUserScores([...userScores.slice(0,lessonNumber), newScore, ...userScores.slice(lessonNumber+1)]);
  }

  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand mr-auto" href="#">J-Sensei!</a>
          <span className="navbar-text">Welcome, TestUser!</span>
        </nav>
        <hr />
        <Router>
          <Dashboard path='/' userScores={userScores}/>
          <Lesson path='/lesson/:lesson' userScores={userScores} scoreUpdate={scoreUpdate}/>
      </Router>
    </div>
  );
}

export default App;
