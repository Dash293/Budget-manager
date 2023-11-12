import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;

  .activityCard {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-icons-font);
    font-family: var(--font-global);
    color: var(--color-font-primary);
    border-radius: 30px;
    margin-bottom: 1rem;
    width: 90vw;
  }

  .informations {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo {
    height: 3vh;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .amount {
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (min-width: 700px) {
    width: 50vw;
  }
`;
