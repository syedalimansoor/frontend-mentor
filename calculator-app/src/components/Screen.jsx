import { useContext } from "react";
import styled from "styled-components";

import CalculatorContext from "../context/CalculatorContext";

const Screen = () => {
  const { screenValue } = useContext(CalculatorContext);

  return <StyledScreen>{screenValue}</StyledScreen>;
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
`;

export default Screen;
