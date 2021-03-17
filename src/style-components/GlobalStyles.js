import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodyColor: "white",
  fontColor: "#111827",
};
export const darkTheme = {
  bodyColor: "#111827",
  fontColor: "#F9FAFB",
};

export const GlobalStyles = createGlobalStyle`

body{
  height:100%;
    margin:0;
    background-color:${(props) => props.theme.bodyColor};
    color:${(props) => props.theme.fontColor};
}

html{
    height:100%;
}
`;
