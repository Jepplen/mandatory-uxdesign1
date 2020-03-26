import React, { useState } from "react";
import "./Switch.css";

export default function Switch(props){
  const [checked, updateChecked] = useState(false);

  function onChange(e){
    updateChecked(!checked);
  }

  return (
      <label className="switch">
        <input className="switch__input" type="checkbox" defaultChecked={checked} onChange={onChange} disabled={props.disabled}/>
        <span className="switch__slider"></span>
        <p className="switch__text">{props.label}</p>
      </label>
  );
}
