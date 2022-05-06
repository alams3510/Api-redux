import { createRoot } from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
// import App from "./App";
import Container from "./container/container";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Container />
  </Provider>
);
