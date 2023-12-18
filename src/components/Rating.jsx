import React,{ useState } from "react";
import "./rating.css";
import { StarFilledIcon } from "@radix-ui/react-icons";
// import {FaStar} from "react-icons/fa";
import PropTypes from "prop-types";

const Star = ({selected, onSelect = (f) => f}) => (
    <StarFilledIcon className="star"
    color = {selected ? "#F5DF18" : "#FFF0FA"}
    onClick = {onSelect}
    />
)

export const Rating = ({number = 5}) => {
    const [selected,setSelected] = useState(-1);
    return [...Array(number)].map((n,i) => (
        <Star key={i} onSelect={() => setSelected(i+1)} selected={i < selected}/>
    ));
}

Rating.propTypes = {
    number : PropTypes.number,
};
