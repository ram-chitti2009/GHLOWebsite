import React from 'react';
import '../index.css';

function TextBox(props) {
const boxStyle = {
    padding: '20px',
    margin: '15px 0',
    borderRadius: '8px',
    minHeight: '200px', // Makes the box vertically longer
    background: 'linear-gradient(to bottom, #008080, #0000FF)', // Teal to blue gradient
    color: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

return (
    <div className="text-box" style={boxStyle}>

        <h1 className  = "mb-6"> {props.title} </h1>
        <p className = 'text-sm'>{props.text}</p>
        
            </div>
);
}

export default TextBox;