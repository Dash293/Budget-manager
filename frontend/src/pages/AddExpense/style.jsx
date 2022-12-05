import styled from "styled-components";

export default styled.main`
  background-color: var(--color-bg-primary);
  height: 80vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-global);
  color: white;

  .title {
    color: var(--color-font-primary);
    margin-bottom: 2rem;
  }

  .form {
    height: 100%;
    width: 80%;
  }

  .revenueOrExpense {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .category {
    margin-bottom: 1rem;
  }

  .date {
    margin-bottom: 1rem;
  }

  .note {
    margin-bottom: 1rem;
  }

  .repeat {
    margin-bottom: 1rem;
  }

  .amount {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  .submit {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 700px) {
    height: 81vh;
  }
`;
