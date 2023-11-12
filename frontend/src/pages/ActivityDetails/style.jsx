import styled from "styled-components";

export default styled.main`
  display: flex;
  justify-content: center; // Centrer horizontalement
  align-items: center; // Centrer verticalement
  height: 81vh; // S'assurer que la hauteur du parent est suffisante pour permettre le centrage vertical
  width: 100vw;
  background-color: var(--color-bg-primary);

  @media screen and (min-width: 700px) {
    // Styles pour les écrans plus larges, si nécessaire
  }
`;
