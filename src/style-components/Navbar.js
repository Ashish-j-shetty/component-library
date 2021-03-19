import styled from "styled-components";
import { Content } from "./index";

export const Navbar = styled(Content)`
  padding-left: 2rem;
  background-color: ${(props) => props.theme.colors.lightGray};
`;
