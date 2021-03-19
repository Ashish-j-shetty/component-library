import React from "react";
import { Alert, Div } from "../style-components";

export function AlertComponent() {
  return (
    <Div>
      <h2>Alert Componets</h2>

      <Div width="30%">
        {["primary", "warning", "danger", "light", "dark", "success"].map(
          (variant, idx) => (
            <Alert variant={variant} key={idx}>
              This is a {variant} alert
            </Alert>
          )
        )}
      </Div>
    </Div>
  );
}
