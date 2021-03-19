import styled from "styled-components";

export const Content = styled.div`
  margin-top: 0.2rem;

  background-color: ${(props) => props.bgcolor && props.theme.colors.bgColor};
`;

export const Div = styled.div`
  padding-left: ${({ pl }) => pl};
  width: ${(props) => props.width && props.width};
`;

Div.defaultProps = {
  pl: 0,
  width: "100%",
};

export const Container = styled(Content)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0.2rem;
`;
