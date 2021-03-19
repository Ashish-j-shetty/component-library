import styled from "styled-components";

export const Header = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.secondary ? props.theme.colors.secondaryColor : "white"};

  border-bottom: 1px solid black;
`;
