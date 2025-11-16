// Initialize EmailJS
(function () {
  emailjs.init("sKQWsow6Cz_yapK3G"); // Replace with your EmailJS user ID
})();

// Change photo path here ONLY
const profilePic = document.querySelector('.profile-pic');
profilePic.src = 'S1.jpg'; // Replace 'yourphoto.jpg' with your photo filename or URL

// Contact form email sending using EmailJS
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form inputs
  const userName = this.user_name.value.trim();
  const userEmail = this.user_email.value.trim();
  const message = this.message.value.trim();

  if (!userName || !userEmail || !message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = 'red';
    return;
  }

  formStatus.textContent = "Sending message...";
  formStatus.style.color = '#333';

  emailjs.send('service_bvznopk', 'template_4eux0rf', {
    user_name: userName,
    user_email: userEmail,
    message: message,
  }).then((response) => {
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = 'green';
    contactForm.reset();
  }, (error) => {
    formStatus.textContent = "Failed to send message. Please try again later.";
    formStatus.style.color = 'red';
  });
});
