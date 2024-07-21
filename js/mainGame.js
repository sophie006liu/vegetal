const gameData = {
    "1": {
        "text": "You and your veggie friends want to hangout in VeggieVille. What snacks are you bringing?",
        "image" : "images/snackies.png",
"choices": {
            "Beef sticks": [2,["Jalapeno","Performer","Bok Choy"]],
            "Granola": [2,["Broccoli", "Sage", "Pumpkin"]],
            "Cucumbers and carrots": [2,["Potato", "Leek"]],
            "Crackers and cheese": [2, ["Green Bean", "Carrot"]]
        }
    },
    "2": {
        "text": " Where are you guys going to go?",
        "image" : "images/where_to.png",
"choices": {
            "The beach": [3, ["Onion", "Green Bean", "Bok Choy"]],
            "A cute book store": [4,["Broccoli", "Tomato","Leek", "Carrot"]],
            "Your friend's apartment": [5,["Pumpkin", "Potato", "Napa Cabbage"]],
            "Mount Evergetable": [6, ["Garlic", "Jalapeno"]]
        }
    },
    "3": {
        "text": "After gearing up with sunglasses and sunscreen, what beach activity are you looking forward to?",
        "image" : "images/at_beach.png",
"choices": {
            "Build a sandcastle with your friends!": [41,["Bitter mellon"]],
            "Set up a beach picnic": [41,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Explore tide pools and collect shells": [41,["Leek", "Carrot"]],
            "Read the book you've been eyeing": [41,[ "Broccoli", "Tomato"]],
        }
    },
    "41": {
        "text": "The sun feels so nice, everyone is having a blast! You start to think: ",
        "image" : "images/having_beach_fun.png",
"choices": {
            "This is fun, I'm grateful for my friends": [7,["Garlic", "Bitter mellon"]],
            "This shell is so funky lol": [7,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Love my friends, but I wanna go home": [7,["Leek", "Carrot"]],
            "What if we all went scuba diving": [7,["Broccoli", "Tomato"]],
        }
    },
    "7": {
        "text": "Suddenly, a large shadow falls over the beach. \
                 A giant hand reaches down from the sky, and scoops you and \
                 your friends up, and the world turns dark...",
        "image" : "images/beach_disaster.png",
"choices": {
            "Continue": [8,[]]
        }
    },
    "8": {
        "text": "As you and your friends regain consciousness, you realize you're \
                in someone's pantry! Hurry and escape before the human eats you!",
        "image" : "images/in_pantry.png",   
"choices": {
            "Everyone sprint for the nearby window!": [9,["Jalapeno"]],
            "How about we stealth our way out the window instead": [9,["Tomato", "Potato"]],
            "Listen to your friend who suggests escaping through the backyard": [19, ["Carrot"]]
        }
    },
    "9": {
        "text": "Shoot! The window is stuck and won't slide open!",
        "image" : "images/window_locked.png",
"choices": {
            "How about we go down the hole instead?": [19, ["Napa Cabbage", "Tomato", "Potato"]],
            "Try using oil to loosen locking mechanism": [48, ["Carrot", "Broccoli", "Onion"]],
            "Chuck kitchen utensils to break the window >:)": [55, ["Jalapeno", "Green Bean"]]
        }
    },
    "48" :{
        "text": "Sweet! The window slides open nicely!",
        "image" : "images/window_jump.png",
"choices": {
            "Jump out the window with no hesitation. Cya!": [49, ["Jalapeno"]],
            "Look for something to land on before jumping": [49,["Leek", "Napa Cabbage"]],
            "Um I'm scared of heights": [49, ["Potato"]]
        }
    },
    "55" :{
        "text" : "You and your friends start hurling plates, pots, pans, \
                  and as your friend throws the last bar of soap, the window\
                  breaks open!",
        "image" : "images/breaking_window.png",
"choices": {
                    "How did we get away with that": [49, ["Tomato"]],
                    "Go go go! The human is going to come soon": [49, ["Broccoli"]],
                    "Woohoo! Let's go!": [49, ["Pumpkin", "Green Bean", "Bok Choy"]]
                }
    },
    "49" :{    
        "text": "Stepping through the exit,transports you to the Corn Cosmos,\
                and you're now in a corn rocket floating in space!\
                What gadget are you going to tinker with to get back home?",
        "image" : "images/corn_space.png",
"choices": {
            "The lever that takes you into hyperspace (or whatever they call it) in the movies": [10,["Bok Choy"]],
            "*Methodically* type random stuff in the holographic keyboard above you": [10, ["Onion"]]
        }
    },
    "10": {
        "text": "Buckle up! Stars and green galaxies fly by as the corn rocket shoots off!",
        "image" : "images/space_travel.png",
"choices": {
            "Wow. This is beautiful...": [43, ["Napa Cabbage"]],
            "Please take us back *veggie fingers intensely crossed*": [43,["Bok Choy", "Potato"]],
            "I recognize that constellation! It's Ori-onion!": [43, ["Leek"]]
        }
    },
    "43" : {
        "text": "\"Umm where we are now...\" asks one of your friends. What should you guys do next?",
        "image" : "images/space_confusion.png",
"choices": {
            "Pull more levers and press more buttons!": [11,["Jalapeno", "Onion"]],
            "Look around for a map. There's surely one in the ship right?": [39, ["Leek"]],
            "Organize everyone and discuss team plan": [39,["Garlic"]]
        }
    },
    "11" : {
        "text": "In your button frenzy, a glowing orb appears in the spaceship.",
        "image" : "images/glowing_space_orb.png",
"choices":{
            "Is this the end?": [42, ["Potato", "Napa Cabbage"]],
            "Everyone hide!": [42, ["Onion"]],
            "ALIENS!": [42, ["Bok Choy"]],
        }
    },
    "42": {
        "text": "A glowing popcorn emerges and yells, \"Stop you fools! Ugh,\
                VeggieVille natives, so stupid. Let me take you back.\"",
        "image" : "images/glowing_popcorn.png",
"choices": {
            "Thanks.": [12,["Potato"]],
            "THANK YOU! You saved us":[12,["Pumpkin"]],
            "Who are you? We can handle this ourselves": [12, ["Tomato"]],
            "Thank you so much! But who are you?": [12,["Onion"]]
        }
    },
    "39" : {
        "text": "After reading the rocket manual, your team \
            has an idea for what buttons to press.",
        "image" : "images/spaceplan.png",
"choices": {
            "Full send! VeggieVille here we come": [40,["Jalapeno"]],
            "We should double check...": [40, ["Broccoli"]],
            "Someone else press the button, I can't do it": [40, ["Potato"] ],
            "Let's all press the button together!": [40, ["Napa Cabbage"]]
        }
    },
    "40": {
        "text": "\"Here goes nothing!\" As Link the Leek reaches for the lever, \
        Oli Onion Leek yells \"Wait! I don't feel good about this. I'm really scared...\". \
        What do you do?",
        "image" : "images/pull_lever.png",
"choices": {
            "It was me. I was the one that yelled": [44, ["Pumpkin", "Green Bean"]],
            "Re-explain the plan. See? Nothing to be afraid of": [44,["Onion", "Broccoli"]],
            "Stand back and let someone else handle the situation": [44, ["Potato", "Tomato"]],
            "Go over and comfort them.": [44,["Green Bean", "Napa Cabbage"]]
        }
    },
    "44": {
        "text": "At last, you all pull the lever and blast off! \
            The rocket halts, and the corn husk doors release. \
            You're back in VeggieVille!",
        "image" : "images/backhome.png",
"choices": {
            "Time to hit up Club Carrot! I need to let loose": [13, ["Bok Choy"]],
            "Go to your favorite spot to unwind by yourself": [13, ["Potato"]],
            "Call all of VeggieVille for a picnic and to tell everyone what happened": [13, ["Garlic"]],
            "Throw up from the rocket-sickness": [13, ["Pumpkin"]]
        }
    },
    "12" : {
        "text": "The kernel does a magical twirl, and a pop! \
                You find yourself back in VeggieVille. What do you do now?",
        "image" : "images/backhome.png",
"choices": {
            "Wait...was that an alien?": [13,["Bok Choy" ]],
            "Cry. That was a lot to go through": [13,["Potato"]],
            "Celebrate with your friends!": [13,["Tomato"]],
            "Take a breather somewhere secluded": [13,["Pumpkin"]]
        }
    },
    "4":{
        "text": "So many books to choose from! What catches your eye first?",
        "image" : "images/which_book.png",
"choices" : {
            "A whimsical heartwarming children's book.": [15,["Napa Cabbage", "Pumpkin"]],
            "The Great Gourdsby, classic literature": [15,["Broccoli"]],
            "Sherlettuce Holmes, a thrilling mystery novel": [15,["Leek", "Carrot"]],
            "A self help book": [15, ["Onion"]]
        }
    },
    "15" :{
        "text": "There are a couple of events going on today at the book store! Which do you go to?",
        "image" : "images/bookstore_activities.png",
"choices" : {
            "Join a book club discussion on the hottest new book": [16,["Green Bean"]],
            "Book scavenger hunt around the store for a free prize":[16,["Jalapeno", "Leek"]],
            "A creative writing workshop and storytelling event":[16, ["Onion", "Bok Choy"]]     
        }
    },
    "16":{
       "text": "As you leave the bookstore, an insurmountable gust of wind lifts you up. \
        Everyone is buffeted in a vortex up and up...",
        "image" : "images/vortex.png",
"choices":{
            "Goodbye everyone it was nice knowing you": [17,["Potato","Green Bean"]],
            "Error 404 veggie brain is in a state of panic": [17, ["Napa Cabbage", "Tomato"]],
            "Everyone try holding hands!": [17,["Broccoli"]],
            "Weeee!": [17,["Jalapeno"]],
       } 
    },
    "17": {
        "text": "The whirlwind stops! You feel a sharp chilly breeze...\
                 because you're trapped in a human's fridge!",
        "image" : "images/in_fridge.png",
"choices": {
            "Continue": [50, []]
        }
    },
    "50": {
        "text": "Get out ASAP before you get eaten!",
        "image" : "images/in_fridge.png",
"choices":{
            "Hide and wait for the refrigerator door to open": [18,["Broccoli"]],
            "Rally the veggie friends to push the door. Roll out!": [18,["Jalapeno", "Bok Choy"]],
            "Try to unplug the refrigerator from the inside": [18, ["Onion", "Leek"]],
            "Do what the others do": [18,["Potato"]]
        }
    },
    "18": {
        "text": "Miraculously, you made it out the fridge, but now you need to get out \
                of the house! What's next?",
        "image" : "images/out_fridge.png",
"choices": {
            "Hop on the dog's back!": [19,["Jalapeno"]],
            "Stealth your way to the front door": [19, ["Tomato", "Leek"]],
            "Jump out the nearby window!": [9, ["Onion", "Bok Choy"]]
        }
    },
    "19": {
        "text": "As you cross the door step, you're transported to CheeseLand, land of fondue rivers and \
            swiss cheese caves. What's your next move?",
        "image" : "images/cheeseland.png",
"choices": {
            "Make a charcuterie board as a snack break": [20, ["Onion"]],
            "Go inland in search of the Cheese Castle": [20,["Leek"]],
            "Ask others what they think the group should do": [20, ["Napa Cabbage", "Green Bean"]]
        }
    },
    "20":{
        "text": "Mid charcuterie board making, a gouda cheese wheel yells, \
                \"What are you doing? This is sacred cheese you're eating!\"",
        "image" : "images/mad_gouda.png",
"choices" : {
            "You want some?": [21,["Onion", "Potato"]],
            "Apologize immediately and ask how to get to Cheese Castle":[21, ["Pumpkin", "Leek"]]
        }
    },
    "21": {
        "text": "Gouda immediately takes you to the Cheese King, hoping your group \
                leaves as soon as possible. However, the king must be \
                must be entertained in order to be seen.",
        "image" : "images/cheese_castle.png",
"choices":{
            "Sing and dance the CheeseLand anthem": [22,["Bok Choy", "Napa Cabbage"]],
            "Offer some leftover charcuterie to the king": [22,["Jalapeno", "Potato"]],
            "Comedy skit but all the punch lines are exclusively cheese puns": [22, ["Onion", "Broccoli"]]
        }
    },
    "22": {
        "text": "The Cheese King laughs, but you're not sure if he's laughing with you or at you...",
        "image" : "images/performance.png",
"choices": {
            "Keep going, the show must go on!": [51,["Bok Choy", "Garlic"]],
            "Guy's I'm not sure if this is working": [51, ["Tomato", "Leek"]],
            "Try to ignore the king and power through": [51, ["Napa Cabbage"]]
        }
    },
    "51": {
        "text": "He chuckles, \"I see you desire to return to VeggieLand. Tell me, \
        what do you miss the most about home?",
        "image" : "images/happy_king.png",
"choices": {
            "The warm sunlight and fresh air": [23,["Jalapeno", "Potato", "Napa Cabbage"]],
            "The hanging out with your veggie friends": [23,["Leek", "Green Bean"]],
            "The smell of your grandma's cherry pies": [23,["Pumpkin"]],
            "Weekly cricket games at the park": [23,["Bok Choy"]]
        }
    },
    "23": {
        "text": "\"Very well. I will send you on a guided all-expensed boat to back home.\" \
                    Where do you guys want to visit on the way back?",
        "image" : "images/boat.png",
"choices":{
            "Mushroom Island, known for pioneering mushroom tech": [24,["Tomato", "Onion"]],
            "Dandelion Plains, known for its sunshine and farms": [25,["Potato", "Napa Cabbage"]],
            "Forget-Me-Not Island, largely unexplored territory": [26, ["Jalapeno", "Leek"]]
        }
    },
    "24": {
        "text": "Arrived at Mushroom Island! What are you gonna do?",
        "image" : "images/mushroom.png",
"choices" :{
            "Get a new mushroom telephone, its got wider coverage with its latest spore dispersion technology": [27,["Tomato"]],
            "Party on da MushrooSoft roof, they're debuting their latest vehicle, the Vroomie Schroomie": [27,["Bok Choy"]],
            "Buy a little mushroom keepsake for you and your friends": [27, ["Napa Cabbage", "Green Bean"]],
            "I just wanna go back home tbh": [27, ["Potato", "Garlic"]]
        }
    },
    "25": {
        "text": "Arrived at Dandelion Plains! What are you gonna do?",
        "image" : "images/dandelion.png",
"choices": {
            "Make dandelion crowns with friends": [27,["Green Bean", "Carrot", "Bok Choy"]],
            "Buy some dandelion honey to gift to your cheese navigator and cheese king": [27,["Napa Cabbage", "Onion"]],
            "Re-check the weather to make sure you'll be able to get home on as planned ": [27,["Tomato", "Garlic", "Leek"]],
        }
    },
    "26": {
        "text": "Arrived at Forget-Me-Not Island! What are you gonna do?",
        "image" : "images/forgetmenot.png",
"choices": {
            "Explore the island to make the first-ever forget me not island map!": [27,["Tomato", "Leek"]],
            "Paint the views of the island to share with VeggieVille": [27,["Napa Cabbage"]],
            "I wanna go home. What if we get stranded here, and no one can find us?": [27,["Garlic", "Potato"]],
            "Have a photo shoot with your friends in the forget me nots": [27,["Jalapeno"]]
        }
    },
    "27": {
        "text": "After your pit stop, you finally arrive home in VeggieLand. What are you doing first?",
        "image" : "images/backhome.png",
"choices": {
            "Go partying at Club Carrot. Dance the night away!": [13,["Jalapeno"]],
            "Spend some alone time at your favorite cozy bench/spot.": [13,["Pumpkin"]],
            "Organize a community picnic to share your adventures": [13,["Napa Cabbage", "Green Bean"]],
            "Break down what just happened with your friends": [13,["Pumpkin", "Garlic"]]
        }
    },
    "13": {
        "text": "Last question! After a night of good rest, the next morning you :",
        "image" : "images/another_day.png",
"choices" : {
            "Go to a cafe to finally read that book": [0,["Napa Cabbage", "Potato"]],
            "Head to work, get that bag": [0,["Garlic", "Leek"]],
            "Organize a community clean up day": [0,["Pumpkin", "Green Bean"]],
            "Go on a veggie run": [0, ["Jalapeno", "Bok Choy"]]
        } 
    },
    "5":{
        "text": "You've arrived at your friend's apartment. What are you guys gonna do?",
        "image" : "images/at_apartment.png",
"choices": {
            "Arts and crafts": [28,["Carrot"]],
            "Drink lots of beverages (wink wink)": [28,["Bok Choy"]],
            "Play games! Loser has to post an embarassing pic on Vegstagram": [28,["Tomato", "Garlic"]],
            "Gossip!!!": [28, ["Pumpkin", "Napa Cabbage"]]
        }
    },
    "28": {
        "text": "Leo the Leek goes off to get some snacks for everyone, but shortly \
                after he leaves, you hear him scream!",
        "image" : "images/apartment.png",
"choices": {
            "SCREAM!!!": [45, ["Bok Choy"]],
            "Leo you good?": [45,["Green Bean", "Garlic"]],
            "Oh no! Is Leo ok?": [45, ["Tomato", "Pumpkin"]]
        }
    },
    "45": {
        "text": "You don't hear a response from Leo. You should check in on him...",
        "image" : "images/no_response.png",
"choices": {
            "Mobilize everyone and proceed towards the scream": [29,["Broccoli", "Garlic"]],
            "Stay in the middle of the pack": [29, ["Napa Cabbage", "Green Bean"]],
            "Linger in the back, you're scared": [29, ["Tomato", "Pumpkin"]]
        }
    },
    "29": {
        "text": "You follow the noise of the scream, and you’re now at your friends \
                room. What’s the first thing you investigate?",
        "image" : "images/room.png",
"choices" : {
            "Heck no I’m not investigating!": [30,["Tomato"]],
            "The open window and it’s billowing curtains… it’s suspicious": [30,["Leek"]],
            "The closet. It looks slightly disheveled?": [30,["Broccoli"]],
            "Call the veggie police!": [30, ["Napa Cabbage", "Garlic"]]
        }
    },
    "30": {
        "text": "As you investigate, the room turns dark! You feel an overwhelming \
                presence swoop you and your friends out of the window!",
        "image" : "images/beach_disaster.png",
"choices": {
                "Struggle against whatever it is and try to escape": [46, ["Onion"]],
                "Scream for help": [46, ["Garlic"]],
                "Cry a little": [46, ["Tomato", "Pumpkin"]],
                "Am I gonna die?": [46, ["Potato"]]
        }
    },
    "46": {
        "text": "As light enters back into your world, you realize you’re in a grocery bag!",
        "image" : "images/grocery_bag.png",
"choices" : {
            "Everyone jump! That'll break the bag right?": [31,["Garlic", "Onion"]],
            "Use your plant abilities to poke holes into bag": [31,["Green Bean"]],
            "Photosynthesize extra fast, get big = break the bag": [31, ["Broccoli", "Jalapeno"]]
        }
    },
    "31": {
        "text": "Success! You've broken free from the grocery bag. Where do you go now? \
                The human is reaching for you!",
        "image" : "images/grocery_bag_out.png",
"choices": {
            "Panic! There's too much going on": [32,["Pumpkin"]],
            "Juke the human so hard they have to leave out of embarrassment": [32,["Carrot", "Bok Choy"]],
            "JUST RUN!!!!": [32, ["Garlic"]]
        }
    },
    "32": {
        "text": "You've found a temporary hiding place under a shelf. Where to next?",
        "image" : "images/hiding.png",
"choices": {
            "Through the air vents": [49,["Carrot"]],
            "Mad dash through the store until you find an exit": [49, ["Jalapeno"]]
        }
    },
    "6":{
        "text": "Arrived at Mount Evergetable. What do you do at the base camp?",
        "image" : "images/base_evergetable.png",
"choices": {
            "Survey the Terrain and Plan the Best Route": [33, ["Tomato", "Broccoli"]],
            "Energize the Team with a Motivational Speech": [33, ["Bok Choy", "Green Bean", "Garlic"]],
            "Take a moment to appreciate the view of mount evergetable": [33, ["Carrot"]]
        }
    },
    "33": {
        "text": "As you near the summit, night falls and you have the choice to rest or keep going",
        "image" : "images/nightfalls.png",
"choices": {
            "Seek Shelter in a Nearby Cave": [34,["Leek", "Pumpkin"]],
            "Climb on!": [36,["Bok Choy", "Garlic"]]
        }
    },
    "34": {
        "text": "Inside the cave, you and your friends need to figure out how to \
                 pass the night.",
        "image" : "images/cave.png",
"choices" : {
            "Gather resources and make a makeshift camp": [37,["Carrot"]],
            "Collectively to decide what to do": [37, ["Garlic"]],
            "Telling exciting stories and reflect on the trek so far": [37, ["Green Bean"]],
            "Map out next steps of the journey": [37, ["Broccoli"]],
        }
    },
    "36": {
        "text": "The veggie squad continues, but they decide to take a quick break.",
        "image" : "images/evergetable_climb.png",
"choices": {
            "Stargazing break!": [37,["Napa Cabbage"]],
            "Why are we stopping?": [37,["Jalapeno"]],
            "Snack time! Food is fuel": [37, ["Green Bean"]],
            "Check in with everyone to see how they're doing": [37,["Broccoli", "Napa Cabbage", "Garlic"]],
        }
    },
    "37": {
        "text": "The climb continues for days. And you finally reach the top! \
        Take a look around you, you're on top of the world! Suddenly, a gust \
        of wind blows you off the mountain and you swirl and tumble until...",
        "image" : "images/vortex.png",
"choices" :{
            "Continue": [38,[]],
        }
    },
    "38": {
        "text": "You've been blown onto Cheese Land. You see rivers of fondue, \
        swiss cheese caves, and rosemary fields. What's your move?",
        "image" : "images/cheeseland.png",
"choices": {
            "Make a charcuterie board as a snack break": [20,["Leek"]],
            "Go inland in search of Cheese City": [20,["Onion", "Napa Cabbage", "Carrot"]],
            "Ask others what they think the group should do": [20,["Broccoli", "Green Bean", "Napa Cabbage"]],
            "Lead the pack using your knowledge of Cheese Land geography": [20,["Garlic"]]
        }
    }


};
const personalities = { 
    "Onion": 0,
    "Broccoli": 0,
    "Garlic": 0, // The Leader
    "Jalapeno": 0, // The Adventurer
    "Tomato": 0, // The Analyst
    "Green Bean": 0, // The Connector
    "Pumpkin": 0, // The Caregiver
    "Carrot": 0, // The Visionary
    "Potato": 0, // The Realist
    "Napa Cabbage": 0, // The Harmonizer
    "Bok Choy": 0, // The Performer
    "Leek": 0 // The Investigator
};

let currentState = 21;

function renderState(state) {
    // console.log("b");
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    storyImage.src = gameData[state].image;
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
    // console.log(personalities); 
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
    // console.log("calculating fate");
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }
    // console.log(maxVeggie);
    const storyText = document.getElementById('story-text');
    storyText.textContent = `Thank you for play testing`;
    // storyText.textContent = `You are a ${maxVeggie}`;
    document.getElementById('choices').style.display = 'none';
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
