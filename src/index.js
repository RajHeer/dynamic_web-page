import "./style.css";
import headerWithNav from "./header";

function component() {

    const main = document.createElement("main");
    
    main.appendChild( headerWithNav() );
    
    return main;
  }
  
  document.body.appendChild(component());
