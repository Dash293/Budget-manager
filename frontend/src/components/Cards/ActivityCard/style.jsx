import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;

  .activityCard {
    display: flex;
    align-items: center;
    border: 2px solid #bebebe;
    font-family: var(--font-global);
    color: var(--color-font-primary);
    border-radius: 30px;
    margin-bottom: 5px;
    margin-top: 5px;
    width: 90vw;
  }

  .logo {
    height: 3vh;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  h1 {
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  h2 {
    height: 3vh;
    right: 20px;
  }
`;
