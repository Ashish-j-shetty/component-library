import { AlertComponent, BadgeComponent } from "./components";
import { ButtonComponent } from "./components/ButtonComponent";
import { CardComponent } from "./components/CardComponent";

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

    main: () => <BadgeComponent />,
  },
  {
    path: "/Cards",

    main: () => <CardComponent />,
  },
];
