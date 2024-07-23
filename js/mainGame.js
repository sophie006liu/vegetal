const gameData = {
    "1": {
        "text": "You and your veggie friends want to hangout in VeggieVille. What snacks are you bringing?",
        "image" : "smaller_images/snackies.png",
"choices": {
            "Beef sticks": [2,["Jalapeno","Bok Choy"]],
            "Granola": [2,["Broccoli", "Garlic", "Pumpkin"]],
            "Cucumbers and carrots": [2,["Potato", "Leek", "Tomato"]],
            "Crackers and cheese": [2, ["Green Bean", "Carrot"]]
        }
    },
    "2": {
        "text": " Where are you guys going to go?",
        "image" : "smaller_images/where_to.png",
"choices": {
            "The beach": [3, ["Onion", "Green Bean", "Bok Choy"]],
            "A cute book store": [4,["Broccoli", "Tomato","Leek", "Carrot"]],
            "Your friend's apartment": [5,["Pumpkin", "Potato", "Napa Cabbage"]],
            "Mount Evergetable": [6, ["Garlic", "Jalapeno"]]
        }
    },
    "3": {
        "text": "After gearing up with sunglasses and sunscreen, what beach activity are you looking forward to?",
        "image" : "smaller_images/at_beach.png",
"choices": {
            "Build a sandcastle with your friends!": [41,["Garlic"]],
            "Set up a beach picnic": [41,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Explore tide pools and collect shells": [41,["Leek", "Carrot"]],
            "Read the book you've been eyeing": [41,[ "Broccoli", "Tomato"]],
        }
    },
    "41": {
        "text": "The sun feels so nice, everyone is having a blast! You start to think: ",
        "image" : "smaller_images/having_beach_fun.png",
"choices": {
            "This is fun, I'm grateful for my friends": [7,["Garlic", "Napa Cabbage"]],
            "This shell is so funky lol": [7,["Green Bean", "Bok Choy", "Pumpkin", "Tomato"]],
            "Love my friends, but I wanna go home": [7,["Leek", "Carrot"]],
            "What if we all went scuba diving": [7,["Broccoli", "Onion"]],
        }
    },
    "7": {
        "text": "Suddenly, a large shadow falls over the beach. \
                 A giant hand reaches down from the sky, and scoops you and \
                 your friends up, and the world turns dark...",
        "image" : "smaller_images/beach_disaster.png",
"choices": {
            "Continue": [8,[]]
        }
    },
    "8": {
        "text": "As you and your friends regain consciousness, you realize you're \
                in someone's pantry! Hurry and escape before the human eats you!",
        "image" : "smaller_images/in_pantry.png",   
"choices": {
            "Everyone sprint for the nearby window!": [9,["Jalapeno"]],
            "How about we stealth our way out the window instead": [9,["Tomato", "Potato"]],
            "Listen to your friend who suggests escaping through the backyard": [19, ["Carrot"]]
        }
    },
    "9": {
        "text": "Shoot! The window is stuck and won't slide open!",
        "image" : "smaller_images/window_locked.png",
"choices": {
            "How about we go down the hole instead?": [19, ["Napa Cabbage", "Tomato", "Potato"]],
            "Try using oil to loosen locking mechanism": [48, ["Carrot", "Broccoli", "Onion"]],
            "Chuck kitchen utensils to break the window >:)": [55, ["Jalapeno", "Green Bean"]]
        }
    },
    "48" :{
        "text": "Sweet! The window slides open nicely!",
        "image" : "smaller_images/window_jump.png",
"choices": {
            "Jump out the window with no hesitation. Cya!": [49, ["Jalapeno", "Garlic", "Broccoli"]],
            "Look for something to land on before jumping": [49,["Leek", "Tomato", "Napa Cabbage"]],
            "Um I'm scared of heights": [49, ["Potato"]]
        }
    },
    "55" :{
        "text" : "You and your friends start hurling plates, pots, pans, \
                  and as your friend throws the last bar of soap, the window\
                  breaks open!",
        "image" : "smaller_images/breaking_window.png",
"choices": {
                    "How did we get away with that": [49, ["Tomato"]],
                    "Go go go! The human is going to come soon": [49, ["Broccoli", "Garlic"]],
                    "Woohoo! Let's go!": [49, ["Pumpkin", "Green Bean", "Bok Choy"]]
                }
    },
    "49" :{    
        "text": "Stepping through the exit,transports you to the Corn Cosmos,\
                and you're now in a corn rocket floating in space!\
                What gadget are you going to tinker with to get back home?",
        "image" : "smaller_images/corn_space.png",
"choices": {
            "The lever that takes you into hyperspace (or whatever they call it) in the movies": [10,["Bok Choy"]],
            "*Methodically* type random stuff in the holographic keyboard above you": [10, ["Onion", "Green Bean"]]
        }
    },
    "10": {
        "text": "Buckle up! Stars and green galaxies fly by as the corn rocket shoots off!",
        "image" : "smaller_images/space_travel.png",
"choices": {
            "Wow. This is beautiful...": [43, ["Napa Cabbage"]],
            "Please take us back *veggie fingers intensely crossed*": [43,["Potato", "Broccoli"]],
            "I recognize that constellation! It's Ori-onion!": [43, ["Leek"]]
        }
    },
    "43" : {
        "text": "\"Umm where we are now...\" asks one of your friends. What should you guys do next?",
        "image" : "smaller_images/space_confusion.png",
"choices": {
            "Pull more levers and press more buttons!": [11,["Jalapeno", "Onion"]],
            "Look around for a map. There's surely one in the ship right?": [39, ["Leek", "Tomato", "Broccoli"]],
            "Organize everyone and discuss team plan": [39,["Garlic"]]
        }
    },
    "11" : {
        "text": "In your button frenzy, a glowing orb appears in the spaceship.",
        "image" : "smaller_images/glowing_space_orb.png",
"choices":{
            "Is this the end?": [42, ["Potato", "Napa Cabbage"]],
            "Everyone hide!": [42, ["Onion"]],
            "ALIENS!": [42, ["Bok Choy"]],
        }
    },
    "42": {
        "text": "A glowing popcorn emerges and yells, \"Stop you fools! Ugh,\
                VeggieVille natives, so stupid. Let me take you back.\"",
        "image" : "smaller_images/glowing_popcorn.png",
"choices": {
            "Thanks...": [12,["Potato"]],
            "THANK YOU! You saved us!":[12,["Pumpkin", "Green Bean", "Jalapeno"]],
            "Thank you so much! How can I repay you?": [12,["Onion", "Carrot"]]
        }
    },
    "39" : {
        "text": "After reading the rocket manual, your team \
            has an idea for what buttons to press.",
        "image" : "smaller_images/spaceplan.png",
"choices": {
            "Full send! VeggieVille here we come": [40,["Jalapeno", "Green Bean", "Broccoli"]],
            "We should double check...": [40, ["Broccoli", "Carrot"]],
            "Someone else press the button, I can't do it": [40, ["Potato"] ],
            "Let's all press the button together!": [40, ["Napa Cabbage", "Green Bean"]]
        }
    },
    "40": {
        "text": "\"Here goes nothing!\" As Link the Leek reaches for the lever, \
        Oli the Onion yells \"Wait! I don't feel good about this. I'm really scared...\". \
        What do you do?",
        "image" : "smaller_images/pull_lever.png",
"choices": {
            "It was me. I was the one that yelled": [44, ["Pumpkin", "Green Bean", "Carrot"]],
            "Re-explain the plan. See? Nothing to be afraid of": [44,["Onion", "Broccoli"]],
            "Stand back and let someone else handle the situation": [44, ["Potato", "Tomato"]],
            "Go over and comfort them.": [44,["Green Bean", "Napa Cabbage"]]
        }
    },
    "44": {
        "text": "At last, you all pull the lever and blast off! \
            The rocket halts, and the corn husk doors release. \
            You're back in VeggieVille!",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Time to hit up Club Carrot! I need to let loose": [13, ["Bok Choy", "Jalapeno"]],
            "Go to your favorite spot to unwind by yourself": [13, ["Potato"]],
            "Call all of VeggieVille for a picnic and to tell everyone what happened": [13, ["Garlic"]],
            "Throw up from the rocket-sickness": [13, ["Pumpkin"]]
        }
    },
    "12" : {
        "text": "The kernel does a magical twirl, and a pop! \
                You find yourself back in VeggieVille. What do you do now?",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Wait...was that an alien?": [13,["Bok Choy", "Leek" ]],
            "Cry. That was a lot to go through": [13,["Napa Cabbage"]],
            "Celebrate with your friends!": [13,["Tomato", "Jalapeno", "Carrot", "Broccoli"]],
            "Take a breather somewhere secluded": [13,["Pumpkin", "Leek"]]
        }
    },
    "4":{
        "text": "So many books to choose from! What catches your eye first?",
        "image" : "smaller_images/which_book.png",
"choices" : {
            "A whimsical, heartwarming slice of life novel.": [15,["Napa Cabbage", "Pumpkin"]],
            "The Great Gourdsby, classic literature": [15,["Broccoli"]],
            "Sherlettuce Holmes, a thrilling mystery novel": [15,["Leek", "Carrot"]],
            "A self help book": [15, ["Onion"]]
        }
    },
    "15" :{
        "text": "There are a couple of events going on today at the book store! Which do you go to?",
        "image" : "smaller_images/bookstore_activities.png",
"choices" : {
            "Join a book club discussion on the hottest new book": [16,["Green Bean", "Pumpkin"]],
            "Book scavenger hunt around the store for a free prize":[16,["Jalapeno", "Leek"]],
            "A creative writing workshop and storytelling event":[16, ["Onion", "Bok Choy", "Carrot"]]     
        }
    },
    "16":{
       "text": "As you leave the bookstore, an insurmountable gust of wind lifts you up. \
        Everyone is buffeted in a vortex up and up...",
        "image" : "smaller_images/vortex.png",
"choices":{
            "Goodbye everyone it was nice knowing you": [17,["Potato","Green Bean", "Tomato"]],
            "Error 404 veggie brain is in a state of panic": [17, ["Napa Cabbage"]],
            "Everyone try holding hands!": [17,["Broccoli", "Onion", "Carrot"]],
            "Weeee!": [17,["Jalapeno", "Pumpkin"]],
       } 
    },
    "17": {
        "text": "The whirlwind stops! You feel a sharp chilly breeze...\
                 because you're trapped in a human's fridge!",
        "image" : "smaller_images/in_fridge.png",
"choices": {
            "Continue": [50, []]
        }
    },
    "50": {
        "text": "Get out ASAP before you get eaten!",
        "image" : "smaller_images/in_fridge.png",
"choices":{
            "Hide and wait for the refrigerator door to open": [18,["Broccoli", "Pumpkin"]],
            "Rally the veggie friends to push the door. Roll out!": [18,["Jalapeno", "Bok Choy"]],
            "Try to unplug the refrigerator from the inside": [18, ["Onion","Leek"]],
            "Do what the others do": [18,["Potato"]]
        }
    },
    "18": {
        "text": "Miraculously, you made it out the fridge, but now you need to get out \
                of the house! What's next?",
        "image" : "smaller_images/out_fridge.png",
"choices": {
            "Hop on the dog's back!": [19,["Jalapeno"]],
            "Stealth your way to the front door": [19, ["Tomato", "Leek"]],
            "Jump out the nearby window!": [9, ["Onion", "Bok Choy"]]
        }
    },
    "19": {
        "text": "As you cross the door step, you're transported to CheeseLand, land of fondue rivers and \
            swiss cheese caves. What's your next move?",
        "image" : "smaller_images/cheeseland.png",
"choices": {
            "Make a charcuterie board as a snack break": [20, ["Onion", "Green Bean"]],
            "Go inland in search of the Cheese Castle": [20,["Leek", "Broccoli"]],
            "Ask others what they think the group should do": [20, ["Napa Cabbage", "Green Bean", "Pumpkin"]]
        }
    },
    "20":{
        "text": "Mid charcuterie board making, a gouda cheese wheel yells, \
                \"What are you doing? This is sacred cheese you're eating!\"",
        "image" : "smaller_images/mad_gouda.png",
"choices" : {
            "You want some?": [21,["Onion", "Potato", "Jalapeno", "Green Bean"]],
            "Apologize immediately and ask how to get to Cheese Castle":[21, ["Pumpkin", "Leek"]]
        }
    },
    "21": {
        "text": "Gouda immediately takes you to the Cheese King, hoping your group \
                leaves as soon as possible. However, the king must be \
                must be entertained in order to be seen.",
        "image" : "smaller_images/cheese_castle.png",
"choices":{
            "Sing and dance the CheeseLand anthem": [22,["Napa Cabbage", "Pumpkin"]],
            "Offer some leftover charcuterie to the king": [22,["Jalapeno", "Potato"]],
            "Comedy skit but all the punch lines are exclusively cheese puns": [22, ["Bok Choy", "Onion", "Broccoli"]]
        }
    },
    "22": {
        "text": "The Cheese King laughs, but you're not sure if he's laughing with you or at you...",
        "image" : "smaller_images/performance.png",
"choices": {
            "Keep going, the show must go on!": [51,["Bok Choy", "Garlic", "Carrot"]],
            "Guy's I'm not sure if this is working": [51, ["Tomato", "Leek"]],
            "Try to ignore the king and power through": [51, ["Napa Cabbage", "Broccoli"]]
        }
    },
    "51": {
        "text": "He chuckles, \"I see you desire to return to VeggieLand. Tell me, \
        what do you miss the most about home?",
        "image" : "smaller_images/happy_king.png",
"choices": {
            "The warm sunlight and fresh air": [23,["Jalapeno", "Potato", "Napa Cabbage"]],
            "The hanging out with your veggie friends": [23,["Leek", "Green Bean", "Carrot"]],
            "The smell of your grandma's cherry pies": [23,["Pumpkin"]],
            "Weekly frisbee games at the park": [23,["Bok Choy", "Broccoli"]]
        }
    },
    "23": {
        "text": "\"Very well. I will send you on a guided all-expensed boat to back home.\" \
                    Where do you guys want to visit on the way back?",
        "image" : "smaller_images/boat.png",
"choices":{
            "Mushroom Island, known for pioneering mushroom tech": [24,["Tomato", "Onion", "Leek"]],
            "Dandelion Plains, known for its sunshine and farms": [25,["Potato", "Napa Cabbage", "Green Bean", "Pumpkin", "Carrot"]],
            "Forget-Me-Not Island, largely unexplored territory": [26, ["Jalapeno", "Onion", "Broccoli"]]
        }
    },
    "24": {
        "text": "Arrived at Mushroom Island! What are you gonna do?",
        "image" : "smaller_images/mushroom.png",
"choices" :{
            "Get a new mushroom telephone, its got wider coverage with its latest spore dispersion technology": [27,["Tomato", "Carrot"]],
            "Party on da MushrooSoft roof, they're debuting their latest vehicle, the Vroomie Schroomie": [27,["Bok Choy", "Carrot"]],
            "Buy a little mushroom keepsake for you and your friends": [27, ["Napa Cabbage", "Green Bean"]],
            "I just wanna go back home tbh": [27, ["Potato", "Garlic"]]
        }
    },
    "25": {
        "text": "Arrived at Dandelion Plains! What are you gonna do?",
        "image" : "smaller_images/dandelion.png",
"choices": {
            "Make dandelion crowns with friends": [27,["Green Bean", "Carrot", "Bok Choy"]],
            "Buy some dandelion honey to gift to your cheese navigator and cheese king": [27,["Napa Cabbage", "Onion", "Pumpkin"]],
            "Re-check the weather to make sure you'll be able to get home on as planned ": [27,["Tomato", "Garlic", "Leek"]],
        }
    },
    "26": {
        "text": "Arrived at Forget-Me-Not Island! What are you gonna do?",
        "image" : "smaller_images/forgetmenot.png",
"choices": {
            "Explore to make the first-ever forget me not island map!": [27,["Garlic", "Leek"]],
            "Paint various views to share with VeggieVille": [27,["Napa Cabbage", "Green Bean"]],
            "I wanna go home": [27,["Tomato", "Potato"]],
            "Have a photo shoot with your friends in the forget me nots": [27,["Jalapeno", "Pumpkin", "Carrot", "Carrot"]]
        }
    },
    "27": {
        "text": "After your pit stop, you finally arrive home in VeggieLand. What are you doing first?",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Party at Club Carrot. Dance the night away!": [13,["Jalapeno"]],
            "Spend some alone time at your favorite cozy bench/spot.": [13,["Pumpkin"]],
            "Organize a community picnic to share your adventures": [13,["Napa Cabbage", "Green Bean"]],
            "Hangout with your friends at a restaurant": [13,["Pumpkin", "Garlic", "Carrot"]]
        }
    },
    "13": {
        "text": "Last question! After a night of good rest, the next morning you:",
        "image" : "smaller_images/another_day.png",
"choices" : {
            "Go to a cafe to finally read that book": [0,["Napa Cabbage", "Potato", "Carrot"]],
            "Head to work, get that bag": [0,["Tomato", "Leek"]],
            "Organize a community clean up day": [0,["Pumpkin", "Green Bean", "Garlic"]],
            "Go on a veggie run": [0, ["Jalapeno", "Bok Choy"]]
        } 
    },
    "5":{
        "text": "What are you guys gonna do at the apartment?",
        "image" : "smaller_images/at_apartment.png",
"choices": {
            "Arts and crafts": [28,["Carrot", "Pumpkin"]],
            "Drink lots of beverages (wink wink)": [28,["Bok Choy", "Potato"]],
            "Play games! Loser has to post an embarassing pic on Vegstagram": [28,["Tomato", "Garlic"]],
            "Gossip!!!": [28, ["Napa Cabbage"]]
        }
    },
    "28": {
        "text": "Leo the Leek goes off to get some snacks for everyone, but shortly \
                after he leaves, you hear him scream!",
        "image" : "smaller_images/apartment.png",
"choices": {
            "SCREAM!!!": [45, ["Bok Choy", "Carrot"]],
            "Leo you good?": [45,["Green Bean", "Garlic"]],
            "Oh no! Is Leo ok?": [45, ["Tomato", "Pumpkin", "Onion"]]
        }
    },
    "45": {
        "text": "You don't hear a response from Leo. You should check in on him...",
        "image" : "smaller_images/no_response.png",
"choices": {
            "Mobilize everyone and proceed towards the scream": [29,["Broccoli", "Garlic"]],
            "Stay in the middle of the pack": [29, ["Napa Cabbage", "Green Bean"]],
            "Linger in the back, you're scared": [29, ["Tomato", "Pumpkin", "Carrot"]]
        }
    },
    "29": {
        "text": "You follow the noise of the scream, and you’re now at your friends \
                room. What’s the first thing you investigate?",
        "image" : "smaller_images/room.png",
"choices" : {
            "Heck no I’m not investigating!": [30,["Tomato"]],
            "The open window and it’s billowing curtains… it’s suspicious": [30,["Leek"]],
            "The closet. It looks slightly disheveled?": [30,["Broccoli"]],
            "Call the veggie police!": [30, ["Carrot", "Garlic"]]
        }
    },
    "30": {
        "text": "As you investigate, the room turns dark! You feel an overwhelming \
                presence swoop you and your friends out of the window!",
        "image" : "smaller_images/beach_disaster.png",
"choices": {
                "Struggle against whatever it is and try to escape": [46, ["Onion"]],
                "Scream for help": [46, ["Garlic"]],
                "Cry a little": [46, ["Tomato", "Pumpkin"]],
                "Am I gonna die?": [46, ["Potato"]]
        }
    },
    "46": {
        "text": "As light enters back into your world, you realize you’re in a grocery bag!",
        "image" : "smaller_images/grocery_bag.png",
"choices" : {
            "Everyone jump! That'll break the bag right?": [31,["Garlic", "Onion"]],
            "Use your plant abilities to poke holes into bag": [31,["Green Bean"]],
            "Photosynthesize extra fast, get big = break the bag": [31, ["Broccoli", "Jalapeno"]]
        }
    },
    "31": {
        "text": "Success! You've broken free from the grocery bag. Where do you go now? \
                The human is reaching for you!",
        "image" : "smaller_images/grocery_bag_out.png",
"choices": {
            "Panic! There's too much going on": [32,["Pumpkin", "Potato", "Napa Cabbage"]],
            "Juke the human so hard they have to leave out of embarrassment": [32,["Jalapeno", "Bok Choy"]],
            "JUST RUN!!!!": [32, ["Garlic", "Carrot", "Broccoli"]]
        }
    },
    "32": {
        "text": "You've found a temporary hiding place under a shelf. Where to next?",
        "image" : "smaller_images/hiding.png",
"choices": {
            "Through the air vents": [49,["Carrot", "Broccoli", "Tomato"]],
            "Mad dash through the store until you find an exit": [49, ["Jalapeno", "Onion"]]
        }
    },
    "6":{
        "text": "Arrived at Mount Evergetable. What do you do at the base camp?",
        "image" : "smaller_images/base_evergetable.png",
"choices": {
            "Survey the Terrain and Plan the Best Route": [33, ["Tomato", "Broccoli"]],
            "Energize the Team with a Motivational Speech": [33, ["Bok Choy", "Green Bean", "Garlic"]],
            "Take a moment to appreciate the view of mount evergetable": [33, ["Carrot"]]
        }
    },
    "33": {
        "text": "As you near the summit, night falls and you have the choice to rest or keep going",
        "image" : "smaller_images/nightfalls.png",
"choices": {
            "Seek Shelter in a Nearby Cave": [34,["Leek", "Pumpkin", "Tomato"]],
            "Climb on!": [36,["Bok Choy", "Garlic"]]
        }
    },
    "34": {
        "text": "Inside the cave, you and your friends need to figure out how to \
                 pass the night.",
        "image" : "smaller_images/cave.png",
"choices" : {
            "Gather resources and make a makeshift camp": [37,["Carrot", "Tomato"]],
            "Collectively to decide what to do": [37, ["Garlic"]],
            "Telling exciting stories and reflect on the trek so far": [37, ["Green Bean"]],
            "Map out next steps of the journey": [37, ["Broccoli"]],
        }
    },
    "36": {
        "text": "The veggie squad continues, but they decide to take a quick break.",
        "image" : "smaller_images/evergetable_climb.png",
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
        of wind blows you off the mountain and you swirl and tumble off...",
        "image" : "smaller_images/vortex.png",
"choices" :{
            "Continue": [38,[]],
        }
    },
    "38": {
        "text": "You've been blown onto Cheese Land. You see rivers of fondue, \
        swiss cheese caves, and rosemary fields. What's your move?",
        "image" : "smaller_images/cheeseland.png",
"choices": {
            "Make a charcuterie board as a snack break": [20,["Leek", "Jalapeno"]],
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

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
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
    };
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
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Veggie ID! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
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
