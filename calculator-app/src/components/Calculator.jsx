import { useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Screen from "./Screen";
import CalculatorContext from "../context/CalculatorContext";
import Keypad from "./Keypad";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState(0);
  const [memory, setMemory] = useState(0);
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  const appendDigit = (value) => {
    if (overwrite) reset();
    setScreenValue((prev) => prev * 10 + value);
    if (overwrite) setOverwrite(false);
  };
  const deleteDigit = () => {
    setScreenValue((prev) => Math.floor(prev / 10));
  };
  const reset = () => {
    setScreenValue(0);
  };
  const add = (value) => {
    setScreenValue((prev) => prev + value);
  };
  const subtract = (value) => {
    setScreenValue((prev) => prev - value);
  };
  const multiply = (value) => {
    setScreenValue((prev) => prev * value);
  };
  const divide = (value) => {
    setScreenValue((prev) => prev + value);
  };

  const contextValue = {
    screenValue,
    memory,
    operation,
    overwrite,
    setScreenValue,
    setMemory,
    setOperation,
    setOverwrite,
    appendDigit,
    deleteDigit,
    reset,
    add,
    subtract,
    multiply,
    divide,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      <StyledCalculator>
        <Header />
        <Screen />
        <Keypad />
      </StyledCalculator>
    </CalculatorContext.Provider>
  );
};

const StyledCalculator = styled.section`
  width: min(100%, 30em);
`;

export default Calculator;
