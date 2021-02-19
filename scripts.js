const RANDOM_BUTTON = document.querySelector('.random-btn');
const FIGHTER_IMG = document.querySelector('.img-set__container');
const FUN_FILTER_MODAL = document.querySelector('.crimeStoppers_modal');
const CHECKBOX = document.querySelector('#funFilterCheckbox');
// const FIGHTERS_CONTAINER = document.querySelector('#fighters');
const FIGHTERS_CONTAINER = document.querySelector('.fighter-section__container');
// const FIGHTER_IMGS = document.querySelector('.images');
const FIGHTER_IMGS = document.querySelector('.random-display__img-set');
const NAME_H1 = document.querySelector('#name');
const LOGO_IMG = document.querySelector('.random-display__logo');
const IMG_CONTAINER_DIV = document.querySelector('.images');
// const FIGHTER_IMG = document.querySelector(".fighter_box_img");
const CALCULATOR_MODAL = document.querySelector('.calculator-modal');
const REPEAT_INPUT = document.querySelector('#repeat_input');
const CHANCE_INPUT = document.querySelector('#chance_input');
const FIGHTER_BOXES = document.querySelectorAll('.fighter_box');
const MENU = document.querySelector('.slide-menu-container');
const FIGHTER_GRADIENT = document.querySelector("#random-colour");

const fighter_logo = document.querySelector('.random-display__logo');
const fighter_name = document.querySelector('.random-display__name');

const FIGHTER_LEN = CHARACTERS.length;
const SECRET = "YOU'RE TOO SLOW";
const root = document.documentElement;



//This creates a new fighter block for each character
(function createNewBlock() {
  for (let i = 0; i < FIGHTER_LEN; i++) {
      // FIGHTERS_CONTAINER.innerHTML += `
      // <li class="fighter_box" id="fighter_${i}">
      //    <div class="fighter_content">
         
      //       <div class="fighter_info">
      //          <img class="fighter_logo" src="https://random-smash.netlify.app/assets/logos/${CHARACTERS[i].name.replace(/ /g, "_")}.svg" alt="${CHARACTERS[i].name} Logo">
      //          <div>
      //             <h3>${CHARACTERS[i].name}</h3>
      //             <button class="function-btn" onclick="favRemFighter(this);" data-id="${i}" data-button="favourite" title="Favourite Fighter"><i class="fas fa-star"></i></button>
      //             <button class="function-btn" onclick="favRemFighter(this);" data-id="${i}" data-button="removed" title="Remove from Random"><i class="fas fa-user-slash"></i></button>
      //          </div>
      //       </div>
            
      //       <img class="fighter_img" src="https://random-smash.netlify.app/assets/fighters/icon/${CHARACTERS[i].name.replace(/ /g, "_")}.webp" alt="${CHARACTERS[i].name}">
      //    </div>
         
      //    <div class="gradient" style="background: linear-gradient(-45deg, ${CHARACTERS[i].colour} 20%, transparent 80%);">  
      //    </div>
      // </li>
      // </ul>`;
      FIGHTERS_CONTAINER.innerHTML += `
      <div class="fighter-box" id="${i}_${CHARACTERS[i].name}" style="background: linear-gradient(-45deg, ${hexToRGB(CHARACTERS[i].colour)} 20%, transparent 80%);">
      <div class="fighter-box__content">
        <img class="fighter-box__logo" src="https://random-smash.netlify.app/assets/logos/${CHARACTERS[i].name.replace(/ /g, "_")}.svg" alt="${CHARACTERS[i].name} Logo">
        <div class="fighter-box__info">
          <h3 class="fighter-box__name">${CHARACTERS[i].name}</h3>
          <button class="fighter-box__btn" onclick="favRemFighter(this);" data-button="favourite" data-id="${i}"><img src="/assets/misc/favourite.svg" alt="Favourite Icon"></button>
          <button class="fighter-box__btn" onclick="favRemFighter(this);" data-button="removed" data-id="${i}"><img src="/assets/misc/remove.svg" alt="Remove Icon"></button>
        </div>
      </div>
      <img class="fighter-box__img" src="https://random-smash.netlify.app/assets/fighters/icon/${CHARACTERS[i].name.replace(/ /g, "_")}.webp" alt="${CHARACTERS[i].name}">
    </div>`;
    FIGHTER_IMGS.innerHTML += `<img class="random-display__img" loading="eager" src="https://random-smash.netlify.app/assets/fighters/${CHARACTERS[i].name.replace(/ /g, "_")}.webp" alt="${CHARACTERS[i].name}">`;
  }
})();



