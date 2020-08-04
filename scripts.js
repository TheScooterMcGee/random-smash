$(document).ready(function() {

    var names = [{
            "name": "Mario",
            "colour": "#eb8282",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Donkey Kong",
            "colour": "#f9df64",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Link",
            "colour": "#42b1dd",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Samus",
            "colour": "#616a7f",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Dark Samus",
            "colour": "#616a7f",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Yoshi",
            "colour": "#95d47b",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Kirby",
            "colour": "#fbc1d4",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Fox",
            "colour": "#4e8ee3",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Pikachu",
            "colour": "#fde22a",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Luigi",
            "colour": "#76b160",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Ness",
            "colour": "#e35d5a",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Captain Falcon",
            "colour": "#9f9be1",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Jigglypuff",
            "colour": "#e79cea",
            "sixtyfour": true,
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Peach",
            "colour": "#f6d1f2",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Daisy",
            "colour": "#f6c84c",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Bowser",
            "colour": "#71a48d",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Ice Climbers",
            "colour": "#add1fd",
            "melee": true,
            "brawl": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Sheik",
            "colour": "#8883d5",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Zelda",
            "colour": "#fcecb0",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Dr. Mario",
            "colour": "#eb8282",
            "melee": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Pichu",
            "colour": "#e9e751",
            "melee": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Falco",
            "colour": "#7ebbe2",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Marth",
            "colour": "#73b4cf",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Lucina",
            "colour": "#73b4cf",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Young Link",
            "colour": "#b1d777",
            "melee": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Ganondorf",
            "colour": "#8c88b0",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Mewtwo",
            "colour": "#8c71c6",
            "melee": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Roy",
            "colour": "#88c073",
            "melee": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Chrom",
            "colour": "#d5d5d5",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Mr. Game & Watch",
            "colour": "#b1afa0",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Meta Knight",
            "colour": "#6c7dbb",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Pit",
            "colour": "#a3d1ec",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Dark Pit",
            "colour": "#9873c6",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Zero Suit Samus",
            "colour": "#477ec2",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Wario",
            "colour": "#fce83c",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Snake",
            "colour": "#7c93a7",
            "brawl": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Ike",
            "colour": "#c0685a",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Pokémon Trainer",
            "colour": "#ffc929",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Diddy Kong",
            "colour": "#d7645e",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Lucas",
            "colour": "#e47e51",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Sonic",
            "colour": "#7cabee",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "King Dedede",
            "colour": "#fceb8e",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Olimar",
            "colour": "#d3f1bb",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Lucario",
            "colour": "#c2e7fc",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "R.O.B.",
            "colour": "#bcc1c5",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Toon Link",
            "colour": "#9ce999",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Wolf",
            "colour": "#d2d2d2",
            "brawl": true,
            "removed": false,
            "favourite": false,
            "counter": 0
        },
        {
            "name": "Villager",
            "colour": "#74b586",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Mega Man",
            "colour": "#98cae4",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Wii Fit Trainer",
            "colour": "#a8da93",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 3000
        },
        {
            "name": "Rosalina & Luma",
            "colour": "#a7dbd4",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Little Mac",
            "colour": "#648974",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Greninja",
            "colour": "#6f88b2",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Palutena",
            "colour": "#9fe7c8",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Pac-Man",
            "colour": "#f1d76b",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Robin",
            "colour": "#cb98de",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Shulk",
            "colour": "#db7a8d",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Bowser Jr.",
            "colour": "#73c958",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Duck Hunt",
            "colour": "#9d7557",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Ryu",
            "colour": "#d66966",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Ken",
            "colour": "#d3dbe0",
            "removed": false,
            "favourite": false,
            "counter": 0
        },
        {
            "name": "Cloud",
            "colour": "#5da396",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Corrin",
            "colour": "#79b2c7",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Bayonetta",
            "colour": "#b2afe5",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Inkling",
            "colour": "#f868a3",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Ridley",
            "colour": "#616a7f",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Simon",
            "colour": "#ae4d3c",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Richter",
            "colour": "#438eb1",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "King K. Rool",
            "colour": "#8ab457",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Isabelle",
            "colour": "#74b586",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Incineroar",
            "colour": "#fddb24",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Piranha Plant",
            "colour": "#25b593",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Joker",
            "colour": "#a00f00",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Hero",
            "colour": "#cdb4f5",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Banjo & Kazooie",
            "colour": "#fac85a",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Terry",
            "colour": "#6eb5ff",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Byleth",
            "colour": "#a3e6bd",
            "removed": false,
            "favourite": false,
            "counter": 1
        },
        {
            "name": "Min Min",
            "colour": "#ffff83",
            "removed": false,
            "favourite": false,
            "counter": 1
        }
    ];
    //This generates a random fighter
    /* $('#random_btn').click(function() {
         //Remove fighters you hate
         var filter_removed = names.filter(val => val.removed === false);
         //Filter favourite characters
         var filter_favourite = names.filter(val => val.favourite === true);
         
         filter_removed.forEach(function(val) {
             //console.log(val.name);
         });
         filter_favourite.forEach(function(val) {
             //console.log(val.name);
         });
         //This updates counter for each fighter +1
         filter_removed.forEach(function(val) {
             val.counter = val.counter + 1;
             //console.log(val.name);
             //console.log(val.counter);
         });





         //Picks random fighter
     var random_fighter = fighters[Math.floor(Math.random() * fighters.length)];
     if(Math.round(Math.random() * 10) > 5) { //Pick a random fighter
         $("#demo").text(random_fighter);
         console.log(random_fighter);
     } else if(favourite_fighter == "") { //If there are no favourites, pick a regular fighter
         $("#demo").text(random_fighter);
         console.log(random_fighter);
     } else { //If there are favourites and the dice roll says so
         var random_fighter = favourite_fighter[Math.floor(Math.random() * favourite_fighter.length)];
         $("#demo").text(random_fighter);
         console.log(random_fighter);
     }




     //This creates a new fighter block for each character
     names.forEach(function(val) {
         $('#fighters').append(`<li class='fighter-box'><div class='fighter-name' data-fighter='${val.name}'><img class='series-logo' src='../assets/logos/${val.name.replace(/ /g, "_")}.svg' alt='${val.name}'><div class='fighter-info'><h3>${val.name}</h3><button class='favourite_btn'><i class='fas fa-star' title='Favourite'></i></button><button class='remove_btn'><i class='fas fa-user-slash' title='Remove from Random'></i></button></div><img class='fighter-icon' src='../assets/fighters/icon/${val.name.replace(/ /g, "_")}.webp' alt='${val.name}'></div><div class='gradient' style='background: linear-gradient(-45deg, ${val.colour} 20%, transparent 80%);'></li>`);
     });*/

     function changeClass(val, item, x) {
         if (x === "add") {
            return $(item).parent().parent().addClass(val);
         } else if (x === "remove") {
            return $(item).parent().parent().removeClass(val);
         }
    }


    //This creates a new fighter block for each character
    function createNewBlock() {
        for (let i = 0; i < names.length; i++) {
            $('#fighters').append(`<li class='fighter-box'><div class='fighter-name' data-fighter='${names[i].name}'><img class='series-logo' src='assets/logos/${names[i].name.replace(/ /g, "_")}.svg' alt='${names[i].name}'><div class='fighter-info'><h3>${names[i].name}</h3><button class='favourite_btn'><i class='fas fa-star' title='Favourite'></i></button><button class='remove_btn'><i class='fas fa-user-slash' title='Remove from Random'></i></button></div><img class='fighter-icon' src='assets/fighters/icon/${names[i].name.replace(/ /g, "_")}.webp' alt='${names[i].name}'></div><div class='gradient' style='background: linear-gradient(-45deg, ${names[i].colour} 20%, transparent 80%);'></li>`);
        }
    }
    createNewBlock();

    // This adds or removes characters from both favourites and removed
    function setFavRem(val, item) {
        let fighter;
        const favRem = $(item).parent().parent().data("fighter");

        for (let i = 0; i < names.length; i++) {
            if (names[i].name === favRem) {
                fighter = names[i];
                break;
            }
        }
        if (fighter[val] === false) {
            fighter[val] = true;
            changeClass(val, item, "add");
        } else {
            fighter[val] = false;
            changeClass(val, item, "remove");
        }
    }
    $('.favourite_btn').click(function() {
        setFavRem("favourite", this);
    });
    $('.remove_btn').click(function() {
        setFavRem("removed", this);
    });


    // This selectes a random fighter based on times since they were last picked
    $('#random_btn').click(function() {
        // Removes characters you hate
        let fighter = names.filter(val => val.removed === false);
        // Filters characters you love
        const favourite = fighter.filter(val => val.favourite === true);
        // Selects favourite
        if (Math.random() * 10 > 6.6) {
            fighter = favourite;
        }
        // The sum total of all character's counters combined
        let total = 1;
        for (let i = 0; i < fighter.length; i++) {
            total += fighter[i].counter;
            fighter[i].counter += 2;
        }
        // Picks a random number from total
        const threshold = Math.floor(Math.random() * total);
        // Runs through all character's counters until it's equal to threshold
        total = 0;
        for (let i = 0; i < fighter.length; i++) {
            total += fighter[i].counter;
            if (total >= threshold) {
                // Change selected character's counter back to 1
                fighter[i].counter = 1;
                // Change fighter screen to show character info
                $("#random-img").attr("src", "assets/fighters/" + fighter[i].name.replace(/ /g, "_") + ".webp");
                $("#random-logo").attr("src", "assets/logos/" + fighter[i].name.replace(/ /g, "_") + ".svg");
                $("#random-name").text(fighter[i].name);
                $("#random-colour").css("background", "linear-gradient(-45deg, " + fighter[i].colour + " 20%, transparent 80%)");
                break;
            }
        }
    });


    let removed = [];
    let favourite = [];


    function save() {
        // Reset variables
        removed = [];
        favourite = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i].removed === true) {
                removed.push(names[i].name);
            }
            if (names[i].favourite === true) {
                favourite.push(names[i].name);
            }
        }
        Cookies.set("removed", removed, {expires: 365});
        Cookies.set("favourite", favourite, {expires: 365});
        console.log(removed);
        console.log(favourite);
    }
    function load() {
        // let removed = Cookies.get("removed");
        // let favourite = Cookies.get("favourite");
        for (let i = 0; i < names.length; i++) {
            for (let j = 0; j < removed.length; j++) {
                if (removed[j] === names[i].name) {
                    names[i].removed = true;
                    changeClass("removed", this, "add");
                } else {
                    changeClass("removed", this, "remove");
                }
            }
            for (let c = 0; c < favourite.length; c++) {
                if (favourite[c] === names[i].name) {
                    names[i].favourite = true;
                    changeClass("favourite", this, "add");
                } else {
                    changeClass("favourite", this, "remove");
                }
            }
        }
        console.log(removed);
        console.log(favourite);
    }

    $("#save_btn").click(function() {
        save();
    });
    $("#load_btn").click(function() {
        load();
    });
});
