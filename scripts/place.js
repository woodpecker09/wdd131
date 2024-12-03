function getNumbers(str){
    let numbers = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numbers += str[i];
        }
    }
    return numbers;
}
const temperature = document.querySelector('#temperature > p').textContent;
temperatureNumber = Number(getNumbers(temperature));
const velocity = document.querySelector('#velocity > p').textContent;
velocityNumber = Number(getNumbers(velocity));

if(temperatureNumber <= 50 && velocityNumber > 3){
    const  calculateWindChill = (T, V) => 35.74 + (0.6215 * T) - (35.75*(V**0.16)) + (0.4275*(T*(V**0.16)));
    document.querySelector('#wind-chill').innerHTML = `<p><span>Wind Chill:</span>${calculateWindChill(temperatureNumber, velocityNumber).toFixed(2)}°F</p>`;
} else{
    document.querySelector('#wind-chill').innerHTML = `<p><span>Wind Chill:</span>N/A</p>`;
}


const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastModification = new Date(document.lastModified)

document.getElementById("lastModified").textContent = `Last Modification: ${lastModification}`;