import about from "./about";
import menu from "./menu";
import contact from "./contact";

export default function headerWithNav() {
    
    const modules = {
        about: about(),
        menu: menu(),
        contact: contact()
    };

    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const nav = document.createElement("nav");
    

    h1.innerText = "Mos Eisely Cantina";
    
    // CREATE NAV TABS
    const divAbout = document.createElement("div");
    divAbout.setAttribute("id", "about")
    divAbout.innerText = "ABOUT";

    const divMenu = document.createElement("div");
    divMenu.setAttribute("id", "menu")
    divMenu.innerText = "MENU";

    const divContact = document.createElement("div");
    divContact.setAttribute("id", "contact")
    divContact.innerText = "CONTACT";

    // APPEND ELEMENTS TO NAV
    nav.appendChild(divAbout);
    nav.appendChild(divMenu);
    nav.appendChild(divContact);

    header.appendChild(h1);
    header.appendChild(nav);

    // ADD LISTENERS TO APPEND SECTIONS
    const divs = nav.querySelectorAll("div");
    divs.forEach(div => {
        div.addEventListener("click", (e) =>{
            if ( document.querySelector("section") != null ) {
                const section = document.querySelector("section");
                section.remove();
            }
            document.body.appendChild( modules[e.target.id] );
        })
    });
    
    return header;
}
