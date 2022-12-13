import styled from "styled-components";

export default styled.main`
  background-color: var(--color-bg-primary);
  height: 80vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-global);

  .calendar {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    width: 70vw;
    border: solid 2px #bebebe;
    border-radius: 30px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .monthAndYear {
    color: white;
  }

  .nextIcon {
    height: 3rem;
  }

  .previousIcon {
    height: 3rem;
  }

  button {
    color: var(--color-font-primary);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 700px) {
    height: 81vh;

    .calendar {
      width: 20vw;
    }
  }
`;
