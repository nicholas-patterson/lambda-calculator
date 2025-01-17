import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {number.map(num =>
        // <NumberButton num={num} />
        num === "0" ? (
          <NumberButton num={num} className={"zero"} />
        ) : (
          <NumberButton num={num} className={""} />
        )
      )}
    </div>
  );
};

export default Numbers;
