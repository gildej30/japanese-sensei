import React from 'react';



function App() {
    const JishoApi = require('unofficial-jisho-api');
    const request = require('request');
    const jisho = new JishoApi();

    jisho.searchForKanji("寿司")
    .then(result => {
        console.log('JLPT level: ' + result.jlptLevel);
    })
    
    return (
        <div className="App">

        </div>
    );
}


export default Main;