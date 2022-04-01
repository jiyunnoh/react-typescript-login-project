import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props: { isValid: boolean; id: string; label: string; type: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; onBlur: React.FocusEventHandler<HTMLInputElement>; }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const activate = () => {
        inputRef.current!.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    });

    return (
        <div
            className={`
                ${classes.control} 
                ${props.isValid === false ? classes.invalid : ''}
            `}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;