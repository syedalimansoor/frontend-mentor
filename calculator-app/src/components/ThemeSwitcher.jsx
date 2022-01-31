import { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { setThemeName, getThemeName } = useContext(ThemeContext);

  const handleThemeChange = (evt) => {
    setThemeName(evt.target.value);
  };

  return (
    <Wrapper>
      <Number num={1}>1</Number>
      <Number num={2}>2</Number>
      <Number num={3}>3</Number>
      <Background>
        <Toggle getThemeName={getThemeName} />
      </Background>
      {["dark", "light", "weird"].map((thisTheme) => (
        <Radio
          key={thisTheme}
          name="theme"
          value={thisTheme}
          checked={getThemeName() === thisTheme}
          onChange={handleThemeChange}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.7rem;
  display: grid;
  grid-template:
    "num1 num2 num3" 1fr
    "dark light weird" 1fr / 1fr 1fr 1fr;
`;
const Number = styled.div`
  font-size: 0.35rem;
  color: ${({ theme }) => theme.text["screen"]};
  grid-area: ${(props) => `num${props.num}`};
  place-self: center;
  transition: color 100ms ease;
`;
const Toggle = styled.div`
  background-color: ${({ theme }) => theme.keys["toggle"]};
  grid-area: ${({ getThemeName }) => getThemeName()};
  border-radius: 99em;
  width: 0.7em;
  height: 0.7em;
  transition: background-color 100ms ease;
`;
const Background = styled.div`
  background-color: ${({ theme }) => theme.backgrounds["toggle"]};
  grid-row: -2 / -1;
  grid-column: 1 / -1;
  border-radius: 99em;
  transition: background-color 100ms ease;

  display: grid;
  grid-template: "dark light weird" 1fr / 1fr 1fr 1fr;
  padding: 0.2em;
  gap: 0.2em;

  &:hover ${Toggle} {
    outline: 2px solid ${({ theme }) => theme.keys["toggle"]};
  }
`;
const Radio = styled.input.attrs({
  type: "radio",
})`
  appearance: none;
  opacity: 0;
  grid-area: ${(props) => props.value};
  cursor: pointer;
`;

export default ThemeSwitcher;
