const iframe = document.querySelector('iframe');
var doc = iframe.contentWindow.document;
const input = document.querySelector('#codeP');
const button = document.querySelector('#checkCode');
const detailsElement = document.querySelector('details');
doc.body.innerHTML = '<p> Hidden Text </p>'; 
const answer = detailsElement.querySelector('p').textContent;

    const pElement = doc.querySelector('p');
    pElement.style.setProperty('color', 'rgb(0, 0, 0)');
    pElement.style.setProperty('background-color', 'rgb(0, 0, 0)');

button.addEventListener('click', () => {
    if (input.value.trim() === "color: #fff;") {  
        input.setAttribute('class', 'rightA');

        const pElement = doc.querySelector('p');
        pElement.style.setProperty('color', '#fff');
    } else {
        input.setAttribute('class', 'wrongA');

        const existingPElement = doc.querySelector('p');
        if (existingPElement) {
            existingPElement.style.setProperty('color', 'rgb(0, 0, 0)');
            existingPElement.style.setProperty('background-color', 'rgb(0, 0, 0)');
        }
    }
});



const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastModification = new Date(document.lastModified)

document.getElementById("lastModified").textContent = `Last Modification: ${lastModification}`;