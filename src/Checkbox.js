import React, { useRef, useEffect, useState } from "react";
import "./Checkbox.css";
import CheckIcon from '@material-ui/icons/Check';


export default function Checkbox(props){
  const fakeCheckboxEl = useRef(null);
  const checkRef = useRef(null);
  const checkboxEl = useRef(null);
  const [checked, setChecked] = useState(false);
  const checkStr = "checkbox__check--checked";
  const uncheckStr = "checkbox__check--unchecked";
  const [check, setCheck] = useState(uncheckStr);

  useEffect(() => {
    if(checkboxEl.current.disabled) {
      fakeCheckboxEl.current.classList.add("checkbox--disabled");
    }
  }, [] );

  function onClick() {
    if (!checkboxEl.current.disabled){
      if (checked) {
        setCheck(uncheckStr);
      } else {
        setCheck(checkStr);
      }
      setChecked(!checked);
    }
  }

  function onKeyDown(e){
    if(e.keyCode === 32){
      onClick();
    }
  }

  return (
    <div ref={fakeCheckboxEl} className="checkbox" onClick={onClick} tabIndex="0" onKeyDown={onKeyDown}>
      <label className="checkbox__label">{props.label}</label>
      <input ref={checkboxEl} className="checkbox__input" type="checkbox" defaultChecked={checked} disabled={props.disabled} tabIndex="-1"/>
      <CheckIcon ref={checkRef} className={check} />
    </div>
  );
}
