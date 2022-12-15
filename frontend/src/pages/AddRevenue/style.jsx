import styled from "styled-components";

export default styled.main`
  background-color: var(--color-bg-primary);
  height: 80vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-global);
  color: white;

  .typeButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;
    box-sizing: border-box;
    margin-top: 1rem;
  }

  .formTypeButton {
    height: 3vh;
    width: 35vw;
  }

  .line-1 {
    height: 1px;
    background: var(--color-icons-font);
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .form {
    height: 100%;
    width: 100%;
  }

  .selectInput {
    color: var(--color-bg-primary);
    border-radius: 10px;
    border: solid 2px #bebebe;
    text-align: center;
    width: 35%;
  }

  .category {
    display: flex;
    align-items: center;
    height: 10%;
    box-sizing: border-box;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .calendarInput {
    color: var(--color-bg-primary);
    border-radius: 10px;
    border: solid 2px #bebebe;
    text-align: center;
    width: 35%;
  }

  .Icons {
    height: 2rem;
    margin-right: 1rem;
  }

  .date {
    display: flex;
    align-items: center;
    height: 10%;
    box-sizing: border-box;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .note {
    display: flex;
    align-items: center;
    height: 10%;
    box-sizing: border-box;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .noteInput {
    border-radius: 10px;
    border: solid 2px #bebebe;
    width: 60%;
    text-align: center;
  }

  .repeat {
    display: flex;
    align-items: center;
    height: 10%;
    box-sizing: border-box;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .repeatInput {
    margin-left: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
  }

  .amount {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    display: flex;
    box-sizing: border-box;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .amountInput {
    color: var(--color-bg-primary);
    text-align: center;
    border-radius: 10px;
    border: solid 2px #bebebe;
    height: 50%;
    width: 25%;
  }

  .submitContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;
    box-sizing: border-box;
    margin-top: 2.8rem;
    margin-bottom: 2.8rem;
  }

  button {
    color: var(--color-font-secondary);
    background-color: var(--color-button);
    border: none;
    cursor: pointer;
    border-radius: 20px;
  }

  .submitButton {
    font-size: 1rem;
    height: 8vh;
    width: 40vw;
  }

  @media screen and (min-width: 700px) {
    height: 81vh;
  }
`;
