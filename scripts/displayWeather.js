import { dataBasic } from "./api.js";

const dateEl = document.getElementById("dateEl"); 
const tempEl = document.getElementById("tempEl"); 
const countryEl = document.getElementById("countryEl"); 


async function renderBasic() {
    const data = await dataBasic("berlin"); 
    const reagionName = new Intl.DisplayNames(["en"], {type: "region"})
    const date = new Date().toLocaleDateString('en', { weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"});
    dateEl.textContent = date; 
    tempEl.textContent = `${data.main.temp}°`
    countryEl.textContent = `${data.name}, ${reagionName.of(data.sys.country)}`
    console.log(data)
}

renderBasic()


