const dropDownMenu = document.getElementById("menu"); 
const unitsBtn = document.getElementById("unitsBtn"); 


unitsBtn.addEventListener("click", () => { 
    dropDownMenu.classList.toggle("opacity-0"); 
    dropDownMenu.classList.toggle("opacity-100");
    dropDownMenu.classList.toggle("invisible"); 
    dropDownMenu.classList.toggle("visibile"); 
    dropDownMenu.classList.toggle("-translate-y-4");
    dropDownMenu.classList.toggle("-translate-y-0");
    dropDownMenu.classList.toggle("pointer-events-none"); 
})




