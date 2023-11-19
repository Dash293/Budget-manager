import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;

  .activityCardSection1 {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-icons-font);
    font-family: var(--font-global);
    color: var(--color-font-primary);
    border-radius: 30px;
    width: 70vw;
    height: 50vh;
  }

  .activityCardSection2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 10vw;
    margin-top: 3rem;
  }

  .activityCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-global);
    color: var(--color-font-primary);
    border-radius: 30px;
    margin-bottom: 0.5rem;
    width: 70vw;
    height: 30vh;
  }

  .informations {
    width: 100%;
  }

  .logo {
    height: 3vh;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .name {
    margin-top: 0.5rem;
  }

  .amount {
    margin-top: 0.5rem;
  }

  .date {
    margin-top: 0.5rem;
  }

  .remove {
    padding: 12px 20px;
    background-color: #780bec;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      background-color: #5e00ae;
    }
  }

  .note {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 700px) {
    width: 50vw;
  }
`;
