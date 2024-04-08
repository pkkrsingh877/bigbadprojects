// This tween will rotate an element with a class of .my-element
gsap.to('#MPF-btn', {
    rotation: 360,
    duration: 1,
    ease: 'bounce.out'
});

let yourMagicPower;

let comments;
comments = document.getElementById('commentary');

let retryIt = document.getElementById('retry-btn');
retryIt.style.display = "none";


document.getElementById('MPF-btn').onclick = function findMP() {

    // Animate the text when it appears
    gsap.from('#commentary', { opacity: 0, duration: 1, y: 20, ease: 'power2.out' });
    gsap.from('#MPF-btn', { opacity: 0, duration: 1, y: 20, ease: 'power2.out' });
    document.getElementById('MPF-btn').innerText = "Found!";
    document.getElementById('commentary').style = "display: block; padding: 1rem;";
    document.getElementById('MP').style = "display: block; padding: 1rem;";


    yourMagicPower = Math.floor(Math.random() * 9999);

    document.querySelector('#MP').innerHTML = "Your Magic Power is " + yourMagicPower;
    gsap.from("#MP", { opacity: 0, duration: 1, y: 20, ease: 'power2.out' });

    if (yourMagicPower <= 9999 && yourMagicPower >= 9001) {
        comments.innerText = "Nappa: Vegeta, What's his Power Level\n Vegeta: It's Over 9000!\nNappa: What's O-Over 9000! That can't be right. The scouter must be malfunctioning";
    } else if (yourMagicPower <= 9000 && yourMagicPower >= 8544) {
        comments.innerText = "Over 8544! Unbelievable!\nThat's a wack!\nYou are stronger that the wizard saint Jura!"
    } else if (yourMagicPower < 8544 && yourMagicPower >= 3825) {
        comments.innerText = "O-Over 3000?!\nWha...?!\nWhat the hell is that?!\nWow...\nI've never seen a score like that, even in my corps!"
    } else if (yourMagicPower < 3825 && yourMagicPower >= 365) {
        comments.innerText = "This is a high score.\nHigh enough to make someone a captain of Rune Knights.";
    } else if (yourMagicPower < 365 && yourMagicPower >= 124) {
        comments.innerText = "Seems a little low!"
    } else if (yourMagicPower < 124 && yourMagicPower >= 95) {
        comments.innerText = "This is terrible...\nIs this what we get for believing in you?"
    } else if (yourMagicPower < 95 && yourMagicPower >= 4) {
        comments.innerText = "What the...?!\nYour magic power is 4!"
    } else {
        comments.innerText = "I-I don't know what to say.\nI mean your magic power is so freaking low that there isn't much I can say about it."
    }


    retryIt.style.display = "block";

    //Let's disable the "Found!" button

    document.getElementById("MPF-btn").disabled = true;

}



document.getElementById('retry-btn').onclick = function redo() {
    retryIt.style.display = "none";
    document.getElementById('MPF-btn').innerText = "Find it!";

    // Let's hide the comments

    document.getElementById('commentary').style.display = "none";

    //let's hide the MP value

    document.getElementById('MP').style.display = "none";

    // let's reenable the "Found!" button

    document.getElementById("MPF-btn").disabled = false;
}

