const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const getProductDocument = document.getElementById('pName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; 
    option.textContent = product.name; 
    getProductDocument.appendChild(option); 
});

let submitCount = window.localStorage.getItem('counting');
submitCount = submitCount ? parseInt(submitCount, 10) : 0;

document.querySelector('form').addEventListener('submit', (event) => {
    submitCount++;
    window.localStorage.setItem('counting', submitCount);
});


const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastModification = new Date(document.lastModified)

document.getElementById("lastModified").textContent = `Last Modification: ${lastModification}`;