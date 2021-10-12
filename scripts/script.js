let generateQuoteButton = document.querySelector('.generate-qoute');
let quoteText =  document.querySelector('.random-quote-text');
let quoteAuthor =  document.querySelector('.quote-author');
let quoteAuthorBlock = document.querySelector(".quote-author-block");
let body = document.querySelector(".body");
let main = document.querySelector(".main");
let heraldry = document.querySelector(".house-shield");
let twitterBtn =document.querySelector(".twitter");
document.addEventListener('DOMContentLoaded', function(){
    setTimeout(()=> {
        dataFetch();
    }, 1500)
 })
generateQuoteButton.addEventListener('click', () => {
    quoteText.style.opacity = 0;
    quoteAuthorBlock.style.opacity = 0;
    setTimeout(()=> dataFetch(), 400)
})
function dataFetch() {
    fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
    .then( data =>  data.json())
    .then(quoteObj => {
        console.log(quoteObj)
        console.log(quoteObj.character.house.slug)
        quoteText.innerHTML = quoteObj.sentence;
        quoteAuthor.innerHTML = '-' + quoteObj.character.name;
        twitterBtn.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + `"${quoteObj.sentence}" ${quoteObj.character.name}`
        switch(quoteObj.character.house.slug) {
            case "stark": heraldry.src = "./sources/stark.png";
            break;
            case "lannister": heraldry.src = "./sources/lannister.png";
            break;
            case "bolton": heraldry.src = "./sources/bolton.png";
            break;
            case "tarth": heraldry.src = "./sources/tarth.png";
            break;
            case "baelish": heraldry.src = "./sources/baelish.png";
            break;
            case "tyrell": heraldry.src = "./sources/tyrell.png";
            break;
            case "greyjoy": heraldry.src = "./sources/greyjoy.png";
            break;
            case null: heraldry.src = "./sources/null.png";
            break;
            case "targaryen": heraldry.src = "./sources/targaryen.png";
            break;
            case "baratheon": heraldry.src = "./sources/baratheon.png";
            break;
            case "tarly": heraldry.src = "./sources/tarly.png";
            break;
        }
        quoteText.style.opacity = 1;
        quoteAuthorBlock.style.opacity = 1;
    })
    let randomColor = randomColorFunc();
    body.style.color = randomColor;
    body.style.backgroundColor = randomColor;
    generateQuoteButton.style.backgroundColor = randomColor;
    generateQuoteButton.style.borderColor = randomColor;
}
function randomColorFunc() {
    let colorArray = ["#4F345A", "#3B413C", "#0D090A", "#361F27", "#521945", "#023436", "#037971", 
                        "#312F2F", "#1E2749", "#131515", "#0B3948", "#545F66", "#5E0035", "#2F195F",
                         "#0F1020", "#00100B", "#0E0E52", "#08605F", "#413C58", "#2A6041", "#69353F", "#563635",];
          console.log(colorArray[Math.floor(Math.random() * colorArray.length)])
    return colorArray[Math.floor(Math.random() * colorArray.length)] 
}