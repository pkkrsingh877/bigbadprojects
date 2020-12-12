const quote = ["\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" -Nelson Mandela",
               "\"The way to get started is to quit talking and begin doing.\" -Walt Disney",
               "\"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\" -Steve Jobs",
               "\"If life were predictable it would cease to be life, and be without flavor.\" -Eleanor Roosevelt",
               "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\" -James Cameron",
               "\"Life is what happens when you're busy making other plans.\" -John Lennon",
               "\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\" -Benjamin Franklin",
               "\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\" -Helen Keller",
               "\"It is during our darkest moments that we must focus to see the light.\" -Aristotle",
               "\"Whoever is happy will make others happy too.\" -Anne Frank",
               "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\" -Mother Teresa",
               "\"When you reach the end of your rope, tie a knot in it and hang on.\" -Franklin D. Roosevelt",
               "\"Happiness is when what you think, what you say, and what you do are in harmony.\" -Mahatma Gandhi",
               "\"An eye for eye only ends up making the whole world blind.\" -Mahatma Gandhi",
               "\"Where there is love there is life.\" -Mahatma Gandhi",
              ];

let generatedQuote;

document.getElementById('res-btn').style.display = "none";

document.getElementById('gen-btn').onclick = function generateQuote() {
    generatedQuote = quote[Math.floor(Math.random()*quote.length)];

    document.getElementById('gen-quote').innerText = generatedQuote;

    document.getElementById('gen-quote').style.display = "block";

    document.getElementById('res-btn').style.display = "block";

    document.getElementById('gen-btn').disabled = true;
}   

document.getElementById('res-btn').onclick = function removeQuote() {

    document.getElementById('gen-quote').style.display = "none";

    document.getElementById('res-btn').style.display = "none";

    document.getElementById('gen-btn').disabled = false;
}  


// code for dark and normal mode
document.getElementById('normal-mode').style.display = "none";

document.getElementById('dark-mode').onclick = function enableDarkMode() {
    document.getElementsByTagName('body')[0].style.backgroundColor = "black";

    document.getElementById('dark-mode').disabled = true;

    document.getElementById('normal-mode').style.display = "block";
}

document.getElementById('normal-mode').onclick = function enableNormalMode() {
    document.getElementsByTagName('body')[0].style.backgroundColor = "orangered";

    document.getElementById('dark-mode').disabled = false;

    document.getElementById('normal-mode').style.display = "none";
}



