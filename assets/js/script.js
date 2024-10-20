// Get elements
const contactBtn = document.getElementById('contactBtn');
const contactPopup = document.getElementById('contactPopup');
const closeBtn = document.querySelector('.close');

// Show the pop-up when the contact link is clicked
contactBtn.onclick = function () {
  contactPopup.style.display = 'block';
};

// Close the pop-up when the close button is clicked
closeBtn.onclick = function () {
  contactPopup.style.display = 'none';
};

// Close the pop-up if the user clicks outside the content area
window.onclick = function (event) {
  if (event.target == contactPopup) {
    contactPopup.style.display = 'none';
  }
};
