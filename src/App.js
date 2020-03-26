import React from 'react';
import './App.css';
import TextField from "./TextField";
import Switch from "./Switch";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

export default function App() {
  return (
    <div className="App">
      <h1>Demo sida för Mandatory-UX-Design-1</h1>
      <br/>
      <br/>
      <div className="textfieldContainer">
        <TextField
          label="Name"  /* Takes a string */
          type="text"   /* Takes a string, all of the JSX input types are valid */
          width={null}  /* Set pixels in NUMBER or NULL as default */
          prefix={null} /* Takes a string - Leave NULL to disable */
          suffix={null} /* Takes a string - Leave NULL to disable */
          cursorToLeft={true} /* Takes a boolean */
          enabled={true}  /* Takes a boolean */
        />
        <TextField
          label="Last name"  /* Takes a string */
          type="text"   /* Takes a string, all of the JSX input types are valid */
          width={null}  /* Set pixels in NUMBER or NULL as default */
          prefix={null} /* Takes a string - Leave NULL to disable */
          suffix={null} /* Takes a string - Leave NULL to disable */
          cursorToLeft={true} /* Takes a boolean */
          enabled={true}  /* Takes a boolean */
        />
        <TextField
          label="Price"  /* Takes a string */
          type="number"   /* Takes a string, all of the JSX input types are valid */
          width={135}  /* Set pixels in NUMBER or NULL as default */
          prefix={"$"} /* Takes a string - Leave NULL to disable */
          suffix={null} /* Takes a string - Leave NULL to disable */
          cursorToLeft={true} /* Takes a boolean */
          enabled={true}  /* Takes a boolean */
        />
        <TextField
          label="Price"  /* Takes a string */
          type="number"   /* Takes a string, all of the JSX input types are valid */
          width={135}  /* Set pixels in NUMBER or NULL as default */
          prefix={null} /* Takes a string - Leave NULL to disable */
          suffix={"Kr"} /* Takes a string - Leave NULL to disable */
          cursorToLeft={false} /* Takes a boolean */
          enabled={true}  /* Takes a boolean */
        />
        <TextField
          label="Phone"  /* Takes a string */
          type="number"   /* Takes a string, all of the JSX input types are valid */
          width={165}  /* Set pixels in NUMBER or NULL as default */
          prefix={null} /* Takes a string - Leave NULL to disable */
          suffix={null} /* Takes a string - Leave NULL to disable */
          cursorToLeft={true} /* Takes a boolean */
          enabled={true}  /* Takes a boolean */
        />
        <TextField
          label="Order#"  /* Takes a string */
          type="number"   /* Takes a string, all of the JSX input types are valid */
          width={105}  /* Set pixels in NUMBER or NULL as default */
          prefix={null} /* Takes a string - Leave NULL to disable */
          suffix={"Kr"} /* Takes a string - Leave NULL to disable */
          cursorToLeft={false} /* Takes a boolean */
          enabled={false}  /* Takes a boolean */
        />
      </div>
      <br/>
      <br/>
      <Switch
        label="Label"
        disabled={false}
      />
      <br/>
      <br/>
      <Switch
        label="Label"
        disabled={true}
      />

      <br/>
      <Checkbox
        label="Label"  /* Takes a string */
        disabled={false}
      />
      <Checkbox
        label="Label"  /* Takes a string */
        disabled={true}
      />
      <br/>
      <RadioButton />
      <br/>
    </div>
  );
}
