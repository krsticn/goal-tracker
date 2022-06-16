import { useState } from "react";

/* useInput hook manages the state of input field.
   If the input is valid and input field is focused. 
   It recieves argument function that validates the input.
*/

const useInput = (validateValue) => {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterdValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnterdValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnterdValue("");
    setIsTouched();
  };

  return {
    value: enterdValue,
    isValid: valueIsValid,
    hasError,
    isTouched,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