// This filters though all removed and recent CHARACTERS
// to create a list of available fighters
// num = how much the counter goes up per iteration
function filterList(num, repeat) {
  let fighter = CHARACTERS.filter(name => name.removed === false);
  const F_LEN = fighter.length;

  for (let i = 0; i < F_LEN; i++) {
    // Change Recent
    if (fighter[i].recent < repeat && fighter[i].recent > 0) {
      fighter[i].recent++;
    } else if (fighter[i].recent >= repeat) {
      fighter[i].recent = 0;
    }
    if (i === (F_LEN - 1) && F_LEN > repeat) {
      fighter = fighter.filter(name => name.recent === 0);
    }
  }
  const FAVOURITES = fighter.filter(name => name.favourite === true);
	
	selectRandom(fighter, FAVOURITES, num);
}

// This takes the filtered list and selects a makes a running
// talley of all fighter's counters, then selects the one that matches
function selectRandom(fighters, favourites, num) {
  let selectedFighter;
  let isFavourite = false;
  let number;
	let total = 1;
  const FIGHTER_LENGTH = fighters.length;
  const FAVOURITE_LENGTH = favourites.length;
  if (FAVOURITE_LENGTH > 0 && Math.floor(Math.random() * 10 > 6.6)) {
    isFavourite = true;
  }
	for (let i = 0; i < FIGHTER_LENGTH; i++) {
    // Increasing counter for all fighters (doubles for favourites)
    // if (!fighters[i].favourite) {
    fighters[i].counter += num;
    // } else {
    //   fighters[i].counter += (num * chance);
    // }
    // Tallying up sum total of all fighter's counter
    if (!isFavourite) {
      total += fighters[i].counter;
    }
    // if (isFavourite && i === (FIGHTER_LEN - 1)) {

    // }
  }
  if (isFavourite) {
    for (let i = 0; i < FAVOURITE_LENGTH; i++) {
      total += favourites[i].counter;
    }
  }

  // Selects random number from total
	const THRESHOLD = Math.floor(Math.random() * total);
  
  // Resets total
	total = 0;
	for (let i = 0; i < FIGHTER_LENGTH; i++) {
    // If THRESHOLD === total, stop running code and select that fighter
		total += fighters[i].counter;
		if (total >= THRESHOLD) {
      selectedFighter = fighters[i];
      number = fighters[i].id;
      fighters[i].counter = 0;
      fighters[i].recent++;
			break;
		}
	}
	displayFighter(selectedFighter, number);
}

// This takes the selected fighter and changes the HTML
function displayFighter(selectedFighter, num) {
    fighter_name.innerHTML = selectedFighter.name;
    root.style.setProperty('--fighter-colour', selectedFighter.colour);
    root.style.setProperty('--fighter-colour-rgba', hexToRGB(selectedFighter.colour));
    // FIGHTER_GRADIENT.style.backgroundImage = `linear-gradient(-45deg, ${selectedFighter.colour} 20%, transparent 80%)`;
    LOGO_IMG.src=`https://random-smash.netlify.app/assets/logos/${selectedFighter.name.replace(/ /g, "_")}.svg`;
    slideshow(num);
    if (!funFilter && selectedFighter.name === 'Sonic') {
      toggleClass(FUN_FILTER_MODAL, 'invisible');
    }
}

// This toggles a class on or off depending on if it already exists
function toggleClass(elem, className) {
  if (elem.classList.contains(className)) {
    return elem.classList.remove(className);
  } else {
    return elem.classList.add(className);
  }
}

// These are the variables that alter filterList()
let counter = 2;
let repeat = 5;
let chance = 10;

// This changes above variables if user changes input value
// REPEAT_INPUT.addEventListener('change', () => repeat = parseInt(REPEAT_INPUT.value));
// CHANCE_INPUT.addEventListener('change', () => chance = parseInt(CHANCE_INPUT.value));

// Call filterList()
RANDOM_BUTTON.addEventListener('click', () => filterList(counter, repeat, chance));
window.addEventListener('keydown', e => {	
  if (e.keyCode == 82) {
    filterList(counter, repeat, chance);
  }	
});


// This sets the selected fighter to either favourite or removed
// depending on which button you press
const favRemFighter = (self) => {
  const BUTTON_FUNCTION = self.dataset.button;
  for (let i = 0; i < FIGHTER_LEN; i++) {
      if (i === parseInt(self.dataset.id)) {
          if (CHARACTERS[i][BUTTON_FUNCTION]) {
            CHARACTERS[i][BUTTON_FUNCTION] = false;
            self.closest('.fighter-box').classList.remove(BUTTON_FUNCTION);
          } else {
            CHARACTERS[i][BUTTON_FUNCTION] = true;
            self.closest('.fighter-box').classList.add(BUTTON_FUNCTION);
          }
      }
  }
}

