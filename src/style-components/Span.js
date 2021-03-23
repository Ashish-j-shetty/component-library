import styled from "styled-components";

export const Span = styled.span`
  margin: 0.2rem;
`;

export const BadgeSpan = styled.span`
  height: 1.2rem;

  display: flex;
  padding: 0 6px;
  color: white;
  z-index: 1;
  font-size: 0.75rem;
  min-width: 1.2rem;
  box-sizing: border-box;

  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1;

  align-content: center;
  border-radius: 10px;

  flex-direction: row;
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  background-image: ${(props) => props.theme.gradientButton.red.backgroundImg};
  border-radius: 50%;
`;
