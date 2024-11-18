var btnQoute = document.getElementById("btnNewQoute");
var pContainer = document.getElementById("quoteCont");
var saidContainer = document.getElementById("saidCont");
var containerQuote = [
    {
        qoute: "Resentment is like drinking poison and waiting for your enemies to die.",
        saidName: "--Nelson Mandela",
    },
    {
        qoute: "The best revenge is massive success.",
        saidName: "--Frank Sinatra",
    },
    {
        qoute: "It's not what happens to you, but how you react to it that matters.",
        saidName: "--Epictetus",
    },
    {
        qoute: "You miss 100% of the shots you don't take.",
        saidName: "--Wayne Gretzy",
    },
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        saidName: "--Elbert Hubbard",
    },
];
var lastRandom = 0;

function getRndIntNumber(min, max) {
    var random;
    do {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (random === lastRandom);
    lastRandom = random;
    return random;
}
function rondumQuote(container) {
    var containerLength = container.length - 1;
    var randomNumber = getRndIntNumber(0, containerLength);

    pContainer.innerHTML = `"${container[randomNumber].qoute}"`;
    saidContainer.innerHTML = container[randomNumber].saidName;
}

btnQoute.addEventListener("click", function () {
    rondumQuote(containerQuote);
});
