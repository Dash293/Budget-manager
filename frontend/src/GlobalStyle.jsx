import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-bg-primary: #111010;
  --color-bg-secondary: #292f34;
  --color-bg-header-nav: linear-gradient(160deg, #9866ce,#843fce, #780bec);
  --color-button: #780bec;
  --color-icons-font: #bebebe;
  --color-font-primary: #e9eaea;
  --color-font-secondary: #ffffff; //for purple background 
  --color-gauge: #77cab2;
  --font-global: 'Poppins', sans-serif;
}
 `;
export default GlobalStyle;
