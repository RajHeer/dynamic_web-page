export default function aboutSection() {
    const sectionAbout = document.createElement('section');
    const h2 = document.createElement('h2');
    const article = document.createElement('article');
    const p = document.createElement('p');
    const blockquote = document.createElement('blockquote');

    h2.innerText = "About Mos Eisley Cantina (AKA Chalmun's Cantina)";

    p.innerText = 
    `"Leave your droids outside. You don't want Wuher on your case."
    "Keep your blaster holstered! Why ask for trouble?"
    "Find an empty table or barstool. Crowding other customers will only end in tears."
    "Be friendly. Buy a drink for your neighbor at the bar."
    "Applaud the band—even if they're way off-key!"
    "Make pleasant conversation and try to laugh at bad jokes."
    "Tip the bartender, especially if you make a mess."`;

    blockquote.innerText = "―Mos Eisley Cantina house rules[1]";

    p.appendChild(blockquote);
    article.appendChild(p);

    sectionAbout.appendChild(h2);
    sectionAbout.appendChild(article);

    return sectionAbout;
}
