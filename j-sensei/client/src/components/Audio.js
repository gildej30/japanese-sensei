import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import Axios from 'axios';

const Audio = ({id}) => {

    const [char, setChar] = useState("");
    const [audioClips, setAudioClips] = useState([]) 
    [
        {sound:`../audio/basic_sounds/${char}.mp3` , label:`../audio/basic_sounds/${char}`}
    ]
    
    useEffect (() => {
        Axios.get(`http://localhost:8000/api/hiragana/${id}/romanji`)
        .then(res=> {
            setChar(res.data.romanji);
            setAudioClips({
                sound:`../audio/basic_sounds/${char}.mp3`, 
                label:`../audio/basic_sounds/${char}`})})
        .catch(err => console.log(err))
    }, [id])

    soundPlay = (src) => {
        const sound = new Howl ({
            src,
            html5: true
    })
    sound.play();
}

renderButtonSound = () => {
    return audioClips.map((soundObj, idx) => {
        return(
            <button key={idx} onClick={() => this.soundPlay(soundObj.sound)}>
                {soundObj.label}
            </button>
        )
    })
}

return (
    <div className="App">
            <h2>Sounds</h2>
            {this.renderButtonSound()}
        </div>
    );
}
    
    
    export default Audio;