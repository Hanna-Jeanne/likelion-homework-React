import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import Wrapper from "./wrapper";

const root = document.getElementById("components");

ReactDOM.createRoot(root).render(React.createElement(Wrapper));
