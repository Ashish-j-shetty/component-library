import React from "react";
import { CartButton, Div, HeartButton } from "../style-components";

export function BadgeComponent() {
  return (
    <React.Fragment>
      <h2>Badge Buttons</h2>
      <Div>
        <CartButton mt="4rem">3</CartButton>
      </Div>
      <Div>
        <HeartButton mt="2rem">5</HeartButton>
      </Div>
    </React.Fragment>
  );
}
