const apiKey = import.meta.env.VITE_API_KEY; 

export async function dataBasic(cityName) { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`; 
    try { 
        const response = await fetch(url);
        if (!response.ok) { 
            throw new Error(`Response stauts: ${response.status}`)
        }
        const result = await response.json()
        return result
    } catch(error) { 
        return error.message
    }
}



