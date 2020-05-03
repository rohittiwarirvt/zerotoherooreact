import React from "react";
import "./form-input.styles.scss";


const FormInput = ({handleOnChange, label, ...otherProps}) =>(
    <div className="group">
        <input className="form-input" {...otherProps} onChange={handleOnChange}></input>
        {
            label ? (
                <label 
                    className={
                        `${otherProps.value.length  ? 'shrink' : ''}form-input-label`}>{label}</label>
            ): null
        }
    </div>
)

export default FormInput;