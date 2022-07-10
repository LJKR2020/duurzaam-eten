import React from 'react';
import './SubmitButton.css';

function SubmitButton({type, txt}) {
    return <button
        className='submitButton'
        type={type}
    >
        {txt}
    </button>
}

export default SubmitButton;
