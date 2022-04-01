import React from "react";

import classes from "./Input.module.css";

const Input = (props: { isValid: boolean; id: string; label: string; type: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; onBlur: React.FocusEventHandler<HTMLInputElement>; }) => {
    return (
        <div
            className={`
                ${classes.control} 
                ${props.isValid === false ? classes.invalid : ''}
            `}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
}

export default Input;