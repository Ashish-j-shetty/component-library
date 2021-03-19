import React from "react";
import { Button, Div, GradientButton, Span } from "../style-components";

export function ButtonComponent() {
  const variants = ["primary", "light", "dark", "warning", "success", "danger"];
  return (
    <Div>
      <h2>Button Component</h2>
      <Div>
        {variants.map((variant, idx) => (
          <Span key={idx}>
            <Button variant={variant}>{variant} button</Button>
          </Span>
        ))}
      </Div>
      <h2 style={{ marginTop: "3rem" }}>Outline buttons</h2>
      <Div>
        {variants.map((variant, idx) => (
          <Span key={idx}>
            <Button outline={variant}>{variant} button</Button>
          </Span>
        ))}
      </Div>

      <h2 style={{ marginTop: "3rem" }}>Gradient button</h2>
      <Div>
        <Span>
          <GradientButton>Cool button</GradientButton>
        </Span>
      </Div>
    </Div>
  );
}
