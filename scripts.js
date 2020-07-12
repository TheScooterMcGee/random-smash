$(document).ready(function(){
//cookies to save your preferences

//Global Variables
//Games
var smash64 = ["Luigi", "Mario", "Donkey Kong", "Link", "Samus", "Captain Falcon", "Ness", "Yoshi", "Kirby", "Fox", "Pikachu", "Jigglypuff"];
var melee = ["Dr. Mario", "Mario", "Luigi", "Bowser", "Peach", "Yoshi", "Donkey Kong", "Captain Falcon", "Ganondorf", "Falco", "Fox", "Ness", "Ice Climbers", "Kirby", "Samus", "Zelda", "Sheik", "Link", "Young Link", "Pichu", "Pikachu", "Jigglypuff", "Mewtwo", "Mr. Game & Watch", "Marth", "Roy"];
var brawl = ["Mario", "Donkey Kong", "Link", "Samus", "Zero Suit Samus", "Kirby", "Fox", "Pikachu", "Marth", "Mr. Game & Watch", "Luigi", "Diddy Kong", "Zelda", "Sheik", "Pit", "Meta Knight", "Falco", "Pokémon Trainer", "Ike", "Snake", "Peach", "Yoshi", "Ganondorf", "Ice Climbers", "King Dedede", "Wolf", "Lucario", "Ness", "Sonic", "Bowser", "Wario", "Toon Link", "R.O.B.", "Olimar", "Captain Falcon", "Jigglypuff", "Lucas"];
var smash4 = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Rosalina & Luma", "Bowser Jr.", "Wario", "Donkey Kong", "Diddy Kong", "Mr. Game & Watch", "Little Mac", "Link", "Zelda", "Sheik", "Ganondorf", "Toon Link", "Samus", "Zero Suit Samus", "Pit", "Palutena", "Marth", "Ike", "Robin", "Duck Hunt", "Kirby", "King Dedede", "Meta Knight", "Fox", "Falco", "Pikachu", "Pokémon Trainer", "Lucario", "Jigglypuff", "Greninja", "R.O.B.", "Ness", "Captain Falcon", "Villager", "Olimar", "Wii Fit Trainer", "Shulk", "Dr. Mario", "Dark Pit", "Lucina", "Pac-Man", "Mega Man", "Sonic", "Mewtwo", "Lucas", "Roy", "Ryu", "Cloud", "Corrin", "Bayonetta"];
var ultimate = ["Mario", "Donkey Kong", "Link", "Samus", "Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff", "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokémon Trainer", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min"];

//Series
var s_super_mario = ['Mario', 'Luigi', 'Peach', 'Daisy', 'Bowser', 'Dr. Mario', 'Rosalina & Luma', 'Bowser Jr.', 'Piranha Plant'];
var s_donkey_kong = ['Donkey Kong', 'Diddy Kong', 'King K. Rool'];
var s_legend_of_zelda = ['Link', 'Sheik', 'Zelda', 'Young Link', 'Ganondorf', 'Toon Link'];
var s_metroid = ['Samus', 'Dark Samus', 'Zero Suit Samus', 'Ridley'];
var s_yoshi = ['Yoshi'];
var s_kirby = ['Kirby', 'Meta Knight', 'King Dedede'];
var s_star_fox = ['Fox', 'Falco', 'Wolf'];
var s_pokemon = ['Pikachu', 'Jigglypuff', 'Pichu', 'Mewtwo', 'Pokémon Trainer', 'Lucario', 'Greninja', 'Incineroar'];
var s_earthbound = ['Ness', 'Lucas'];
var s_f_zero = ['Captain Falcon'];
var s_ice_climbers = ['Ice Climbers'];
var s_fire_emblem = ['Marth', 'Lucina', 'Roy', 'Chrom', 'Ike', 'Robin', 'Corrin', 'Byleth'];
var s_game_watch = ['Mr. Game & Watch'];
var s_kid_icarus = ['Pit', 'Dark Pit', 'Palutena'];
var s_wario_ware = ['Wario'];
var s_metal_gear_solid = ['Snake'];
var s_sonic = ['Sonic'];
var s_pikmin = ['Olimar'];
var s_rob = ['R.O.B.'];
var s_animal_crossing = ['Villager', 'Isabelle'];
var s_mega_man = ['Mega Man'];
var s_wii_fit = ['Wii Fit Trainer'];
var s_punch_out = ['Little Mac'];
var s_pac_man = ['Pac-Man'];
var s_xenoblade = ['Shulk'];
var s_duck_hunt = ['Duck Hunt'];
var s_street_fighter = ['Ryu', 'Ken'];
var s_final_fantasy = ['Cloud'];
var s_bayonetta = ['Bayonetta'];
var s_splatoon = ['Inkling'];
var s_castlevania = ['Simon', 'Richter'];
var s_persona = ['Joker'];
var s_dragon_quest = ['Hero'];
var s_banjo_kazooie = ['Banjo & Kazooie'];
var s_fatal_fury = ['Terry'];
var s_arms = ['Min Min'];


var fighters = ultimate;
var favourites = [/*favouritesCookie*/];
var favourite_fighter = favourites;
var deselected = [/*deselectedCookie*/];


//THIS RIGHT HERE CREATES A NEW LIST ITEM FOR EVERY CHARACTER
var str = '<ul>'
fighters.forEach(function(fighters) {
  str += '<li class="fighter_name" data-fighter="'+ fighters + '">' + '<div class="fighter_box">' + 
  '<p>' + fighters + '</p>' + '<i class="fas fa-star" title="Favourite"></i>' + '<i class="fas fa-user-slash" title="Remove from Random"></i>' +
  '<img loading="lazy" src="assets/fighters/icon/' + fighters.replace(/ /g,"_") + '.webp">' + '</div>' + '</li>';
}); 
str += '</ul>';
document.getElementById("fighter_list").innerHTML = str;











$('#random_btn').click(function() {
    //This gets rid of class "red"
    $('.fighter_name').removeClass("red");
    //Removes characters you hate
    fighters = fighters.filter( function( el ) {
        return !deselected.includes( el );
      } );
    favourite_fighter = favourite_fighter.filter( function( el ) {
        return !deselected.includes( el );
    } );
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
        console.log("THIS IS A FAVOURITE");
    }
    $('.fighter_name').each(function(){
        if($(this).data("fighter") === random_fighter) {
            $(this).addClass("red");
            $('#img').attr("src","assets/fighters/icon/" + random_fighter.replace(/ /g,"_") + ".webp");
        }
        //Dumb fix, but it resets the fighter list
        fighters = ultimate;
        favourite_fighter = favourites;
    });
});












//Makes the Deselect button work
var deselectedName = "";
$('.fighter_box .fa-user-slash').on("click", function() {
    deselectedName = $(this).closest("li").data("fighter");
    let index = deselected.indexOf(deselectedName);
    if (index >= 0) {
        deselected.splice(index, 1);
    } else {
        deselected.push(deselectedName);
    }
    $(this).parent().toggleClass("deselected");
    console.log(deselected);
});
//Makes the favourite button work
var favouritesName = "";
$('.fighter_box .fa-star').on("click", function() {
    favouritesName = $(this).closest("li").data("fighter");
    let index = favourites.indexOf(favouritesName);
    if (index >= 0) {
        favourites.splice(index, 1);
    } else {
        favourites.push(favouritesName);
    }
    $(this).parent().toggleClass("favourited");
    console.log(favourites);
});






var MyArray = function() {
    deselected.push = function() {
        console.log("PUSHING", arguments);
        return Array.prototype.push.apply(this, arguments);
    }

    return deselected;
};



$('#select_all').click(function() {
    deselected = fighters;
    $('.fighter_box').addClass("deselected");
    console.log(deselected);
});
$('#deselect_all').click(function() {
    deselected = "";
    fighters = ultimate;
    $('.fighter_box').removeClass("deselected");
    console.log(deselected);
});











$('#DKTIME').click(function(){
    $("#container").fadeIn('slow');
    /*deselected = fighters;
    const index = deselected.indexOf("Donkey Kong")
    if (index > -1) { deselected.splice(index, 1) }
    $('.fighter_box').addClass("deselected");
    if($(".fighter_name").data("fighter") === "Donkey Kong") {
        $(this).children(".fighter_box").removeClass("deselected");
    }*/
    console.log(deselected);
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

$('#save').click(function(){
    Cookies.set('deselected',deselected, {expires: 365});
    Cookies.set('favourites',favourites, {expires: 365});
    console.log("Layout Saved");
});
$('#load').click(function(){
    var favouritesCookie = Cookies.get("favourites".val);
    var deselectedCookie = Cookies.get("deselected".val);
    favourites = [favouritesCookie];
    deselected = [deselectedCookie];
    console.log("Layout Loaded");
});

});
