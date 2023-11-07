import { menu } from "./menu.js";
import { port } from "./port.js";
import { smooth } from "./smooth.js";
import { link } from "./link.js";

window.addEventListener("load", function () {
    menu();
    port();
    smooth();
    link();
});