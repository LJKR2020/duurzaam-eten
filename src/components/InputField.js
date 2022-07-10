import React from 'react';
import './inputField.css';

function InputField({idName, type, altText}) {
    return (
        <>
            <label htmlFor={idName}>
                <input
                    className='field'
                    type={type}
                    id={idName}
                    placeholder={altText}/>
            </label>
        </>
    )
}

export default InputField;
