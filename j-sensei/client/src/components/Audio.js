import React from 'react';
import { Howl } from 'howler';

const Audio = ({ label }) => {

    const audioClips = [
        {
        sound:[`/audio/basic_sounds/${label.romanji}.mp3`], 
            label:`${label.hiragana}`
        }
    ];

    const soundPlay = (src) => {
        const sound = new Howl ({
            src,
            html5: true
        })
        sound.play();
    }
        
        const renderButtonSound = () => {
                return(
                    <button onClick={() => soundPlay(audioClips[0].sound)}>
                {audioClips[0].label}
            </button>
        )
    }
    return (
        <div className="App">
        {renderButtonSound()}
    </div>
    );
}

export default Audio;