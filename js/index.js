// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const navItems = document.querySelectorAll('nav a');
const headerImage = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');

const allH2 = document.querySelectorAll('h2');
const allParagraphs = document.querySelectorAll('p');

// Content pick selectors
const contentPick = document.querySelectorAll('.content-pick')
const lastContentPick = contentPick[0].children[2];
const funInSunBtn = contentPick[0].children[0].children[2]
const mountainBtn = contentPick[0].children[1].children[2]
const islandBtn = contentPick[0].children[2].children[2]

// Alert to user that mobile support not availble on resize event
window.addEventListener('resize', () => {
  alert("Stop resizing friend! I'm not mobile friendly!");
});

// Add event listener to flip logo when user clicks on the logo
logoHeading.addEventListener('click', (event) => {
  // console.log(event)
  event.target.style = '-moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1);' +
  '-o-transform: scale(-1, 1); -ms-transform: scale(-1, 1); transform: scale(-1, 1);';
});

// Add event listener to reset logo to default when user moves mouse out
logoHeading.addEventListener('mouseout', (event) => {
  event.target.style = '-moz-transform: ""; -webkit-transform: "";' +
  '-o-transform: ""; -ms-transform: ""; transform: "";';
})

// On window load, change color of all h2 heading to random colors
window.addEventListener('load', () => {
  allH2.forEach(element => element.setAttribute('style', `color: ${'#'+(Math.random()*0xFFFFFF<<0).toString(16)}`))
})

// On window keydown, change color of all h2 heading to random colors
window.addEventListener('keydown', () => {
  allParagraphs.forEach(element => element.setAttribute('style', `color: ${'#'+(Math.random()*0xFFFFFF<<0).toString(16)}`))
})

// Set color of navItems to random color on mouseover event
navItems.forEach(element => {
  // console.log(element)
  element.addEventListener('mouseover', event => {
    event.target.style = `color: ${'#'+(Math.random()*0xFFFFFF<<0).toString(16)}`
  })
  element.addEventListener('click', event => {
    event.preventDefault();
  })
})

// If header image is dragged, make it opaque
headerImage.addEventListener('drag', event => {
  // event.target.style.content = "Move me not"; // Not working yet
  event.target.style.opacity = .3;
})

// Add extra text when user double clicks on Welcome text
introH2.addEventListener('dblclick', event => event.target.innerText += " Have Fun!!")

// Alert user confirmation when they click to sign up for fun in the sun trip
funInSunBtn.addEventListener('click', (event) => {
  alert(`Confirm sign up for ${event.path[1].children[0].innerText} expedition`);
})

// -------Try this again after MVP
// contentPick[0].forEach((element, index) => {
//   element.children[index].children[2].addEventListener('click', (event) => {
//     alert(`Confirm sign up for ${event.path[1].children[0].innerText} expedition`);
//   })
// })

// On wheel over button, change text
mountainBtn.addEventListener('wheel', event => event.target.innerText = "Continue!");

// Nest two similar events somewhere in the site and prevent the event propagation properly
lastContentPick.addEventListener('click', event => alert('Show me too!'))
islandBtn.addEventListener('click', event => {
  event.stopPropagation();
  alert('Yikes!')
})