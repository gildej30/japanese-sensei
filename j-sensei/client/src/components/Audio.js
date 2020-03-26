import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Audio = ({id}) => {
    const [label, setLabel] = useState("");
    const [clip, setClip] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8000/api/hiragana/${id}`)
            .then(res => {
                setLabel(res.data.romanji);
                setClip(`../audio/basic_sounds/${label}.mp3`);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <button>Play</button>
    )
}

export default Audio;