export default function menuSection() {
    const sectionMenu = document.createElement("section");
    const h2 = document.createElement("h2");
    const article = document.createElement("article");
    const p = document.createElement("p");
    const ul = document.createElement("ul");

    h2.innerText = "Libations and culnary delights";

    p.innerText = "The following may or may not be available at management's discretion (who whole-hearted reserve the right to amend pricing as required):"

    const menuItems = [
        "Colo Claw Fish",
        "Roasted Porg",
        "Moof milk",
        "Meiloorun Fruit"
    ];
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    })

    p.appendChild(ul);
    article.appendChild(p);

    sectionMenu.appendChild(h2);
    sectionMenu.appendChild(article);
    
    return sectionMenu;
}
