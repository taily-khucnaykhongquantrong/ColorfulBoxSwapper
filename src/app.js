import ReactDOM from "react-dom";
import UniversalRouter from "universal-router";

import routes from "./routes";
import history from "./history";

// Global import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("app");
const options = {
  // Customize the way to resolve route
  resolveRoute(context, params) {
    if (typeof context.route.action === "function") {
      return context.route.action(context, params);
    }
    return undefined;
  },
};
const router = new UniversalRouter(routes, options);

const renderRoutes = ({ title, component }) => {
  ReactDOM.render(component, container, () => {
    document.title = title;
  });
};

const render = location => {
  router
    .resolve({ pathname: location.pathname })
    .then(result => {
      if (result.redirect) {
        history.replace(result.redirect);
      } else {
        renderRoutes(result);
      }
    })
    .catch(error => console.error(error));
};

render(history.location);
history.listen(render);
