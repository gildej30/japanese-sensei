import React from 'react';
import './App.css';
import { Router } from '@reach/router'; 
const JishoApi = require('unofficial-jisho-api');
const jisho = new JishoApi();


//remember to import axios and  @react/router for {Link}

function App() {
  return (
    <div className="App">
        <Router>
          <Main path='/' />
      </Router>

      
    </div>
  );
}

export default App;
