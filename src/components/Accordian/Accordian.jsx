import React, { useState,useRef } from "react";
import PropTypes from "prop-types";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import "./accordian.css";

export const Accordian = ({ data }) => {
  return (
    <div className="accordian-section">
      {/* <AccordianItem title={data.title} content="World" /> */}
      {Array.isArray(data) &&
        data.map((d) => <AccordianItem title={d.title} content={d.content} />)}
    </div>
  );
};

// const AccordianItem = ({title,content}) => {

//     const [isActive,setActive] = useState(false);
//     return(
//      <div className="accordian-item">
//         <div className={classNames=("accordian-title",{active:isActive})} role="button" onClick={(e) => setActive(!isActive)}>
//          <div className="title">{title}</div>
//          <div className="icon"> {isActive ? <CaretUpIcon /> : <CaretDownIcon /> }</div>
//         </div>
//         <div className={classNames=("accordian-content",{active:isActive})}>{content}</div>
//      </div>
//     )
//  };

const AccordianItem = ({ title, content }) => {
  const [isActive, setActive] = useState(false);
  const contentElm = useRef(null);

  return (
    <div className="accordian-item">
      <div
        className={classNames("accordian-title", { active: isActive })}
        role="button"
        onClick={(e) => setActive(!isActive)}
      >
        <div className="title">{title}</div>
        <div className="icon">
          {" "}
          {isActive ? <CaretUpIcon /> : <CaretDownIcon />}
        </div>
      </div>
      <div
        ref={contentElm}
        className={classNames("accordian-content", { active: isActive })}
        style={{height: isActive ? contentElm.current.scrollHeight : "0px"}}
      >
        {content}
      </div>
    </div>
  );
};

Accordian.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, content: PropTypes.string })
  ),
};
