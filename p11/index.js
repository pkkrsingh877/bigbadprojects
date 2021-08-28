//creating a constructor
function Task(title, description) {
    this.title = title;
    this.description = description;
};

let title = document.getElementById('title');
let description = document.getElementById('description');
const add = document.getElementById('add');

let taskDisplay = document.getElementById('taskDisplay');
let descriptionDisplay = document.getElementById('descriptionDisplay');


const objArr = [];
let i = 0; //iterator
add.addEventListener('click', () => {
    try {
        console.log("The button was clicked")
        objArr.push(newTask());
        localStorage.setItem(objArr[i].title, objArr[i].description);
        // titleDisplay.textContent = objArr[i].title;
        // descriptionDisplay.textContent = objArr[i].description;
        let newCard = document.createElement('div');
        newCard.className = 'card';
        document.getElementsByTagName('main')[0].appendChild(newCard);
        newCard.textContent(objArr[i].title);
        newCard.createTextNode(objArr[i].description);
        i++;
    } catch {
        console.log("the button was clicked but event was not fired")
    }
})


const newTask = () => {
    let t1 = new Task(title.value, description.value);
    return t1;
}


//clearAll functionality

const clearAll = document.getElementById('clearAll');
clearAll.addEventListener('click', () => {
    localStorage.clear();
})