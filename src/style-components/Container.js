import styled from "styled-components";

export const Div = styled.div`
  margin-top: 1rem;
  flex-basis: ${({ width }) => (width ? width : "auto")};

  background-color: ${({ body }) => body && "black"};
`;

export const Container = styled(Div)`
  display: flex;
`;
