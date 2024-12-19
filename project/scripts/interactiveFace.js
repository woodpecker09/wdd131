const iframe = document.querySelector('iframe');

var doc = iframe.contentWindow.document;

const input = document.querySelector('#codeP');

const button = document.querySelector('#checkCode');

const detailsElement = document.querySelector('details'); 

const answer = detailsElement.querySelector('p').textContent;


function extractParagraphContent(htmlString) {

    let parts = htmlString.split(/(<[^>]*>)/);

    let filteredParts = parts.filter((part, index) => {
        return part.trim() !== '' && (index > 0 && index < parts.length - 1);
    });

    let content = filteredParts.join('').trim();

    return content;
}

button.addEventListener('click', () => {
    const htmlString = input.value;
  
    const content = extractParagraphContent(htmlString);
 
    if (content.includes(answer)) {  

        doc.body.innerHTML = content;

        input.setAttribute('class', 'rightA');

    } else {
        input.setAttribute('class', 'wrongA');
        doc.body.innerHTML = "";
    }
});


const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastModification = new Date(document.lastModified)

document.getElementById("lastModified").textContent = `Last Modification: ${lastModification}`;