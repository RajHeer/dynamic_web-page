import "./style.css";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

function component() {
    // CREATE ELEMENTS//
    const main = document.createElement("main");
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    // ADD CLASS
    main.appendChild(header);
    header.appendChild(nav);

    nav.appendChild( about() );
    nav.appendChild( menu() );
    nav.appendChild( contact() );
    
    return main;
  }
  
  document.body.appendChild(component());