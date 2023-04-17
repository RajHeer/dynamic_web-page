export default function aboutSection() {
    const sectionAbout = document.createElement("section");
    const h2 = document.createElement("h2");
    const article = document.createElement("article");
    const p = document.createElement("p");
    const blockquote = document.createElement("blockquote");

    h2.innerText = "About Mos Eisley Cantina (AKA Chalmun's Cantina)";

    const quotes = [ 
        `"Leave your droids outside. You don't want Wuher on your case."`,
        `"Keep your blaster holstered! Why ask for trouble?"`,
        `"Find an empty table or barstool. Crowding other customers will only end in tears."`,
        `"Be friendly. Buy a drink for your neighbor at the bar."`,
        `"Applaud the band—even if they're way off-key!"`,
        `"Make pleasant conversation and try to laugh at bad jokes."`,
        `"Tip the bartender, especially if you make a mess."`
    ]
    quotes.forEach(quote => {
        const p = document.createElement("p");
        p.innerText = quote;
        article.appendChild(p);
    });

    blockquote.innerText = "―Mos Eisley Cantina house rules";

    article.appendChild(p);
    article.appendChild(blockquote);

    sectionAbout.appendChild(h2);
    sectionAbout.appendChild(article);

    return sectionAbout;
}
