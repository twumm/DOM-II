// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const navItems = document.querySelectorAll('nav a');
const headerImage = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');

// Content pick selectors
const contentPick = document.querySelectorAll('.content-pick')
const funInSunBtn = contentPick[0].children[0].children[2]
const mountainBtn = contentPick[0].children[1].children[2]
const islandBtn = contentPick[0].children[2].children[2]

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
