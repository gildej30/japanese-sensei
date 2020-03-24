import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Register from './views/Register';
import Main from './views/Main';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.css';

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
  return (
    <div className="App">
      <Router>
        <Login style={style} path="/" />
        <Register style={style} path="/register" />
        <Main path="/home" />
      </Router>
    </div>
  );
}

export default App;
