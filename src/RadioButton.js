import React, { useState } from "react";
import "./RadioButton.css";
import MenuIcon from '@material-ui/icons/Menu';

export default function RadioButton(){
  const [fruit, updateFruit] = useState("apple");

  function onChange(e) {
      updateFruit(e.target.value);
  }

  return (
    <div className="radiobuttons">
      <input type="radio" id="radioApple" name="radioFruit" value="apple" defaultChecked={fruit === "apple"} onChange={onChange} tabIndex="0" />
      <label htmlFor="radioApple">
        <p>Apple</p>
      </label>
      <input type="radio" id="radioBanana" name="radioFruit" value="banana" defaultChecked={fruit === "banana"} onChange={onChange} tabIndex="0" />
      <label htmlFor="radioBanana">
        <p>Banana</p>
      </label>
      <input type="radio" id="radioOrange" name="radioFruit" value="orange" defaultChecked={fruit === "orange"} onChange={onChange} tabIndex="0" disabled={true}/>
      <label htmlFor="radioOrange" >
        <p>Orange</p>
      </label>
  </div>
  );
}
