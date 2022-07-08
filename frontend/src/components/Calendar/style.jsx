import styled from "styled-components";

export default styled.section`
  height: 15vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-global);

  .calendar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    border: solid 2px #bebebe;
    border-radius: 30px;
  }

  button {
    color: var(--color-font-primary);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
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
`;
