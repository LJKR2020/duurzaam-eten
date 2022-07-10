import React from "react";
import '../pages/basic-form.css';

function InputField({idName, type, altText}) {
    return (
        <>
            <label htmlFor={idName}>
                <input
                    type={type}
                    id={idName}
                    placeholder={altText}/>
            </label>
        </>
    )
}

export default InputField;
