import React, { useState} from 'react';
import './App.css';
import { Router } from '@reach/router';
import Register from './views/Register';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './views/Dashboard';
import Lesson from './views/Lesson';
import MyContext from './contexts/MyContext';


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
    let highScore = Math.max(score, userScores[lesson - 1].highScore);
    let lessonName = userScores[lesson - 1].lessonName;

    if (highScore <= 2) {
      newColor = "danger"
    }
    else if (highScore < 5) {
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

    setUserScores([...userScores.slice(0, lesson - 1), newScore, ...userScores.slice(lesson)])
  }

  const [isMounted, setIsMounted] = useState(false);

  return (
    <div className="App">
      <MyContext.Provider value={{val, setVal}}>
        <Router>
          <Login style={style} path="/" />
          <Register style={style} path="/register" />
          <Dashboard style={style} path='/dashboard' userScores={userScores} />
          <Lesson style={style} path='/lesson/:id' userScores={userScores} scoreUpdate={scoreUpdate} />
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
