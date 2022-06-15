import styled from "styled-components";

export default styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  background: var(--color-bg-secondary);
  a {
    display: flex;
    text-decoration: none;
    justify-content: center;
  }
  p {
    color: white;
    font-size: 1rem;
    margin-top: 1rem;
  }
  img {
    width: 1.5rem;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
