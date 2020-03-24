import React from 'react';

const Input = ({label, type, error, name, value, handleChange}) => {
    return(
        <div className="form-group">
        <span style={{color:"red"}}>{error ? error: null}</span><br></br>
        <label>{label}</label>
        <input className="form-control" name={name} value={value} onChange={(e) => handleChange(e)}></input>
    </div>
    )
}

export default Input;