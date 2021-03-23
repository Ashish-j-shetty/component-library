import styled, { css } from "styled-components";

export const P = styled.p`
  margin: 0.4rem 0.38rem 0 0;

  ${({ bold }) =>
    bold &&
    css`
      font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto,
        Arial, sans-serif;
      font-weight: 600;
    `}

  ${({ stricked }) =>
    stricked &&
    css`
      color: rgb(155, 155, 155);
      text-decoration: line-through;
      font-size: 12px;
    `}

    ${({ colored }) =>
    colored &&
    css`
      color: rgb(255, 50, 120);
      font-size: 14px;
      font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto,
        Arial, sans-serif;
    `}
`;
