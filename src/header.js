export default function headerWithNav() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const nav = document.createElement("nav");

    h1.innerText = "Mos Eisely Cantina";
    
    // CREATE NAV TABS
    const divAbout = document.createElement("div");
    divAbout.innerText = "ABOUT";
    const divMenu = document.createElement("div");
    divMenu.innerText = "MENU";
    const divContact = document.createElement("div");
    divContact.innerText = "CONTACT";

    // APPEND ELEMENTS
    nav.appendChild(divAbout);
    nav.appendChild(divMenu);
    nav.appendChild(divContact);

    header.appendChild(h1);
    header.appendChild(nav);

    // ADD LISTENERS
    const divs = nav.querySelectorAll("div");
    divs.forEach(div => {
        div.addEventListener("click", (e) =>{
            console.log(e.target.innerText);
        })
    });
    
    return header;
}
