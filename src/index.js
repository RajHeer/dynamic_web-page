import './style.css';
import about from "./about";
import menu from "./menu";
import contact from "./contact";

function component() {
    const main = document.createElement('main');
    const header = document.createElement('header');

    main.appendChild(header);
    header.innerText = "HEADER";

    header.appendChild( about() );
    header.appendChild( menu() );
    header.appendChild( contact() );
    
    return main;
  }
  
  document.body.appendChild(component());