// Get elements
const contactBtn = document.getElementById('contactBtn');
const contactPopup = document.getElementById('contactPopup');
const closeBtn = document.querySelector('.close');

// Show or hide the pop-up when the contact button is clicked
contactBtn.onclick = function () {
  if (contactPopup.style.display === 'none' || contactPopup.style.display === '') {
    contactPopup.style.display = 'block';
  } else {
    contactPopup.style.display = 'none';
  }
};

// Hide the pop-up when the close button is clicked
closeBtn.onclick = function () {
  contactPopup.style.display = 'none';
};
