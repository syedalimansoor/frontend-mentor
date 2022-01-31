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
  const [decimal, setDecimal] = useState(false);
  const [decimalDigits, setDecimalDigits] = useState(0);

  const appendDigit = (value) => {
    if (overwrite) reset();
    if (!decimal) {
      setScreenValue((prev) => prev * 10 + value);
    } else {
      setScreenValue((prev) =>
        Number(
          (prev + value / 10 ** (decimalDigits + 1)).toFixed(decimalDigits + 1)
        )
      );
      setDecimalDigits((prev) => prev + 1);
    }
    if (overwrite) setOverwrite(false);
  };
  const deleteDigit = () => {
    if (!decimal) {
      setScreenValue((prev) => Math.floor(prev / 10));
    } else {
      const newDecimalDigits = decimalDigits - 1;
      setScreenValue((prev) => Number(prev.toFixed(newDecimalDigits)));
      setDecimalDigits(newDecimalDigits);
      newDecimalDigits === 0 && setDecimal(false);
    }
  };
  const reset = () => {
    setScreenValue(0);
  };

  const contextValue = {
    screenValue,
    memory,
    operation,
    overwrite,
    decimal,
    decimalDigits,
    setScreenValue,
    setMemory,
    setOperation,
    setOverwrite,
    setDecimal,
    setDecimalDigits,
    appendDigit,
    deleteDigit,
    reset,
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
`;

export default Calculator;
