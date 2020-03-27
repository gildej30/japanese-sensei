import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

const Audio = ({ label }) => {

    console.log(label);

    const [audioClips, setAudioClips] = useState([
        {
            sound: [`/audio/basic_sounds/${label.romanji}.mp3`],
            label: `${label.hiragana}`
        }
    ])

    useEffect(() => {
        setAudioClips([
            {
                sound: [`/audio/basic_sounds/${label.romanji}.mp3`],
                label: `${label.hiragana}`
            }
        ])
    }, [label]);

    const soundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true,
            sprite: {
                woman: [500, 2000],
                man: [2500, 2000]
            }
        })
        sound.play("woman");
    }

    const renderButtonSound = () => {
        
            return (
                <button onClick={() => soundPlay(audioClips[0].sound)}>
                    {audioClips[0].label}
                </button>
            )
    }

    return (
        <div>
            {renderButtonSound()}
        </div>
    );
}

export default Audio;