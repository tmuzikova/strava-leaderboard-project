import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";

document.querySelector("#root").innerHTML = render(
  <div className="container"></div>
);
