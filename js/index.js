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

//When dblClick picture, change background color based on mouse x,y position
var img = document.querySelector('.intro img');
img.addEventListener('dblclick', (e) => {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
})

// When copying this h2 to clipboard, change that h2
var h2 = document.querySelector('.intro h2');
h2.addEventListener('copy', () =>{
    h2.textContent = 'Please do not copy me :(';
})
