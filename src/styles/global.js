import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: Inter, sans-serif;
  line-height: 1.5;
  font-size: 62.5%;
  scroll-behavior: smooth;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  --site-background:#F7F7FA;
  --component-background:#000;
  --menu-mob-background:#1c1c1c;
  --button-background:#41873f;


  --txt-one:#FFFFFF;
  --txt-two:#C4C4C4C4;
  --txt-footer:#718096;


  --txt-title-one:#1A202C;
  --txt-title-two:#41873F;
  --txt-title-three:#FFFFFF;
  --txt-title-four:#E7DAED;
  --border-card:#41873F;

}


body{
  font-size: 1.6rem;
  background-color: var(--site-background);
  height: 100%;
  width: 100%;
}


`