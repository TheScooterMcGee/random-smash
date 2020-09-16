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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
        },
        {
            "name": "Dark Samus",
            "colour": "#616a7f",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
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
            "counter": 1,
            "recent": false
        },
        {
            "name": "Peach",
            "colour": "#f6d1f2",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Daisy",
            "colour": "#f6c84c",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Bowser",
            "colour": "#71a48d",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Ice Climbers",
            "colour": "#add1fd",
            "melee": true,
            "brawl": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Sheik",
            "colour": "#8883d5",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Zelda",
            "colour": "#fcecb0",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Dr. Mario",
            "colour": "#eb8282",
            "melee": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Pichu",
            "colour": "#e9e751",
            "melee": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Falco",
            "colour": "#7ebbe2",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Marth",
            "colour": "#73b4cf",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Lucina",
            "colour": "#73b4cf",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Young Link",
            "colour": "#b1d777",
            "melee": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Ganondorf",
            "colour": "#8c88b0",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Mewtwo",
            "colour": "#8c71c6",
            "melee": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Roy",
            "colour": "#88c073",
            "melee": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Chrom",
            "colour": "#d5d5d5",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Mr. Game & Watch",
            "colour": "#b1afa0",
            "melee": true,
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Meta Knight",
            "colour": "#6c7dbb",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Pit",
            "colour": "#a3d1ec",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Dark Pit",
            "colour": "#9873c6",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Zero Suit Samus",
            "colour": "#477ec2",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Wario",
            "colour": "#fce83c",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Snake",
            "colour": "#7c93a7",
            "brawl": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Ike",
            "colour": "#c0685a",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Pokémon Trainer",
            "colour": "#ffc929",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Diddy Kong",
            "colour": "#d7645e",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Lucas",
            "colour": "#e47e51",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Sonic",
            "colour": "#7cabee",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "King Dedede",
            "colour": "#fceb8e",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Olimar",
            "colour": "#d3f1bb",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Lucario",
            "colour": "#c2e7fc",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "R.O.B.",
            "colour": "#bcc1c5",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Toon Link",
            "colour": "#9ce999",
            "brawl": true,
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Wolf",
            "colour": "#d2d2d2",
            "brawl": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Villager",
            "colour": "#74b586",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Mega Man",
            "colour": "#98cae4",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Wii Fit Trainer",
            "colour": "#a8da93",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Rosalina & Luma",
            "colour": "#a7dbd4",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Little Mac",
            "colour": "#648974",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Greninja",
            "colour": "#6f88b2",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Palutena",
            "colour": "#9fe7c8",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Pac-Man",
            "colour": "#f1d76b",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Robin",
            "colour": "#cb98de",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Shulk",
            "colour": "#db7a8d",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Bowser Jr.",
            "colour": "#73c958",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Duck Hunt",
            "colour": "#9d7557",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Ryu",
            "colour": "#d66966",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Ken",
            "colour": "#d3dbe0",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Cloud",
            "colour": "#5da396",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Corrin",
            "colour": "#79b2c7",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Bayonetta",
            "colour": "#b2afe5",
            "four": true,
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Inkling",
            "colour": "#f868a3",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Ridley",
            "colour": "#616a7f",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Simon",
            "colour": "#ae4d3c",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Richter",
            "colour": "#438eb1",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "King K. Rool",
            "colour": "#8ab457",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Isabelle",
            "colour": "#74b586",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Incineroar",
            "colour": "#fddb24",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Piranha Plant",
            "colour": "#25b593",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Joker",
            "colour": "#a00f00",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Hero",
            "colour": "#cdb4f5",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Banjo & Kazooie",
            "colour": "#fac85a",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Terry",
            "colour": "#6eb5ff",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Byleth",
            "colour": "#a3e6bd",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        },
        {
            "name": "Min Min",
            "colour": "#ffff83",
            "removed": false,
            "favourite": false,
            "counter": 1,
            "recent": false
        }
    ];

     // This changes the class
     function changeClass(val, item, x) {
         if (x === "add") {
            return $(item).parent().parent().parent().parent().addClass(val);
         } else if (x === "remove") {
            return $(item).parent().parent().parent().parent().removeClass(val);
         }
    }


    //This creates a new fighter block for each character
    let createNewBlock = () => {
        for (let i = 0; i < names.length; i++) {
            document.querySelector("#fighters").innerHTML += `<li class='fighter_box'><div class='fighter_content'><div class="fighter_info" data-fighter='${names[i].name}'><img class='fighter_logo' src='assets/logos/${names[i].name.replace(/ /g, "_")}.svg' alt='${names[i].name}'><div><h3>${names[i].name}</h3><button class='favourite_btn' title='Favourite'><i class='fas fa-star'></i></button><button class='remove_btn' title='Remove from Random'><i class='fas fa-user-slash'></i></button></div></div><img class='fighter_img' src='assets/fighters/icon/${names[i].name.replace(/ /g, "_")}.webp' alt='${names[i].name}'></div><div class='gradient' style='background: linear-gradient(-45deg, ${names[i].colour} 20%, transparent 80%);'></div></li>`;
        }
    }
    createNewBlock;

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


    let recentFighters = [];

    function parseArray(val) {
        recentFighters.push(val);
        val.recent = true;
        if (recentFighters.length > 5) { // How many recent fighters are blocked
            recentFighters[0].recent = false;
            recentFighters[0].counter = 0;
            recentFighters.shift();
        }
    }

	    // This selectes a random fighter based on times since they were last picked	
    function newRandom() {	
        // Removes characters you hate	
        const n = names.filter(val => val.removed === false);	
        let fighter = n.filter(val => val.recent === false);	
        // Filters characters you love	
        const favourite = fighter.filter(val => val.favourite === true);	
        // Selects favourite	
        if (favourite.length > 0 && Math.random() * 10 > 6.6) { // How frequently you get random	
            fighter = favourite;	
        }	
        // The sum total of all character's counters combined	
        let total = 1;	
        for (let i = 0; i < fighter.length; i++) {	
            total += fighter[i].counter;	
            fighter[i].counter += 2; // This number makes getting repeats harder	
        }	
        // Picks a random number from total	
        const threshold = Math.floor(Math.random() * total);	
        // Runs through all character's counters until it's equal to threshold	
        total = 0;	
        for (let i = 0; i < fighter.length; i++) {	
            total += fighter[i].counter;	
            if (total >= threshold) {	
                parseArray(fighter[i]);	
                // Change fighter screen to show character info	
                $("#random-img").attr("src", "assets/fighters/" + fighter[i].name.replace(/ /g, "_") + ".webp");	
                $("#random-logo").attr("src", "assets/logos/" + fighter[i].name.replace(/ /g, "_") + ".svg");	
                $("#random-name").text(fighter[i].name);	
                $("#random-colour").css("background", "linear-gradient(-45deg, " + fighter[i].colour + " 20%, transparent 80%)");	
                break;	
            }	
        }	
    }	
    // Calls the function	
    const randomButton = document.querySelector("#random_btn");
    randomButton.addEventListener("click", newRandom());
    
    window.addEventListener("keydown", function (e){	
        if (e.keyCode == 82) {	
            newRandom();	
        }	
    });
    
    function save() {
        // Reset variables
        let removed = [];
        let favourite = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i].removed === true) {
                removed.push(names[i]);
            }
            if (names[i].favourite === true) {
                favourite.push(names[i]);
            }
        }
        Cookies.set("removed", JSON.stringify(removed), {expires: 365});
        Cookies.set("favourite", JSON.stringify(favourite), {expires: 365});
    }
    function load() {
        let removed = JSON.parse(Cookies.get("removed"));
        let favourite = JSON.parse(Cookies.get("favourite"));
        // Resets classes
        $(".fighter_info").each(function() {
            $(this).removeClass("removed favourite");
        });
        // Resets values
        for(let i = 0; i < names.length; i++) {
            names[i].removed = false;
            names[i].favourite = false;
        }
        // Adds favourites and removed
        for(let i = 0; i < names.length; i++) {
            for(let j = 0; j < removed.length; j++) {
                if (removed[j].name === names[i].name) {
                    names[i].removed = true;
                }
            }
            for (let k = 0; k < favourite.length; k++) {
                if (favourite[k].name === names[i].name) {
                    names[i].favourite = true;
                }
            }
        }
        // Adds removed classes
        for (let i = 0; i < removed.length; i++) {
            $(".fighter_info").each(function() {
                if ($(this).data("fighter") === removed[i].name) {
                    $(this).parent().parent().addClass("removed");
                }
            });
        }
        // Adds favourite classes
        for (let i = 0; i < favourite.length; i++) {
            $(".fighter_info").each(function() {
                if ($(this).data("fighter") === favourite[i].name) {
                    $(this).parent().parent().addClass("favourite");
                }
            });
        }
    }

    $("#save_btn").click(function() {
        save();
    });
    $("#load_btn").click(function() {
        load(this);
    });
    
    $("#reset").click(function() {
        // Resets classes
        $(".fighter-name").each(function() {
            $(this).parent().parent().removeClass("removed favourite");
        });
        // Resets values
        for(let i = 0; i < names.length; i++) {
            names[i].removed = false;
            names[i].favourite = false;
        }
    });
    
    $('#smash_64').click(function(){
        let smash64 = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i].sixtyfour) {
                names[i].removed = false
                smash64.push(names[i].name);
            } else {
                names[i].removed = true
            }
        }
        /*$(".fighter-name").each(function() {
            let element = $(this).data("fighter");
            for (let i = 0; i < smash64.length; i++) {
                console.log(smash64[i]);
                if (element != smash64[i]) {
                    $(this).addClass("removed");
                } else {
                    $(this).removeClass("removed");
                }
            }
        });*/
    });

    $('#DKTIME').click(function(){
        $("#random-img").attr("src", "../assets/fighters/donkey_kong.webp");
        $("#random-logo").attr("src", "../assets/logos/donkey_kong.svg");
        $("#random-name").text("Donkey Kong");
        $("#random-colour").css("background", "linear-gradient(-45deg, #f9df64 20%, transparent 80%)");
        for(let i = 0; i < names.length; i++) {
            names[i].removed = true;
        }
        $(".fighter-name").each(function() {
            let element = $(this).data("fighter");
            if (element != "Donkey Kong") {
                $(this).addClass("removed");
            }
        });
        names[1].removed = false;

        $("#container").fadeIn('slow');
        //Makes Screen golden
        $("#container").addClass("DKTIME-container");
        $('#DKTIME').css("pointer-events", "none");
        //DK RAP
        $('#dk_rap').get(0).play();
        setTimeout(function() {
            $("#container").fadeOut('slow');
            $('#DKTIME').css("pointer-events", "auto");
        }, 34500);
        // Makes Bananas rain
        var container = document.getElementById('animate');
        var emoji = ['🍌'];
        var circles = [];
        
        for (var i = 0; i < 15; i++) {
          addCircle(i * 150, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
          addCircle(i * 150, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
          addCircle(i * 150, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
          addCircle(i * 150, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
          addCircle(i * 150, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
          addCircle(i * 150, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
          addCircle(i * 150, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
          addCircle(i * 150, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
        }
        
        
        
        function addCircle(delay, range, color) {
          setTimeout(function() {
            var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
              x: -0.15 + Math.random() * 0.3,
              y: 1 + Math.random() * 1
            }, range);
            circles.push(c);
          }, delay);
        }
        
        function Circle(x, y, c, v, range) {
          var _this = this;
          this.x = x;
          this.y = y;
          this.color = c;
          this.v = v;
          this.range = range;
          this.element = document.createElement('span');
          /*this.element.style.display = 'block';*/
          this.element.style.opacity = 0;
          this.element.style.position = 'absolute';
          this.element.style.fontSize = '26px';
          this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
          this.element.innerHTML = c;
          container.appendChild(this.element);
        
          this.update = function() {
            if (_this.y > 800) {
              _this.y = 80 + Math.random() * 4;
              _this.x = _this.range[0] + Math.random() * _this.range[1];
            }
            _this.y += _this.v.y;
            _this.x += _this.v.x;
            this.element.style.opacity = 1;
            this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
            this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
            this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
          };
        }
        
        function animate() {
          for (var i in circles) {
            circles[i].update();
          }
          requestAnimationFrame(animate);
        }
        
        animate();
    });
});
