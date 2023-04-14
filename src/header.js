export default function headerWithNav() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    const divAbout = document.createElement('div');
    divAbout.innerText = "ABOUT";
    const divMenu = document.createElement('div');
    divMenu.innerText = "MENU";
    const divContact = document.createElement('div');
    divContact.innerText = "MENU";

    nav.appendChild(divAbout);
    nav.appendChild(divMenu);
    nav.appendChild(divContact);

    header.appendChild(nav);
    
    return header;
}
