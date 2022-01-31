import { useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Screen from "./Screen";
import ScreenContext from "../context/ScreenContext";
import Keypad from "./Keypad";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState(0);

  const appendToScreen = (value) => {
    setScreenValue((prev) => prev * 10 + value);
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
    setScreenValue,
    appendToScreen,
    add,
    subtract,
    multiply,
    divide,
  };

  return (
    <ScreenContext.Provider value={contextValue}>
      <StyledCalculator>
        <Header />
        <Screen />
        <Keypad />
      </StyledCalculator>
    </ScreenContext.Provider>
  );
};

const StyledCalculator = styled.section`
  width: min(100%, 30em);
`;

export default Calculator;
