let insultArr = ["You are a blockhead!",
                 "You are a dumbass!",
                 "You are an idiot!",
                 "You are pansy!",
                 "Stupid bastard!",
                 "Think you are a know-it-all, get out of here!",
                 "Your idocy knows no bounds!",
                 "Baldy!"];

let randomInsult;

document.getElementById("name").style.display = "none";
document.getElementById("genderId").style.display = "none";

document.getElementById("reset-btn").style.display = "none";

document.getElementById("gen-btn").onclick = function generateInsult() {
    randomInsult = insultArr[Math.floor(Math.random()*insultArr.length)];
    document.getElementById("display-insult").innerText = randomInsult;
    document.getElementById("display-insult").style.display = "block";
    document.getElementById("reset-btn").style.display = "block";
}

document.getElementById("reset-btn").onclick = function reset() {
    document.getElementById("display-insult").style.display = "none";
    document.getElementById("reset-btn").style.display = "none";
}

