const dropDownMenu = document.getElementById("menu");
const unitsItems = document.getElementById("unitsItems"); 
console.log(unitsItems); 
const unitsBtn = document.getElementById("unitsBtn"); 
const switchWeekBtn = document.getElementById("switchWeekBtn");
const searchInput = document.getElementById("searchIn"); 
const forcastMenu = document.getElementById("forecastMenu"); 
const forcastBtn = document.getElementById("switchWeekBtn"); 

unitsBtn.addEventListener("click", () => { 
    dropDownMenu.classList.toggle("opacity-0"); 
    dropDownMenu.classList.toggle("opacity-100");
    dropDownMenu.classList.toggle("invisible"); 
    dropDownMenu.classList.toggle("visibile"); 
    dropDownMenu.classList.toggle("-translate-y-4");
    dropDownMenu.classList.toggle("-translate-y-0");
    dropDownMenu.classList.toggle("pointer-events-none");
    unitsItems.classList.toggle("-z-40"); 
    unitsItems.classList.toggle("z-10"); 
}); 

forcastBtn.addEventListener("click", () => { 
    forcastMenu.classList.toggle("opacity-0"); 
    forcastMenu.classList.toggle("opacity-100");
    forcastMenu.classList.toggle("invisible"); 
    forcastMenu.classList.toggle("visibile"); 
    forcastMenu.classList.toggle("-translate-y-4");
    forcastMenu.classList.toggle("-translate-y-0");
    forcastMenu.classList.toggle("pointer-events-none");
})

