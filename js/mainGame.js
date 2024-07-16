const gameData = {
    "1": {
        "text": "You and your veggie friends want to hangout in VeggieVille. What snacks are you bringing?",
        "choices": {
            "Beef sticks": [2,["Jalapeno","Performer","Bok Choy"]],
            "Granola": [2,["Broccoli", "Sage", "Sweet Potato"]],
            "Cucumbers and carrots": [2,["Potato", "Okra"]],
            "Crackers and cheese": [2, ["Green Beans", "Carrot"]]
        }
    },
    "2": {
        "text": " Where are you guys going to go?",
        "choices": {
            "The beach": [3, ["Onion", "Green Beans", "Bok Choy"]],
            "A cute book store": [4,["Broccoli", "Kale","Okra", "Carrot"]],
            "Your friend's apartment": [5,["Sweet Potato", "Potato", "Napa Cabbage"]],
            "Mount Evergetable": [6, ["Garlic", "Jalapeno"]]
        }
    },
    "3": {
        "text": "After gearing up with sunglasses and sunscreen, what beach activity are you looking forward to?",
        "choices": {
            "Build a sandcastle with your friends!": [41,["Bitter mellon"]],
            "Set up a beach picnic": [41,["Green Beans", "Bok Choy", "Sweet Potato"]],
            "Explore tide pools and collect shells": [41,["Okra", "Carrot"]],
            "Read the book you've been eyeing": [41,[ "Broccoli", "Kale"]],
        }
    },
    "41": {
        "text": "The sun feels so nice, everyone is having a blast! You start to think: ",
        "choices": {
            "This is fun, I'm grateful for my friends": [7,["Garlic", "Bitter mellon"]],
            "This shell is so funky lol": [7,["Green Beans", "Bok Choy", "Sweet Potato"]],
            "Love my friends, but I wanna go home": [7,["Okra", "Carrot"]],
            "What if we all went scuba diving": [7,["Broccoli", "Kale"]],
        }
    },
    "7": {
        "text": "Suddenly, a large shadow falls over the beach. \
                 A giant hand reaches down from the sky, and scoops you and \
                 your friends up, and the world turns dark...",
        "choices": {
            "Continue": [8,[]]
        }
    },
    "8": {
        "text": "As you and your friends regain consciousness, you realize you're \
                in someone's pantry! Hurry and escape before the human eats you!",
        "choices": {
            "Everyone sprint for the nearby window!": [9,["Jalapeno"]],
            "How about we stealth our way out the window instead": [9,["Kale", "Potato"]],
            "Listen to your friend who suggests escaping through the backyard": [19, ["Carrot"]]
        }
    },
    "9": {
        "text": "Shoot! The window is stuck and won't slide open!",
        "choices": {
            "How about we go down the hole instead?": [19, ["Napa Cabbage", "Kale", "Potato"]],
            "Try using oil to loosen locking mechanism": [48, ["Carrot", "Broccoli", "Onion"]],
            "Chuck kitchen utensils to break the window >:)": [50, ["Jalapeno", "Green Beans"]]
        }
    },
    "48" :{
        "text": "Sweet! The window slides open nicely!",
        "choices": {
            "Jump out the window with no hesitation. Cya!": [49, ["Jalapeno"]],
            "Look for something to land on before jumping": [49,["Okra", "Napa Cabbage"]],
            "Um I'm scared of heights": [49, ["Potato"]]
        }
    },
    "50" :{
        "text" : "You and your friends start hurling plates, pots, pans, \
                  and as your friend throws the last bar of soap, the window\
                  breaks open!",
        "choices": {
                    "How did we get away with that": [49, ["Kale"]],
                    "Go go go! The human is going to come soon": [49, ["Broccoli"]],
                    "Woohoo! Let's go!": [49, ["Sweet Potato", "Green Beans", "Bok Choy"]]
                }
    },
    "49" :{    
        "text": "Stepping through the window transports you to the Corn Cosmos,\
                and you're now in a corn rocket floating in space!\
                What gadget are you going to tinker with to get back home?",
        "choices": {
            "The lever that takes you into hyperspace (or whatever they call it) in the movies": [10,["Bok Choy"]],
            "*Methodically* type random stuff in the holographic keyboard above you": [10, ["Onion"]]
        }
    },
    "10": {
        "text": "Buckle up! Stars and green galaxies fly by as the corn rocket shoots off!",
        "choices": {
            "Wow. This is beautiful...": [43, ["Napa Cabbage"]],
            "Please take us back *veggie fingers intensely crossed*": [43,["Bok Choy", "Potato"]],
            "I recognize that constellation! It's Ori-onion!": [43, ["Okra"]]
        }
    },
    "43" : {
        "text": "\"Umm where we are now...\" asks one of your friends. What should you guys do next?",
        "choices": {
            "Pull more levers and press more buttons!": [11,["Jalapeno"]],
            "Look around for a map. There's surely one in the ship right?": [39, ["Okra"]],
            "Stay calm, organize everyone, and discuss next steps": [39,["Garlic"]],
            "Experiment with each lever to figure out how the ship works.": [11,["Onion"]]
        }
    },
    "11" : {
        "text": "In your button frenzy, a glowing orb appears in the spaceship.",
        "choices":{
            "Is this the end?": [42, ["Potato", "Napa Cabbage"]],
            "Everyone hide!": [42, ["Onion"]],
            "ALIENS!": [42, ["Bok Choy"]],
        }
    },
    "42": {
        "text": "A glowing popcorn kernel emerges and yells, \"Stop you fools! Ugh,\
                VeggieVille natives, so stupid. Let me take you back.\"",
        "choices": {
            "Thanks.": [12,["Potato"]],
            "THANK YOU! You saved us":[12,["Sweet Potato"]],
            "Who are you? We can handle this ourselves": [12, ["Kale"]],
            "Thank you so much! But who are you?": [12,["Onion"]]
        }
    },
    "39" : {
        "text": "After reading through the corn rocket manual, your team \
            has an idea for what should be next move.",
        "choices": {
            "Full send! VeggieVille here we come": [40,["Jalapeno"]],
            "We should double check...": [40, ["Broccoli"]],
            "Someone else press the button, I can't do it": [40, ["Potato"] ],
            "Let's all press the button together!": [40, ["Napa Cabbage"]]
        }
    },
    "40": {
        "text": "\"Here goes nothing!\" As Dave the Daikon reaches for the lever, \
        Sally the Spinach yells \"Wait! I don't feel good about this. I'm really scared...\". \
        What do you do?",
        "choices": {
            "It was me. I was the one that yelled": [44, ["Sweet Potato", "Green Beans"]],
            "Re-explain the math. See? Nothing to be afraid of": [44,["Onion", "Broccoli"]],
            "Stand back and let someone else handle the situation": [44, ["Potato", "Kale"]],
            "Go over and comfort them.": [44,["Green Beans", "Napa Cabbage"]]
        }
    },
    "44": {
        "text": "Finally, you all pull the lever together and blast off! \
            Later, the ship slows down, and the corn husk doors release. \
            You're back in VeggieVille!",
        "choices": {
            "Time to hit up Club Carrot! I need to let loose": [13, ["Bok Choy"]],
            "Go to your favorite spot to unwind by yourself": [13, ["Potato"]],
            "Call all of VeggieVille for a picnic and to tell everyone what happened": [13, ["Garlic"]],
            "Throw up from the rocket-sickness": [13, ["Sweet Potato"]]
        }
    },
    "12" : {
        "text": "The kernel does a magical twirl with a pop! \
                You find yourself back in VeggieVille. What do you do now?",
        "choices": {
            "Wait...was that an alien?": [13,["Bok Choy" ]],
            "Cry. That was a lot to go through": [13,["Potato"]],
            "Celebrate with your friends!": [13,["Kale"]],
            "Take a breather somewhere secluded": [13,["Sweet Potato"]]
        }
    },
    "4":{
        "text": "So many books to choose from! What catches your eye first?",
        "choices" : {
            "A whimsical heartwarming children's book.": [15,["Napa Cabbage", "Sweet Potato"]],
            "The Great Gourdsby, classic literature": [15,["Broccoli"]],
            "Sherlettuce Holmes, a thrilling mystery novel": [15,["Okra", "Carrot"]],
            "A self help book": [15, ["Onion"]]
        }
    },
    "15" :{
        "text": "There are a couple of events going on today at the book store! Which do you go to?",
        "choices" : {
            "Join a book club discussion on the hottest new book": [16,["Green Beans"]],
            "Book scavenger hunt around the store for a free prize":[16,["Jalapeno", "Okra"]],
            "A creative writing workshop and storytelling event":[16, ["Onion", "Bok Choy"]]     
        }
    },
    "16":{
       "text": "As you leave the bookstore, an insurmountable gust of wind lifts you up. \
        Everyone is buffeted in a vortex up and up...",
       "choices":{
            "Goodbye everyone it was nice knowing you": [17,["Potato","Green Beans"]],
            "Error 404 veggie brain is in a state of panic": [17, ["Napa Cabbage", "Kale"]],
            "Everyone try holding hands!": [17,["Broccoli"]],
            "Weeee!": [17,["Jalapeno"]],
       } 
    },
    "17": {
        "text": "The whirlwind finally stops! You feel a sharp chilly breeze...\
                 because you're trapped in a human's fridge! Get out ASAP before \
                 you get eaten!",
        "choices":{
            "Hide and wait for the refrigerator door to open": [18,["Broccoli"]],
            "Rally the veggie friends to push the door. Everyone roll out!": [18,["Jalapeno", "Bok Choy"]],
            "Try to unplug the refrigerator from the inside": [18, ["Onion", "Okra"]],
            "Do what the others do": [18,["Potato"]]
        }
    },
    "18": {
        "text": "Miraculously, you made it out the fridge, but now you need to get out \
                of the house back to VeggieLand! What's next?",
        "choices": {
            "Hop on the dog's back!": [19,["Jalapeno"]],
            "Stealth your way to the front door": [19, ["Kale", "Okra"]],
            "Jump out the nearby window! The sky looks pretty anyways": [9, ["Onion", "Bok Choy"]]
        }
    },
    "19": {
        "text": "As you make your last leap, you're transported to CheeseLand, land of fondue rivers, \
            , swiss cheese caves, and rosemary fields. What's your next move?",
        "choices": {
            "Make a charcuterie board as a snack break": [20, ["Onion"]],
            "Go inland in search of the Cheese Castle": [20,["Okra"]],
            "Ask others what they think the group should do": [20, ["Napa Cabbage", "Green Beans"]]
        }
    },
    "20":{
        "text": "Mid charcuterie board making, a gouda cheese wheel yells, \
                \"What are you doing? This is sacred cheese you're scavenging on!\"",
        "choices" : {
            "You want some?": [21,[ ["Onion", "Potato"]]],
            "Apologize immediately and ask how to get to Cheese Castle":[21, ["Sweet Potato", "Okra"]]
        }
    },
    "21": {
        "text": "Gouda tries a nibble of everything, and scoffs, \"It's okay. Follow me.\" \
                When, you arrive at the castle, you find out you have to entertain the Cheese King \
                in order to be seen.",
        "choices":{
            "Sing and dance the CheeseLand anthem": [22,["Bok Choy", "Napa Cabbage"]],
            "Offer some leftover charcuterie to the king": [22,["Jalapeno", "Potato"]],
            "Comedy skit but all the punch lines are exclusively cheese puns": [22, ["Onion", "Broccoli"]]
        }
    },
    "22": {
        "text": "The Cheese King laughs, not sure if he's laughing with you or at you. \
                He chuckles, \"I see you desire to return to VeggieLand. Tell me, \
                what do you miss the most about home?\"",
        "choices": {
            "The warm sunlight and fresh air": [23,"Jalapeno", "Potato", "Napa Cabbage"],
            "The hanging out with your veggie friends": [23,["Okra"]],
            "The smell of your grandma's cherry pies": [23,["Sweet Potato"]],
            "Weekly cricket games at the park": [23,["Bok Choy"]]
        }
    },
    "23": {
        "text": "\"Very well. I will send you on a guided all-expensed boat to back home.\" \
                    Where do you guys want to visit on the way back?",
        "choices":{
            "Mushroom Island, known for pioneering mushroom tech": [24,["Kale", "Onion"]],
            "Dandelion Plains, known for its sunshine and farms": [25,["Potato", "Napa Cabbage"]],
            "Forget-Me-Not Island, largely unexplored territory": [26, ["Jalapeno", "Okra"]]
        }
    },
    "24": {
        "text": "Arrived at Mushroom Island! What are you gonna do?",
        "choices" :{
            "Get a new mushroom telephone, its got wider coverage with its latest spore dispersion technology": [27,["Kale"]],
            "Party on da MushroomSoft roof, they're debuting their latest vehicle, the Vroomie Schroomie": [27,["Bok Choy"]],
            "Buy a little mushroom keepsake for you and your friends": [27, "Napa Cabbage"],
            "I just wanna go back home tbh": [27, ["Potato", "Garlic"]]
        }
    },
    "25": {
        "text": "Arrived at Dandelion Plains! What are you gonna do?",
        "choices": {
            "Make dandelion crowns with friends": [27,["Green Beans", "Carrot", "Bok Choy"]],
            "Buy some dandelion honey to gift to your cheese navigator and cheese king": [27,["Napa Cabbage", "Onion"]],
            "Re-check the weather to make sure you'll be able to get home on as planned ": [27,["Kale", "Garlic", "Okra"]],
        }
    },
    "26": {
        "text": "Arrived at Forget-Me-Not Island! What are you gonna do?",
        "choices": {
            "Explore the island to make the first-ever forget me not island map!": [27,["Kale", "Okra"]],
            "Paint the views of the island to share with VeggieVille": [27,["Napa Cabbage"]],
            "I wanna go home. What if we get stranded here, and no one can find us?": [27,["Garlic", "Potato"]],
            "Have a photo shoot with your friends in the forget me nots": [27,["Jalapeno"]]
        }
    },
    "27": {
        "text": "After your cheese raft journey, you finally arrive home in VeggieLand. What are you doing first?",
        "choices": {
            "Go partying at Club Carrot. Dance the night away!": [13,["Jalapeno"]],
            "Spend some alone time at your favorite cozy bench/spot.": [13,["Sweet Potato"]],
            "Organize a Welcome Back Picnic to inform your veggie community what happened": [13,["Napa Cabbage", "Green Beans"]],
            "Break down what just happened with your friends": [13,["Sweet Potato", "Garlic"]]
        }
    },
    "13": {
        "text": "Last question! After a night of good rest, the next morning you :",
        "choices" : {
            "Go to a cafe to finally read that book": [0,["Napa Cabbage", "Potato"]],
            "Head to work, get that bag": [0,["Garlic", "Okra"]],
            "Organize a community clean up day": [0,["Sweet Potato", "Green Beans"]],
            "Go on a veggie run": [0, ["Jalapeno", "Bok Choy"]]
        } 
    },
    "5":{
        "text": "You've arrived at your friend's apartment. What are you guys gonna do?",
        "choices": {
            "Arts and crafts": [28,["Carrot"]],
            "Drink lots of beverages (wink wink)": [28,["Bok Choy"]],
            "Play games! Loser has to post an embarassing pic on Vegstagram": [28,["Kale", "Garlic"]],
            "Gossip!!!": [28, ["Sweet Potato", "Napa Cabbage"]]
        }
    },
    "28": {
        "text": "Leo the Leek goes off to get some snacks for everyone, but shortly \
                after he leaves, you hear him scream!",
        "choices": {
            "SCREAM!!!": [45, ["Bok Choy"]],
            "Leo you good?": [45,["Green Beans", "Garlic"]],
            "Oh no! Is Leo ok?": [45, ["Kale", "Sweet Potato"]]
        }
    },
    "45": {
        "text": "You don't hear a response from Leo. You should check in on him...",
        "choices": {
            "Mobilize everyone and proceed towards the scream": [29,["Broccoli", "Garlic"]],
            "Stay in the middle of the pack": [29, ["Napa Cabbage", "Green Beans"]],
            "Linger in the back, you're scared": [29, ["Kale", "Sweet Potato"]]
        }
    },
    "29": {
        "text": "You follow the noise of the scream, and you’re now at your friends \
                room. What’s the first thing you investigate?",
        "choices" : {
            "Heck no I’m not investigating!": [30,["Kale"]],
            "The open window and it’s billowing curtains… it’s suspicious": [30,["Okra"]],
            "The closet. It looks slightly disheveled?": [30,["Broccoli"]],
            "Call the veggie police!": [30, ["Napa Cabbage", "Garlic"]]
        }
    },
    "30": {
        "text": "As you investigate, the room turns dark! You feel an overwhelming \
                presence swoop you and your friends out of the window!",
        "choices": {
                "Struggle against whatever it is and try to escape": [46, ["Onion"]],
                "Scream for help": [46, ["Garlic"]],
                "Cry a little": [46, ["Kale", "Sweet Potato"]],
                "Am I gonna die?": [46, ["Potato"]]
        }
    },
    "46": {
        "text": "As light enters back into your world, you realize you’re in a grocery bag!",
        "choices" : {
            "Everyone jump! That'll break the bag right?": [31,["Garlic", "Onion"]],
            "Use your plant abilities to poke holes into bag": [31,["Green Beans"]],
            "Photosynthesize extra fast, get big = break the bag": [31, ["Broccoli", "Jalapeno"]]
        }
    },
    "31": {
        "text": "Success! You've broken free from the grocery bag. Where do you go now? \
                The human is reaching for you!",
        "choices": {
            "Panic! There's too much going on": [32,["Sweet Potato"]],
            "Juke the human so hard they have to leave out of embarrassment": [32,["Carrot", "Bok Choy"]],
            "JUST RUN!!!!": [32, ["Garlic"]]
        }
    },
    "32": {
        "text": "Everything is moving so fast, bustling feet threaten to squish you and your friends. Where to next?",
        "choices": {
            "Through the air vents": [9,["Carrot"]],
            "Mad dash through the store until you find an exit": [9, ["Jalapeno"]]
        }
    },
    "6":{
        "text": "You and your vegetable companions have embarked on a daring \
                expedition to climb Mount Everest. What do you do at the base camp?",
        "choices": {
            "Survey the Terrain and Plan the Best Route": [33, ["Kale"]],
            "Energize the Team with a Motivational Speech": [33, ["Bok Choy", "Green Beans", "Garlic"]],
            "Double-Check Your Gear and Ensure Everything Is Secure": [33,["Broccoli"]],
            "Take a moment to appreciate the view of mount evergetable": [33, ["Carrot"]]
        }
    },
    "33": {
        "text": "As you near the summit, night falls and you have the choice to rest or keep going",
        "choices": {
            "Seek Shelter in a Nearby Cave": [34,["Okra", "Sweet Potato"]],
            "Climb on!": [36,["Bok Choy", "Garlic"]]
        }
    },
    "34": {
        "text": "Inside the cave, you and your friends need to figure out how to \
                 pass the night.",
        "choices" : {
            "Gather resources and make a makeshift camp": [37,["Carrot"]],
            "Collectively to decide what to do": [37, ["Garlic"]],
            "Telling exciting stories and reflect on the trek so far": [37, ["Green Beans"]],
            "Map out next steps of the journey": [37, ["Broccoli"]],
        }
    },
    "36": {
        "text": "The veggie squad continues on, until they decide to take a quick break. What are you guys doing?",
        "choices": {
            "Pause to look at the starry night": [37,["Napa Cabbage"]],
            "Just keep going, why are we stopping?": [37,["Jalapeno"]],
            "Water and snacks! Food is fuel": [37, ["Green Beans"]],
            "Check in with everyone to see how they're doing": [37,["Broccoli", "Napa Cabbage", "Garlic"]],
        }
    },
    "37": {
        "text": "The climb continues for days. And you finally reach the top! \
        Take a look around you, you're on top of the world! Suddenly, a gust \
        of wind blows you off the mountain and you swirl and tumble until...",
        "choices" :{
            "Continue": [38,[]],
        }
    },
    "38": {
        "text": "You've been blown onto Cheese Land. See you rivers of fondue, \
        swiss cheese caves, and rosemary fields. You know there is a Cheese Castle \
        and its Cheese city. What's your move?",
        "choices": {
            "Make a fancy charcuterie board as a snack break": [20,["Okra"]],
            "Go inland in search of the Cheese City": [20,["Onion", "Napa Cabbage", "Carrot"]],
            "Ask others what they think the group should do": [20,["Broccoli", "Green beans", "Napa Cabbage"]],
            "Lead the pack around using your knowledge of Cheese Land geography": [20,["Garlic"]]
        }
    }


};
const personalities = { 
    "Onion": 0,
    "Broccoli": 0,
    "Garlic": 0, // The Leader
    "Jalapeno": 0, // The Adventurer
    "Kale": 0, // The Analyst
    "Green Beans": 0, // The Connector
    "Sweet Potato": 0, // The Caregiver
    "Carrot": 0, // The Visionary
    "Potato": 0, // The Realist
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