// Change this to false later after debugging
let funFilter = true;

function toggleFunFilter() {
  if (CHECKBOX.checked){
    funFilter = true;
  } else {
    funFilter = false;
  }
}


// Side Menu
const openMenu = () => {
  MENU.classList.remove('menuClosed');
}
const closeMenu = () => {
  MENU.classList.add('menuClosed');
}

// const openBtn = document.querySelector('#hamburger');
// const closeBtn = document.querySelector('#closeMenu');

// openBtn.addEventListener('click', openMenu);
// closeBtn.addEventListener('click', closeMenu);










// let activeFighter = 0;

function slideshow(activeFighter) {
  const rect = FIGHTER_IMG.getBoundingClientRect();
  const ulWidth = rect.width;
  root.style.setProperty('--translateX', `-${
    activeFighter * ulWidth}px`);
}


function reset() {
  for (let i = 0; i < FIGHTER_LEN; i++) {
    CHARACTERS[i].recent = 0;
    CHARACTERS[i].removed = false;
    CHARACTERS[i].favourite = false;
    CHARACTERS[i].counter = 10;
    FIGHTER_BOXES[i].classList.remove('removed', 'favourite');
  }
}

function save(name, value) {
 let date = new Date(Date.now() + (86400 * 365));
 document.cookie = `${name}=${JSON.stringify(value)};path=/;expires=${date}`;
}

function load(cookieName) {
  const ALL_COOKIES = document.cookie;
  const COOKIE_ARRAY = ALL_COOKIES.split(';');
  let name;
  let value;
  for (let i = 0; i < COOKIE_ARRAY.length; i++) {
    name = COOKIE_ARRAY[i].split('=')[0].trim();
    // value = JSON.parse(COOKIE_ARRAY[i].split('=')[1]);
    // value = JSON.parse(value);
    if (name === cookieName) {
      value = JSON.parse(COOKIE_ARRAY[i].split('=')[1]);
      break;
    }
  }
  for (let i = 0; i < FIGHTER_LEN; i++) {
    CHARACTERS[i].removed = value[i].removed;
    CHARACTERS[i].favourite = value[i].favourite;
    FIGHTER_BOXES[i].classList.remove('removed', 'favourite');
    if (value[i].removed) {
      const FIGHTER_VAL = value[i].id;
      let fighter = document.querySelector(`#fighter_${FIGHTER_VAL}`);
      fighter.classList.add('removed');
    }
    if (value[i].favourite) {
      const FIGHTER_VAL = value[i].id;
      let fighter = document.querySelector(`#fighter_${FIGHTER_VAL}`);
      fighter.classList.add('favourite');
    }
  }
}

function deletePreferences(name) {
  setCookie(name, '', {
    'max-age': -1
  });
}

function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgba(" + +r + "," + +g + "," + +b + "," + +"0.4" + ")";
}


const DK_TIME__CONTAINER = document.querySelector('.dk-time__container');
const DKTIME_BTN = document.querySelector("#dk-time-btn");

const bananaInterval = setInterval(createBanana, 50);

let isDKTIME = false;

DKTIME_BTN.addEventListener('click', () => {
   if (!isDKTIME) {
      isDKTIME = true;
      DK_TIME__CONTAINER.classList.remove('invisible');
    } else {
      isDKTIME = false;
      DK_TIME__CONTAINER.classList.add('invisible');
    } 
  });
let deg = 0;

function createBanana() {
  if (isDKTIME) {
    deg += 10;
    root.style.setProperty('--deg', `${deg}deg`);
    const BANANA = document.createElement('p');
    BANANA.classList.add('banana');
    BANANA.innerText = '🍌';
    BANANA.style.left = Math.random() * window.innerWidth + 'px';
    BANANA.style.animationDuration = Math.random() * 3 + 2 + 's';
    BANANA.style.opacity = Math.random() * 0.5 + 0.5;
    BANANA.style.fontSize = Math.random() * 20 + 10 + 'px';

    DK_TIME__CONTAINER.appendChild(BANANA);

    setTimeout(() => {
      BANANA.remove();
    }, 5000);
  }
}

  console.log("%c Super Smash Bros. ", "background-color: grey; padding: 20px; color: #fff; font-size: 32px; border-radius: 16px; font-weight: bolder; text-shadow: 6px 4px 0 #000, 4px 0px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;");
  console.log("I see that you're checking out my code.  I like that about you!");
  console.log('Try typing "console.log(SECRET);"');
