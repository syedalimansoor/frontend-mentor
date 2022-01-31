import styled from "styled-components";

import Calculator from "./Calculator";

const Wrapper = () => {
  return (
    <StyledWrapper>
      <Calculator />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgrounds.main};
  display: grid;
  place-items: center;
  padding: 0.8em;
  transition: background-color 100ms ease;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
`;

export default Wrapper;
