import renderer, { tsx } from "@dojo/framework/core/vdom";
import App from "./App";

const domNode = document.getElementById("app") as HTMLElement;
const r = renderer(() => <App />);
r.mount({ domNode });
