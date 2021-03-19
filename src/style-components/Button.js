import styled, { css } from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
  outline: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;

  ${({ variant, theme }) =>
    theme.buttonVariants[variant] &&
    css`
      background-color: ${theme.buttonVariants[variant].backgroundColor};
      border-color: ${theme.buttonVariants[variant].borderColor};
      color: ${theme.buttonVariants[variant].color};
    `};

  ${({ outline, theme }) =>
    theme.buttonVariants[outline] &&
    css`
      background-color: ${theme.buttonVariants[outline].color};
      border-color: ${theme.buttonVariants[outline].borderColor};
      color: ${theme.buttonVariants[outline].backgroundColor};
    `}
`;

export const GradientButton = styled(Button)`
  background-color: ${(props) =>
    props.theme.gradientButton.red.backgroundColor};
  background-image: ${(props) => props.theme.gradientButton.red.backgroundImg};
  color: ${(props) => props.theme.gradientButton.red.color};
`;
