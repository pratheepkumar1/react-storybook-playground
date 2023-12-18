import PropTypes from "prop-types";
import { useState } from "react";

export const TextInput = ({name,type,label,placeholder}) => {
    
    const [value,setValue] = useState("");
    
    const HandleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="mb-4">
        <label htmlFor={name} className="block">{label}</label>
        <input type={type} name={name} placeholder={placeholder} onChange={HandleChange}></input>
        </div>
    )
}

TextInput.propTypes = {
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    type:PropTypes.string,
    placeholder:PropTypes.string,

}