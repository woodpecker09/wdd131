document.addEventListener("DOMContentLoaded", function() {
    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Guayaquil Ecuador",
          location: "Guayaquil, Ecuador",
          dedicated: "1999, August, 2", 
          area: 45000,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
        },
        {
          templeName: "Quito Ecuador",
          location: "Quito, Ecuador",
          dedicated: "2019, May, 11",   
          area: 36780,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
        },
        {
          templeName: "Provo City Center",
          location: "Provo City Center, USA",
          dedicated: "2016, March, 20",   
          area: 85084,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-33711-main.jpg"
        },
        
      ];

    function createTempleCard(filteredTemples){
        document.querySelector(".a-div").innerHTML = "";
        filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p"); 
        let area = document.createElement("p"); 
        let img = document.createElement("img");
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="lable">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="lable">dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="lable">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        document.querySelector(".a-div").appendChild(card);

      });
    }

    const oldTemple = document.getElementById("old");
    const newTempels =  document.getElementById("new");
    const largeTempels =  document.getElementById("large");
    const smallTempels =  document.getElementById("small");
    const homeTempels = document.getElementById("home");
      
    createTempleCard(temples);
    oldTemple.addEventListener("click", ()=> {
     createTempleCard(temples.filter(temple => Number(temple.dedicated.split(", ")[0]) < 1900));
    });

    newTempels.addEventListener("click", ()=> {
      createTempleCard(temples.filter(temple => Number(temple.dedicated.split(", ")[0]) > 2000));
     });

    
     largeTempels.addEventListener("click", ()=> {
      createTempleCard(temples.filter(temple => Number(temple.area) > 90000));
     });

     smallTempels.addEventListener("click", ()=> {
      createTempleCard(temples.filter(temple => Number(temple.area) < 10000));
     });

     homeTempels.addEventListener("click", ()=> {
      createTempleCard(temples);
     });

    const header = document.querySelector('header');
    
    const h1 = document.querySelector('h1');
    
    const navigation = document.querySelector('nav');
    
    const menuButton = document.createElement('button');
    
    menuButton.setAttribute('id', 'menu');
    
    header.insertBefore(menuButton, navigation);

    menuButton.addEventListener('click', () => {
        
        h1.classList.toggle('h1-open');
    
        menuButton.classList.toggle('open-menu');
    
        navigation.classList.toggle('open');
    });

    
    const today = new Date();

    const year = today.getFullYear();

    document.getElementById("currentyear").textContent = year;

    let lastModification = new Date(document.lastModified)

    document.getElementById("lastModified").textContent = `Last Modification: ${lastModification}`;
});