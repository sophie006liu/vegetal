import { gameData } from 'https://github.com/sophie006liu/vegetal/blob/sophie/home_page/js/gameData.js';

const personalities = { 
    "Onion": 0,
    "Broccoli": 0,
    "Corn": 0,
    "Garlic": 0, // The Leader
    "Jalapeno": 0, // The Adventurer
    "Kale": 0, // The Analyst
    "Green Beans": 0, // The Connector
    "Sweet Potato": 0, // The Caregiver
    "Carrot": 0, // The Visionary
    "Pumpkin": 0, // The Maverick
    "Potato": 0, // The Realist
    "Pumpkin": 0, // The Sage
    "Napa Cabbage": 0, // The Harmonizer
    "Bok Choy": 0, // The Performer
    "Okra": 0 // The Investigator
};

let currentState = 1;

function renderState(state) {
    console.log("b");
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    storyText.textContent = gameData[state].text;
    storyImage.src = "images/placeholder.png";
    choicesContainer.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
        choicesContainer.appendChild(button);
    }
}

function changeState(newState, selectedPersonalities) { 
    console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}

function revealMostSelectedVegetable() {
    console.log("calculating fate");
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }
    console.log(maxVeggie);
    const storyText = document.getElementById('story-text');
    storyText.textContent = `You are a ${maxVeggie}`;
    document.getElementById('choices').style.display = 'none';
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}