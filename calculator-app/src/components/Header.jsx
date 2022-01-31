import styled from "styled-components";

import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <StyledHeader>
      <Logo>calc</Logo>
      <ThemeLabel>THEME</ThemeLabel>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 0.8em;
  color: ${({ theme }) => theme.text["screen"]};
  margin-bottom: 1em;
  transition: color 100ms ease;
`;
const Logo = styled.h1`
  font-size: 1rem;
`;
const ThemeLabel = styled.span`
  margin-left: auto;
  font-size: 0.4rem;
  letter-spacing: 0.1em;
`;

export default Header;
