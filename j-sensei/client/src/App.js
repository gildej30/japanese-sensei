import React, { useState} from 'react';
import './App.css';
import { Router } from '@reach/router';
import Register from './views/Register';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './views/Dashboard';
import Lesson from './views/Lesson';
import MyContext from './contexts/MyContext';
import { UserData } from './data/UserData';


function App() {
  const [val, setVal] = useState("");
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
    },
    navbar:{
      paddingLeft: '20%',
      paddingRight: '20%'
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
      <MyContext.Provider value={{val, setVal}}>
        <Router>
          <Login style={style} path="/" />
          <Register style={style} path="/register" />
          <Dashboard style={style} path='/dashboard' userScores={userScores} />
          <Lesson style={style} path='/lesson/:lesson' userScores={userScores} scoreUpdate={scoreUpdate}/>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
