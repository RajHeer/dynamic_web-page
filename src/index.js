import "./style.css";
import headerWithNav from "./header";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

function component() {

    const main = document.createElement("main");
    
    main.appendChild( headerWithNav() );
    
    return main;
  }
  
  document.body.appendChild(component());
  