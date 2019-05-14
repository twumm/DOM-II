// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const navItems = document.querySelectorAll('nav a');

// Add event listener to flip logo when user clicks on the logo
logoHeading.addEventListener('click', () => {
  // console.log(event)
  logoHeading.setAttribute('style', '-moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1);' +
    '-o-transform: scale(-1, 1); -ms-transform: scale(-1, 1); transform: scale(-1, 1);'
  )
});
