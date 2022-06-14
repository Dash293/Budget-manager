import styled from "styled-components";

export default styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: var(--color-bg-header-nav);
  a {
    text-decoration: none;
  }
  h1 {
    font-weight: bold;
    color: white;
    font-size: 2rem;
  }
`;
