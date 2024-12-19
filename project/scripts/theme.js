document.getElementById('theme').addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.style.setProperty('--whole-back-col', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--backgound-color', 'rgb(38, 38, 38)');
        document.documentElement.style.setProperty('--color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--answer-bk-cl', 'rgb(0, 0, 0)');
    } else {
        document.documentElement.style.setProperty('--whole-back-col', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--backgound-color', 'rgb(184, 216, 243)');
        document.documentElement.style.setProperty('--color', '#000000');
        document.documentElement.style.setProperty('--answer-bk-cl', 'rgb(214, 255, 214)');
    }
});