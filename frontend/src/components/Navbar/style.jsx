import styled from "styled-components";

export default styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  background: var(--color-bg-secondary);
  a {
    display: flex;
    text-decoration: none;
  }

  li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: #bebebe;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 0.7rem;
    font-family: var(--font-global);
  }
  img {
    width: 1.2rem;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 700px) {
    p {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
    img {
      width: 2rem;
    }
    height: 09vh;
  }
`;
