const personalities = { 
    "Onion": 0, // The Innovator
    "Broccoli": 0, // The Strategist
    "Corn": 0, // The Empath
    "Garlic": 0, // The Leader
    "Jalapeno": 0, // The Adventurer
    "Kale": 0, // The Analyst
    "Green Beans": 0, // The Connector
    "Sweet Potato": 0, // The Caregiver
    "Carrot": 0, // The Visionary
    "Lotus Root": 0, // The Organizer
    "Bitter melon": 0, // The Maverick
    "Potato": 0, // The Realist
    "Pumpkin": 0, // The Sage
    "Napa Cabbage": 0, // The Harmonizer
    "Bok Choy": 0, // The Performer
    "Okra": 0 // The Investigator
};
const gameData = {
    "1": {
        "text": "You and your vegetable friends want to plan a hangout in VeggieVille. What snacks are you bringing?",
        "choices": {
            "Beef sticks": [2,["Jalapeno","Bitter Melon","Performer","Bok Choy"]],
            "Granola": [2,["Broccoli", "Kale", "Sage","Pumpkin", "Sweet Potato"]],
            "Cucumbers and carrots": [2,["Onion", "Potato", "Jalapeno", "Lotus Root", "Okra"]],
            "Crackers and cheese": [2, ["Green Beans", "Carrot", "Corn"]]
        }
    },
    "2": {
        "text": "Where are you guys going to go?",
        "choices": {
            "The beach": [3,["Onion", "Corn", "Green Beans", "Bok Choy"]],
            "A cute book store": [3, ["Broccoli", "Kale","Pumpkin","Okra", "Carrot"]],
            "Your friend's apartment": [3, ["Sweet Potato", "Lotus Root", "Potato", "Napa Cabbage"]],
            "Mount Evergetable": [3, ["Garlic", "Jalapeno", "Bitter Melon", "Onion"]]
        }
    },
    "3": {
        "text": "After gearing up with sunglasses and sunscreen, what are you going to do?",
        "choices": {
            "Build a sandcastle with your friends!": [0,["Jalapeno", "Lotus Root", "Bitter mellon"]],
            "Set up a beach picnic": [0,["Green Beans", "Bok Choy", "Sweet Potato"]],
            "Explore tide pools and collect shells": [0,["Onion", "Bitter Melon", ]],
            "Read the book you've been eyeing": [0,["Pumpkin", "Broccoli", "Kale"]]
        }
    }, 
    "0" : {

    }
};

let currentState = 1;

function renderState(state) {
    console.log("b");
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');

    storyText.textContent = gameData[state].text;
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
    console.log("changing states");
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
    console.log("e");
    renderState(currentState);
};
