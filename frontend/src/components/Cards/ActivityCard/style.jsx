import styled from "styled-components";

export default styled.section`
  .activityCard {
    display: flex;
    align-items: center;
  }
  .informations {
    margin: 10px;
    width: 70%;
  }
  .logo {
    height: 3vh;
    margin-left: 2rem;
    margin-right: 0.8rem;
  }
  h1 {
    font: var(--color-font-primary);
    font-weight: 500;
    align-items: center;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  h3 {
    font: var(--color-font-primary);
    align-items: center;
    font-size: 1.1rem;
    font-weight: 300;
  }
  h2 {
    font: var(--color-font-primary);
    height: 3vh;
    position: absolute;
    right: 20px;
  }
`;
