import { AlertComponent } from "./components";
import { ButtonComponent } from "./components/ButtonComponent";

export const routes = [
  {
    path: "/Alert",
    exact: true,

    main: () => <AlertComponent />,
  },
  {
    path: "/Button",

    main: () => <ButtonComponent />,
  },
  {
    path: "/Badges",

    main: () => <h2>Shoelaces</h2>,
  },
];
