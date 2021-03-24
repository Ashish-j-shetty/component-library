import { AlertComponent, BadgeComponent } from "./components";
import { ButtonComponent } from "./components/ButtonComponent";
import { CardComponent } from "./components/CardComponent";
import HomeComponent from "./components/Home";

export const routes = [
  {
    path: "/",
    exact: true,

    main: () => <HomeComponent />,
  },

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
