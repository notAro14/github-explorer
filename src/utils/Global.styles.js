import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  background-color: tomato;
}
`;
