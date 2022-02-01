import { useContext } from "react";
import styled from "styled-components";

import CalculatorContext from "../context/CalculatorContext";

const Screen = () => {
  const { screenText } = useContext(CalculatorContext);

  return (
    <StyledScreen>
      <span>{screenText}</span>
    </StyledScreen>
  );
};

const StyledScreen = styled.output`
  display: block;
  width: 100%;

  padding: 0.7em;
  border-radius: 0.3em;
  color: ${({ theme }) => theme.text.screen};
  background-color: ${({ theme }) => theme.backgrounds["screen"]};
  text-align: right;
  transition-property: color, background-color;
  transition-duration: 100ms;
  transition-timing-function: ease;
  margin-bottom: 1em;

  span {
    &:empty::before {
      content: "Enter expression...";
      font-size: 0.6em;
      opacity: 0.3;
    }
  }

  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export default Screen;
