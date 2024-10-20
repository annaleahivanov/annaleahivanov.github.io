const contactBtn = document.getElementById('contactBtn');
const contactDetails = document.getElementById('contactDetails');

// Initially set contact details to be hidden
contactDetails.style.display = 'none';

// Toggle contact details visibility when the Contact button is clicked
contactBtn.onclick = function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  contactDetails.style.display =
    contactDetails.style.display === 'none' ? 'block' : 'none';
};
