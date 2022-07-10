import React from 'react';
import './InputField.css';

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
