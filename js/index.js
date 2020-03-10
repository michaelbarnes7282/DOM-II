// Your code goes here
//Change boom button to red
boomBtn.setAttribute('style', 'background-color: red');

//When boombtn is clicked, remove home and replace nav
var container = document.querySelector('.home');
boomBtn.addEventListener('click', () => {
    container.style.display = 'none';
    document.querySelector('.nav').innerHTML = '<h2>I Told You Not To</h2>';
})

// When Mouseover Nav, body turns red
var links = document.querySelector('.nav');
links.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'red';
})

// When mouseleave body goes back to white
links.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'white';
})

