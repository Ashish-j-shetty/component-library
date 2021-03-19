import styled, { css } from "styled-components";
import { Div } from "./Container";

export const Alert = styled(Div)`
  display: block;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: opacity 0.15s linear;

  ${({ variant, theme }) =>
    theme.alertVariants[variant] &&
    css`
      background-color: ${theme.alertVariants[variant].backgroundColor};
      border-color: ${theme.alertVariants[variant].borderColor};
      color: ${theme.alertVariants[variant].color};
    `}
`;
