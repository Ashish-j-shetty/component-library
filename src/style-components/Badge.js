import styled from "styled-components";

import { Cart3 } from "@styled-icons/bootstrap/Cart3";
import { BadgeSpan } from "./Span";
import { Heart } from "@styled-icons/bootstrap/Heart";

const CartIcon = styled(Cart3)`
  &:focus {
    outline: none;
  }
`;

const HeartIcon = styled(Heart)`
  &:focus {
    outline: none;
  }
`;

export const Badge = styled.button`
  position: relative;
  width: 2rem;
  margin-top: ${({ mt }) => mt};
  padding: 0;
  border: none;
  background-color: inherit;

  &:focus {
    outline: none;
  }
`;

export function CartButton({ mt = "1rem", children }) {
  return (
    <Badge mt={mt}>
      <CartIcon />
      <BadgeSpan>{children}</BadgeSpan>
    </Badge>
  );
}

export function HeartButton({ mt, children }) {
  return (
    <Badge mt={mt}>
      <HeartIcon />
      <BadgeSpan>{children}</BadgeSpan>
    </Badge>
  );
}
