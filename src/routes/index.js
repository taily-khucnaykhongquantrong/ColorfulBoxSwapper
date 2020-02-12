import Home from "./Home";
import NotFoundPage from "./404";
import Generate from "./Generate";

const routes = [
  {
    path: "/",
    action: Home,
  },
  {
    path: "/generate",
    action: Generate,
  },
  {
    path: "(.*)",
    action: NotFoundPage,
  },
];

export default routes;
