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
const gameData = {
    "1": {
        "text": "You and your vegetable friends want to plan a hangout in VeggieVille. What snacks are you bringing?",
        "choices": {
            "Beef sticks": [2,["Jalapeno","Pumpkin","Performer","Bok Choy"]],
            "Granola": [2,["Broccoli", "Sage", "Sweet Potato"]],
            "Cucumbers and carrots": [2,["Potato", "Jalapeno", "Okra"]],
            "Crackers and cheese": [2, ["Green Beans", "Carrot"]]
        }
    },
    "2": {
        "text": " Where are you guys going to go?",
        "choices": {
            "The beach": [3, ["Onion", "Green Beans", "Bok Choy"]],
            "A cute book store": [4,["Broccoli", "Kale","Pumpkin","Okra", "Carrot"]],
            "Your friend's apartment": [5,["Sweet Potato", "Potato", "Napa Cabbage"]],
            "Mount Evergetable": [6, ["Garlic", "Jalapeno", "Pumpkin"]]
        }
    },
    "3": {
        "text": "After gearing up with sunglasses and sunscreen, what are you going to do?",
        "choices": {
            "Build a sandcastle with your friends!": [7,["Jalapeno", "Bitter mellon"]],
            "Set up a beach picnic": [7,["Green Beans", "Bok Choy", "Sweet Potato"]],
            "Explore tide pools and collect shells": [7,["Okra", "Pumpkin", "Carrot"]],
            "Read the book you've been eyeing": [7,["Pumpkin", "Broccoli", "Kale"]],
        }
    },
    "7": {
        "text": "The warmth of the sun bathes you and your veggie friends as you relax on the sandy shore.\\nSuddenly, the sunlight dims, and a large shadow falls over the beach. You look up to see a giant hand reaching down from the sky. Before you can react, the hand scoops you and your friends up, and the world around you spins into a blur.",
        "choices": {
            "Continue": [8,[]]
        }
    },
    "8": {
        "text": "As you and your friends regain consciousness, you realize you're in someone's pantry! Hurry and escape before the human eats you!",
        "choices": {
            "Sprint for the nearby window!": [9,["Jalapeno"]],
            "How about we stealth your way out window instead": [9,["Kale", "Potato"]],
            "One friend suggests jumping down a hole in the backyard, not sure where it goes…": [19, ["Onion", "Carrot"]]
        }
    },
    "9": {
        "text": "You all take a great leap out a window, and now you're in a corn rocket flying through the celestial corn cosmos! You see many buttons and levers around you. Which do you pull/press/fiddle with to go back home?",
        "choices": {
            "The lever that you see in those TV shows that launches them into hyperspace, or whatever they call it": [10,["Bok Choy"]],
            "*Methodically* type random stuff in the hologrpahic keyboard above you, you know what you're doing...": [10, ["Onion"]]
        }
    },
    "10" : {
        "text": "\"Umm I still don't know where we are...\" says one of your friends. What should you guys do next?",
        "choices": {
            "Pull more random levers and press more buttons!": [11,["Jalapeno"]],
            "Look around for a map of the galaxies. There's surely one in the ship right?": [39, ["Okra"]],
            "Stay calm, organize everyone, and discuss next steps": [39,["Garlic"]],
            "Carefully fiddle around to find out what exactly each button and lever does.": [11,["Onion"]]
        }
    },
    "11" : {
        "text": "Just as you are about to press the next questionably random button, a glowing orb appears in front of you. The glistening corn cob yells, \"Stop! Stop! You fools! Ugh. We always get careless travelers like you. Where are you trying to go? I'll take you there for corn's sake.\"",
        "choices": {
            "Thanks": [12,["Potato"]],
            "THANK YOU! You saved us":[12,["Sweet Potato"]],
            "We can handle this ourselves, but thanks": [12, ["Kale"]],
            "Thank you so much! But who are you?": [12,["Onion"]]
        }
    },
    "39" : {
        "text": "After tinkering and reading through a corn shaped rocket manual and map, your team has an idea for what should be the right path of action.",
        "choices": {
            "Full send! VeggieVille here we come": [40,["Jalapeno"]],
            "We should double check...": [40, ["Broccoli"]],
            "Someone else press the button, I can't do it": [40, ["Potato"] ],
            "Let's all press the button together!": [40, ["Napa Cabbage"]]
        }
    },
    "40": {
        "text": "\"Here goes nothing\", Dave the Daikon sighs... You feel time and space warp around you as you travel through galaxies, the stars streaking by in a dazzling display of cosmic light. The ship makes a hard break, and the corn husk doors gently release. You have arrived in VeggieVille. What are you going to now that you're back?",
        "choices" : {
            "Go partying at Club Carrot. Dance the night away and celebrate a long journey!": [13, ["Bok Choy"]],
            "Spend some alone time at your favorite cozy bench/spot. You desperately need this fr": [13, ["Sweet Potato", "Napa Cabbage"]],
            "Organize a Community Welcome Back Picnic with freshly harvested canonical fruits": [13, ["Kale"]],
            "Pick a different hangout place with your friends and debrief what happened and simply enjoy their company": [13, ["Sweet Potato"]]
        }
    },
    "12" : {
        "text": "Right after you respond, the corn does a magical corn twirl on its corn axis, and sparkly effects rush around you. When they dissipate you find yourself back in your hometown, VeggieVille. What are you going to do first now that you're back home in VeggieVille?",
        "choices": {
            "Go partying at Club Carrot. Dance the night away and celebrate a long journey!": [13,["Bok Choy" ]],
            "Spend some alone time at your favorite cozy bench/spot. You desperately need this fr": [13,["Potato"]],
            "Organize a Welcome Back Picnic with freshly harvested canonical fruits to inform your veggie community what happened": [13,["Kale"]],
            "Pick a different hangout place with your friends and debrief what happened and simply enjoy their company": [13,["Sweet Potato"]]
        }
    },
    "4":{
        "text": "You're in the breezy broccoli bookstore filled with books of all genres. What catches your eye first?",
        "choices" : {
            "A whimsical heartwarming children's book.": [15,["Corn", "Sweet Potato"]],
            "Classic vegetable literature, like the Great Gourdsby": [15,["Broccoli"]],
            "Thrilling mystery novel like Sherlettuce Holmes": [15,["Okra", "Carrot"]],
            "A self help book": [15, ["Onion"]]
        }
    },
    "15" :{
        "text": "There are a couple of events going on today at the book store! Which do you go to?",
        "choices" : {
            "Join a book club discussion on the hottest new book": [16,["Green Beans"]],
            "Book scavenger hunt around the store for a free prize":[16,["Jalapeno"]],
            "A creative writing workshop and storytelling event":[16, ["Onion", "Bok Choy"]]     
        }
    },
    "16":{
       "text": "Feeling satisfied and content, you bid farewell to the cozy atmosphere of the bookstore and step outside into the cool evening air. However, as you make your way through the bustling streets of the town, a sudden gust of wind picks up, swirling around you with an unexpected force. Before you can react, you feel yourselves being lifted off the ground, carried away by the wind's mysterious energy.",
       "choices":{
            "Continue": [17,[]]
       } 
    },
    "17": {
        "text": "The world around becomes pitch black, you feel strong gusts of wind wrap around you. When they stop, you still feel a light chilly breeze. All signs point to you and your friends being in a refrigerator. You need to get out ASAP before you get eaten!",
        "choices":{
            "Hide and wait for the refrigerator door to open": [18,["Broccoli"]],
            "Rally the veggie friends to push the door. Everyone roll out!": [18,["Jalapeno", "Bok Choy"]],
            "Try to unplug the refrigerator from the inside": [18, ["Onion"]],
            "Do what the others do": [18,["Potato"]]
        }
    },
    "18": {
        "text": "Miraculously, you made it out the fridge, but now you need to get out of the house back to VeggieLand! What's next?",
        "choices": {
            "Hop on the dog's back!": [19,["Jalapeno"]],
            "Stealth your way to the front door": [19, ["Broccoli"]],
            "Jump out the nearby window! The sky looks pretty anyways": [9, ["Onion", "Bok Choy"]]
        }
    },
    "19": {
        "text": "As you make your last leap, you're transported to CheeseLand. See you rivers of fondue, swiss cheese caves, and rosemary fields. You know there is a Cheese Castle and its Cheese city. What's your move?",
        "choices": {
            "Make a charcuterie board as a snack break": [20, ["Onion"]],
            "Go inland in search of the Cheese City": [20,["Okra"]],
            "Ask others what they think the group should do": [20, ["Corn", "Green Beans"]]
        }
    },
    "20":{
        "text": "As you gather materials for the charcuterie board, a moustache bearing gouda cheese yells, \"What are you doing? This is this sacred cheese you are scavenging on!\"",
        "choices" : {
            "You want some? Offer them some of your charcuterie board": [21,[ ["Onion", "Potato"]]],
            "Apologize immediately, ask if he knows how to get to the Cheese Castle":[21, ["Sweet Potato"]]
        }
    },
    "21": {
        "text": "The gouda tries a little bit of everything. He seems to like it but is shy about it. \"Fine! Follow me.\" You arrive at the main castle hall. However, the Cheese king needs to be entertained in order to see visitors.",
        "choices":{
            "Sing and dance the cheese anthem": [22,["Bok Choy", "Napa Cabbage"]],
            "Offer some leftover charcuterie to the king": [22,["Jalapeno", "Potato"]],
            "Comedy skit but all the punch lines are exclusively cheese puns": [22, ["Onion", "Broccoli"]]
        }
    },
    "22": {
        "text": "The Cheese King laughs, not sure if he's laughing with or at your friends. He chuckles, \"I see you desire to return to Veggie Land. I must ask, what do you miss the most about home?\"",
        "choices": {
            "The warm sunlight and fresh air of Veggie Land": [23,"Jalapeno", "Potato", "Napa Cabbage"],
            "The lively gathering and festivities with your veggie friends": [23,["Corn"]],
            "The smell of your grandma's famous cherry pies": [23,["Sweet Potato"]],
            "Weekly cricket games at the park": [23,["Bok Choy"]]
        }
    },
    "23": {
        "text": "\"Very well. I will send you on a raft to back to VeggieLand.\" And with that you embark on your all-expensed trip back to VeggieLand. Where would you guys like to make your pit stop?",
        "choices":{
            "Mushroom Island, known for pioneering mushroom tech": [24,["Kale", "Onion"]],
            "Dandelion Plains, known for its sunshine and farms": [25,["Corn", "Potato", "Napa Cabbage"]],
            "Forget-Me-Not Island, not a well known location as it is largely unexplored": [26, ["Jalapeno"]]
        }
    },
    "24": {
        "text": "Arrived at Mushroom Island! What are you gonna do?",
        "choices" :{
            "Get a new mushroom telephone, its got wider coverage with its latest spore dispersion technology": [27,["Kale"]],
            "Party on da MushroomSoft roof, they're debuting their latest vehicle, the Vroomie Schroomie": [27,["Bok Choy"]],
            "Buy a little mushroom keepsake for you and your friends": [27,"Corn", "Napa Cabbage"],
            "I just wanna go back home tbh": [27, ["Potato"]]
        }
    },
    "25": {
        "text": "Arrived at Dandelion Plains! What are you gonna do?",
        "choices": {
            "Make dandelion crowns with friends": [27,["Green Beans", "Carrot", "Bok Choy"]],
            "Buy some dandelion honey to gift to your cheese navigator and cheese king": [27,["Corn"]],
            "Re-check the weather to make sure you'll be able to get home on as planned ": [27,["Kale", "Garlic"]],
            "Collect Dandelion Seeds to Make Wishes": [27,["Napa Cabbage"]]
        }
    },
    "26": {
        "text": "Arrived at Forget-Me-Not Island! What are you gonna do?",
        "choices": {
            "Explore the island to make the first-ever forget me not island map!": [27,["Kale"]],
            "Paint the views of the island to share with VeggieVille": [27,["Napa Cabbage"]],
            "I wanna go home. What if we get stranded here, and no one can find us?": [27,["Garlic", "Potato"]],
            "Have a photo shoot with your friends in the forget me nots": [27,["Pumpkin"]]
        }
    },
    "27": {
        "text": "After your long cheese raft journey, you finally arrive home in VeggieLand. What are you doing first?",
        "choices": {
            "Go partying at Club Carrot. Dance the night away and celebrate a long journey!": [13,["Jalapeno"]],
            "Spend some alone time at your favorite cozy bench/spot. You desperately need this fr": [13,["Sweet Potato"]],
            "Organize a Welcome Back Picnic with freshly harvested canonical fruits to inform your veggie community what happened": [13,["Corn", "Green Beans"]],
            "Pick a different hangout place with your friends and debrief what happened and simply enjoy their company": [13,["Sweet Potato"]]
        }
    },
    "13": {
        "text": "Last question! After a night of good rest, the next morning you :",
        "choices" : {
            "Go to a cafe to finally read that book": [0,["Corn", "Potato"]],
            "Head to work, get that bag": [0,["Garlic", "Okra"]],
            "Organize a community clean up day": [0,["Sweet Potato", "Green Beans"]],
            "Go on a veggie run": [0, ["Pumpkin", "Bok Choy"]]
        } 
    },
    "5":{
        "text": "You've arrived at your friend's apartment. What are you guys gonna do?",
        "choices": {
            "Arts and crafts": [28,["Carrot"]],
            "Drink vegetable friendly (wink wink) beverages": [28,["Pumpkin"]],
            "Intense PVP games. Loser has to post an embarassing pic on Vegstagram": [28,["Kale"]],
            "Gossip!!!": [28, ["Sweet Potato", "Corn"]]
        }
    },
    "28": {
        "text": "Leo the Leek goes off to get some snacks for everyone, but shortly after he leaves you a juice curdling scream from where he left to go!",
        "choices": {
            "Mobilize everyone and lead them towards the scream": [29,["Broccoli", "Garlic"]],
            "SCREAM!!!": [29, ["Pumpkin", "Bok Choy"]],
            "Stay in the middle of the pack": [29,["Corn", "Green Beans"]],
            "Freeze in your place until a friend shakes you out of it": [29, ["Kale", "Sweet Potato"]]
        }
    },
    "29": {
        "text": "You follow the noise of the scream, and you’re now at your friends room. What’s the first thing you investigate?",
        "choices" : {
            "Heck no I’m not investigating!": [30,["Kale"]],
            "The open window and it’s billowing curtains… it’s suspicious": [30,["Okra"]],
            "The closet. It looks slightly disheveled?": [30,["Okra", "Pumpkin"]],
            "Call the veggie police!": [30, ["Corn", "Garlic"]]
        }
    },
    "30": {
        "text": "As you investigate around the apartment suddenly the room turns black, and you feel an overwhelming presence swoop you and your friends away out of the window!! You’re in a grocery bag!",
        "choices" : {
            "Everyone jump! That'll break the bag right?": [31,["Jalapeno", "Garlic", "Napa Cabbage"]],
            "Use your plant-ness to poke holes into bag": [31,["Green Beans"]],
            "Photosynthesize extra fast, get big = break the bag": [31, ["Broccoli"]]
        }
    },
    "31": {
        "text": "Success! You've broken free from the grocery bag. Where do you go now? The human is reaching for you!",
        "choices": {
            "Panic! There's too much going on": [32,["Sweet Potato"]],
            "Juke the human so hard they have to leave out of embarrassment": [32,["Pumpkin"]],
            "JUST RUN!!!!": [32, ["Corn", "Garlic"]]
        }
    },
    "32": {
        "text": "Everything is moving so fast, bustling feet threaten to squish you and your friends. Where to next?",
        "choices": {
            "Through the air vents": [9,["Garlic"]],
            "Balloon lift on the graduation balloons": [9, ["Corn"]],
            "Mad dash through the store until you find an exit": [9, ["Pumpkin"]]
        }
    },
    "6":{
        "text": "You and your vegetable companions have embarked on a daring expedition to climb Mount Everest. As you approach the base camp, what is your first priority?",
        "choices": {
            "Survey the Terrain and Plan the Best Route": [33, ["Kale"]],
            "Energize the Team with a Motivational Speech": [33, ["Corn", "Green Beans"]],
            "Double-Check Your Gear and Ensure Everything Is Secure": [33,["Broccoli"]],
            "Take a moment to appreciate the view of mount evergetable": [33, ["Carrot"]]
        }
    },
    "33": {
        "text": "As you near the summit, night falls and you have the choice to rest or keep going",
        "choices": {
            "Seek Shelter in a Nearby Cave": [34,["Okra", "Sweet Potato"]],
            "Climb on!": [36,["Pumpkin", "Garlic"]]
        }
    },
    "34": {
        "text": "Inside the cave, you and your friends need to figure out how to spend your time until the night passes. What do you decide to do?",
        "choices" : {
            "Gather resources and make a makeshift camp": [37,["Carrot"]],
            "Start gathering the group to decide what to do": [37, ["Onion"]],
            "Telling exciting stories and reflect on the trek so far": [37, ["Garlic"]],
            "Map out next steps of the journey": [37, ["Broccoli"]],
        }
    },
    "36": {
        "text": "The veggie squad continues on, until they decide to take a quick break. What are you guys doing?",
        "choices": {
            "Pause to look at the starry night": [37,["Napa Cabbage"]],
            "Just keep going, why are we stopping?": [37,["Garlic"]],
            "Water and snacks! Food is fuel": [37, ["Green Beans"]],
            "Check in with everyone to see how they're doing": [37,["Broccoli", "Napa Cabbage"]],
        }
    },
    "37": {
        "text": "The climb continues for days. And you finally reach the top! Take a look around you, you're on top of the world! Suddenly, a gust of wind blows you off the mountain and you swirl and tumble until...",
        "choices" :{
            "Continue": [38,[]],
        }
    },
    "38": {
        "text": "You've been blown onto Cheese Land. See you rivers of fondue, swiss cheese caves, and rosemary fields. You know there is a Cheese Castle and its Cheese city. What's your move?",
        "choices": {
            "Make a fancy charcuterie board as a snack break": [20,["Okra"]],
            "Go inland in search of the Cheese City": [20,["Onion", "Napa Cabbage", "Carrot"]],
            "Ask others what they think the group should do": [20,["Broccoli", "Green beans", "Napa Cabbage"]],
            "Lead the pack around using your knowledge of Cheese Land geography": [20,["Garlic"]]
        }
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