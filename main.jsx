import MyReact from "./main.js";

const element = <h1 title="foo">UPDATE!!</h1>;

const container = document.getElementById("root");
MyReact.render(element, container);
