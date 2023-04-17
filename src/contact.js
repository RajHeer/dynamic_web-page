export default function contactSection() {
    const sectionContact = document.createElement("section");
    const h2 = document.createElement("h2");
    const article = document.createElement("article");
    const p = document.createElement("p");

    h2.innerText = "Contact and communications";

    p.innerText = "Don't bother. We'll call you. Or shoot..."

    article.appendChild(p);

    sectionContact.appendChild(h2);
    sectionContact.appendChild(article);
    
    return sectionContact;
}
