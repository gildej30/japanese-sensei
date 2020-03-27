import React, { useState } from 'react';
import './App.css';
import { Router, navigate } from '@reach/router';
import Register from './views/Register';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './views/Dashboard';
import Lesson from './views/Lesson';
import MyContext from './contexts/MyContext';
import Axios from 'axios';


function App() {

  const [val, setVal] = useState("");
  const [currentProgress, setCurrentProgress] = useState(0);

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
    navbar: {
      paddingLeft: '20%',
      paddingRight: '20%'
    }
  }

  const scoreUpdate = (lesson) => {
    setCurrentProgress(parseInt(lesson)+1);
  }
  
  const updateProgress = (progress) => {
    if (progress >= currentProgress) {
      setCurrentProgress(progress);
    }
  }

  return (
    <div className="App">
      <MyContext.Provider value={{ val, setVal }}>
        <Router>
          <Login style={style} path="/" />
          <Register style={style} path="/register" />
          <Dashboard style={style} path='/dashboard' currentProgress={currentProgress} updateProgress={updateProgress}/>
          <Lesson style={style} path='/lesson/:lesson' scoreUpdate={scoreUpdate} currentProgress={currentProgress}/>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
