const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastModification = new Date(document.lastModified)

document.getElementById("lastModified").textContent = `Last Modification: ${lastModification}`;