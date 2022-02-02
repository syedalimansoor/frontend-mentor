import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import CalculatorContext from "../context/CalculatorContext";

const Keypad = () => {
  const {
    setScreenText: _setScreenText,
    screenText,
    overwrite,
    setOverwrite: _setOverwrite,
  } = useContext(CalculatorContext);

  const screenTextRef = useRef(screenText);
  const setScreenText = (data) => {
    if (typeof data === "function") {
      screenTextRef.current = data(screenTextRef.current);
    } else {
      screenTextRef.current = data;
    }
    _setScreenText(data);
  };

  const overwriteRef = useRef(overwrite);
  const setOverwrite = (data) => {
    if (typeof data === "function") {
      overwriteRef.current = data(overwriteRef.current);
    } else {
      overwriteRef.current = data;
    }
    _setOverwrite(data);
  };

  const cleanup = (prev) => {
    let arr = prev.split(" ");

    let lastDigit = arr[arr.length - 1];
    if (lastDigit.split(".").length > 2)
      arr[arr.length - 1] = lastDigit.slice(0, -1);
    if (lastDigit.includes(".")) return arr.join(" ");

    return arr
      .map((e) => {
        let num = Number(e);
        if (num && !isNaN(num)) return num;
        if (e[0] !== "0" || (e[0] === "0" && e.length === 1)) return e;
        return "";
      })
      .join(" ");
  };

  const appendChar = (char, keyboard = false) => {
    let operators = ["+", "-", "×", "÷"];
    if (keyboard) {
      operators = ["+", "-", "*", "/"];
    }
    let isOperator = false;

    if (operators.includes(char)) {
      isOperator = true;
    }

    if (isOperator) {
      if (screenTextRef.current.slice(-1) === " ") {
        setScreenText((prev) => prev.slice(0, -3) + ` ${char} `);

        return;
      }
      if (!screenTextRef.current) {
        return;
      }
    } else {
      if (overwriteRef.current) {
        setScreenText(char);
        setOverwrite(false);
        return;
      }
    }

    setScreenText((prev) => {
      if (isOperator) {
        return prev + ` ${char} `;
      }
      return prev + char;
    });
    setScreenText(() => cleanup(screenTextRef.current));
    setOverwrite(false);
  };

  const delChar = () => {
    setScreenText((prev) => {
      if (prev.slice(-1) === " ") {
        return prev.slice(0, -3);
      }
      return prev.slice(0, -1);
    });
  };

  const reset = () => {
    setScreenText("");
  };

  const makeEvalText = (text) =>
    text
      .split(" ")
      .map((e) => {
        if (e === "×") return "*";
        if (e === "÷") return "/";
        return e;
      })
      .join("");

  const evaluate = () => {
    const evalText = makeEvalText(screenTextRef.current);

    let result = String(Number(eval(evalText).toFixed(8)));
    if (result === "Infinity") result = "Error";
    setScreenText(result);
    setOverwrite(true);
  };

  const handleKeyPress = (evt) => {
    appendChar(String(evt.target.value));
  };

  useEffect(() => {
    window.addEventListener("keydown", (evt) => {
      evt.stopImmediatePropagation();
      evt.preventDefault();
      let { key: char } = evt;

      if (char === "Enter") {
        evaluate();
        return;
      }
      if (char === "Backspace") {
        delChar();
        return;
      }
      if (char === "Escape" || char === "Delete") {
        reset();
        return;
      }
      if (
        Array.from(Array(10).keys())
          .map((e) => String(e))
          .concat(["+", "-", "*", "/", "."])
          .includes(char)
      )
        appendChar(char, true);
    });
  }, []);

  const numberKeys = Array.from({ length: 10 }).map((_, idx) => (
    <NumberKey key={idx} num={idx} value={idx} onClick={handleKeyPress}>
      {idx}
    </NumberKey>
  ));

  const operationKeys = Object.keys(OPERATIONS).map((operation) => (
    <OperationKey
      key={operation}
      operation={operation}
      value={OPERATIONS[operation]}
      onClick={handleKeyPress}
    >
      {OPERATIONS[operation]}
    </OperationKey>
  ));

  return (
    <StyledKeypad>
      {numberKeys}
      {operationKeys}
      <DecimalKey value={"."} onClick={handleKeyPress}>
        .
      </DecimalKey>
      <DelKey onClick={delChar}>DEL</DelKey>
      <ResetKey onClick={reset}>RESET</ResetKey>
      <EqualsKey onClick={evaluate}>=</EqualsKey>
    </StyledKeypad>
  );
};

const OPERATIONS = {
  plus: "+",
  minus: "-",
  times: "×",
  slash: "÷",
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

  &:active,
  &.pressed {
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
