import styled from "styled-components";

export default styled.button`
  color: var(--color-font-primary);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  img {
    height: 3vh;
  }
  @media screen and (min-width: 700px) {
    height: 3vh;
  }
`;
