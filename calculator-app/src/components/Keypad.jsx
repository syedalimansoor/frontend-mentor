import { useContext } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import CalculatorContext from "../context/CalculatorContext";

const Keypad = () => {
  const {
    screenValue,
    setScreenValue,
    appendDigit,
    reset,
    deleteDigit,
    memory,
    setMemory,
    operation,
    setOperation,
    setOverwrite,
    decimal,
    setDecimal,
    setDecimalDigits,
    maxDecimalDigits,
    setMaxDecimalDigits,
  } = useContext(CalculatorContext);

  const resetDecimal = () => {
    setDecimal(false);
    setDecimalDigits(0);
  };

  const handleNumberClick = (evt) => {
    appendDigit(Number(evt.target.name));
  };

  const handleResetClick = () => {
    reset();
    setMemory(0);
    setOperation("");
    setOverwrite(false);
    resetDecimal();
    setMaxDecimalDigits(0);
  };

  const handleDelClick = () => {
    deleteDigit();
  };

  const calculate = (operation) => {
    let result;
    switch (operation) {
      case "plus":
        result = memory + screenValue;
        break;
      case "minus":
        result = memory - screenValue;
        break;
      case "times":
        result = memory * screenValue;
        break;
      case "slash":
        result = memory / screenValue;
        if (!isFinite(result)) result = 0;
        break;
      default:
        result = memory;
        break;
    }
    setMemory(result);
    return result;
  };

  const handleOperationClick = (evt) => {
    if (memory === 0) {
      setMemory(screenValue);
      reset();
    } else {
      const result = calculate(operation);
      setScreenValue(result);
      setOverwrite(true);
    }
    setOperation(evt.target.value);
    resetDecimal();
  };

  const handleEqualsClick = () => {
    let result = calculate(operation);
    setScreenValue(
      Number.isInteger(result)
        ? result
        : maxDecimalDigits
        ? Number(result.toFixed(maxDecimalDigits))
        : result
    );
    setOverwrite(true);
    setMemory(0);
  };

  const handleDecimalClick = () => {
    if (!decimal) setDecimalDigits(0);
    setDecimal(true);
  };

  const numberKeys = Array.from({ length: 10 }).map((_, idx) => (
    <NumberKey key={uuid()} num={idx} name={idx} onClick={handleNumberClick}>
      {idx}
    </NumberKey>
  ));

  const operationKeys = Object.keys(OPERATIONS).map((operation) => (
    <OperationKey
      key={uuid()}
      operation={operation}
      value={operation}
      onClick={handleOperationClick}
    >
      {OPERATIONS[operation]}
    </OperationKey>
  ));

  return (
    <StyledKeypad>
      {numberKeys}
      {operationKeys}
      <DecimalKey onClick={handleDecimalClick}>.</DecimalKey>
      <DelKey onClick={handleDelClick}>DEL</DelKey>
      <ResetKey onClick={handleResetClick}>RESET</ResetKey>
      <EqualsKey onClick={handleEqualsClick}>=</EqualsKey>
    </StyledKeypad>
  );
};

const OPERATIONS = {
  plus: "+",
  minus: "-",
  times: "x",
  slash: "/",
};

const StyledKeypad = styled.menu`
  width: 100%;
  background-color: ${({ theme }) => theme.backgrounds.keypad};
  border-radius: 0.3em;
  padding: 0.7em;
  transition: background-color 100ms ease;

  display: grid;
  grid-template:
    "num7 num8 num9 del" 1fr
    "num4 num5 num6 plus" 1fr
    "num1 num2 num3 minus" 1fr
    "dec num0 slash times" 1fr
    "reset reset equals equals" 1fr / 1fr 1fr 1fr 1fr;
  column-gap: 0.4em;
  row-gap: 0.55em;

  @media (min-width: 800px) {
    padding: 1em;
    column-gap: 0.8em;
    row-gap: 0.95em;
  }
`;
const Key = styled.button`
  --color: ${({ theme }) => theme.text.numbers};
  --bg-color: ${({ theme }) => theme.keys.default.background};
  --shadow-color: ${({ theme }) => theme.keys.default.shadow};

  appearance: none;
  border: none;
  border-radius: 0.2rem;
  padding: 0.3rem;
  cursor: pointer;
  user-select: none;
  transition-property: color, background-color, box-shadow, transform;
  transition-duration: 100ms;
  transition-timing-function: ease;

  color: var(--color);
  background-color: var(--bg-color);
  box-shadow: 0 0.15rem 0 var(--shadow-color);

  &:active {
    transform: translateY(0.15rem);
    box-shadow: 0 0 0 var(--shadow-color);
  }
`;
const NumberKey = styled(Key)`
  grid-area: ${({ num }) => `num${num}`};
`;
const DelKey = styled(Key)`
  grid-area: del;
  --color: ${({ theme }) => theme.text.del};
  --bg-color: ${({ theme }) => theme.keys.del.background};
  --shadow-color: ${({ theme }) => theme.keys.del.shadow};
  font-size: 0.5rem;
`;
const OperationKey = styled(Key)`
  grid-area: ${({ operation }) => operation};
`;
const DecimalKey = styled(Key)`
  grid-area: dec;
`;
const ResetKey = styled(DelKey)`
  grid-area: reset;
`;
const EqualsKey = styled(DelKey)`
  grid-area: equals;
  --color: ${({ theme }) => theme.text.equals};
  --bg-color: ${({ theme }) => theme.keys.equals.background};
  --shadow-color: ${({ theme }) => theme.keys.equals.shadow};
`;

export default Keypad;
