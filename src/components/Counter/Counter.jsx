import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import {PlusIcon,MinusIcon} from '@radix-ui/react-icons';



export const Counter = (color) => {
    
    const [count, setCount] = useState(0);


    const handleOnClick = (eventType) => {
        if(eventType === "ADD"){
            setCount(count-1);
            console.log("Adding")
            return;
        }
        setCount(count+1);
        console.log("Subtracting");
    };
    
    return(
        <>
            <span style={color}> Counter: {count} </span>
            <br/>
            <Button label="-" onClick = {() => handleOnClick("ADD")} backgroundColor="#E8EAED" />
            <Button label="+" onClick = {() => handleOnClick()} backgroundColor="#E8EAED" />
        </>
    );

}

Counter.propTypes = {
    color: PropTypes.string
}