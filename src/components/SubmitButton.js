import React from 'react';
import './submitButton.css';

function SubmitButton({type, txt}) {
    return <button
        className='submitButton'
        type={type}
    >
        {txt}
    </button>
}

export default SubmitButton;
