import React, { useRef, useEffect, useState } from "react";
import "./TextField.css";

export default function TextField(props){
  const input = useRef(null);
  const labelElement = useRef(null);
  const [width, setWidth] = useState("");
  const [cursorToLeft, setCursorToLeft] = useState(null);
  const [value, setValue] = useState("");
  const [prefix, setPrefix] = useState(null);
  const [suffix, setSuffix] = useState(null);

  useEffect(() => {
    if (props.width){
      setWidth(props.width);
    } else {
      setWidth(280);
    }

    if(!props.cursorToLeft){
      input.current.classList.add("textfield__input--textAlignRight");
    }

    if (props.prefix) {
      input.current.addEventListener("focusin", (e) => {
        input.current.classList.add("textfield__input__prefix");
        input.current.style.paddingLeft = (props.prefix.length * 12) + 12 + "px"
        setPrefix(true);
      });
    }

    if (props.suffix) {
      input.current.addEventListener("focusin", (e) => {
        input.current.classList.add("textfield__input__suffix");
        input.current.style.paddingRight = (props.suffix.length * 12) + 12 + "px"
        setSuffix(true);
      });
    }

    if (input.current){
      input.current.addEventListener("focusout", (e) => {
        if(e.target.value) {
          labelElement.current.classList.add("textfield__label--active");
          input.current.classList.add("textfield__input--active");
        } else {
          labelElement.current.classList.remove("textfield__label--active");
          input.current.classList.remove("textfield__input--active");

          if (props.prefix) {setPrefix(false);}
          if (props.suffix) {setSuffix(false);}
        }
      });
    }

    if (input.current.disabled){
      labelElement.current.classList.add("textfield__label--disabled");
    } else {
      labelElement.current.classList.remove("textfield__label--disabled");
    }

  }, [] );

  function onChange(e) {
     setValue(e.target.value);
  }

  return (
    <div className="textfield" style={{ width: width }}>
      <input
        ref={input}
        className="textfield__input"
        type={props.type} onChange={onChange}
        value={value}
        style={{ width: width }}
        disabled={!props.enabled}
      />
      <label ref={labelElement} className="textfield__label" >{props.label}</label>
      {prefix ? <span className="textfield__prefix">{props.prefix}</span> : null}
      {suffix ? <span className="textfield__suffix">{props.suffix}</span> : null}
    </div>
  );
}
