import { lazy } from "react";

const DefaultLayout = lazy(() => import("../layout/defaultLayout"));
const Financial = lazy(() => import("./settings"));
const About = lazy(() => import("./about"));

export { DefaultLayout, Financial, About };
