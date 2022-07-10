import React from "react";
import '../pages/basic-form.css';

function InputField(props) {
    return (
        <>
        <label htmlFor={props.idName}>
            <input
                type={props.type}
                id={props.idName}
                placeholder={props.altText} />
        </label>
        </>
    )
}

export default InputField;
