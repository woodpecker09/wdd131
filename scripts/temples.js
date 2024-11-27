document.addEventListener("DOMContentLoaded", function() {
    
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