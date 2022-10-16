import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const inputHasError = !valueIsValid && inputIsTouched;

  function valueChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function inputBlurHandler() {
    setInputIsTouched(true);
  }

  function reset() {
    setEnteredValue("");
    setInputIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
