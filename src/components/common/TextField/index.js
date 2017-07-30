import React from 'react';

const TextField = ({name, value, htmlFor, className, error, label, type, onChange}) => {
    return (
        <div className={className}>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className="field__input"
            />
            <label htmlFor={htmlFor} className={value ? 'field__label field__label--focused' : 'field__label'}>{label}</label>
            <span className="field__tooltip">{error}</span>
        </div>
    )
};

export default TextField;