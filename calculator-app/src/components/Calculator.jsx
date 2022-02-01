import { useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Screen from "./Screen";
import CalculatorContext from "../context/CalculatorContext";
import Keypad from "./Keypad";

const Calculator = () => {
  const [screenText, setScreenText] = useState("");
  const [evalText, setEvalText] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  const contextValue = {
    screenText,
    setScreenText,
    evalText,
    setEvalText,
    overwrite,
    setOverwrite,
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
  width: min(100%, 17em);
  max-width: 100%;
`;

export default Calculator;
