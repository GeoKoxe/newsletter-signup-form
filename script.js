function registerNewsletter() {
  const emailInput = document.getElementById("newsletter-email");
  const message = document.getElementById("newsletter-message");
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  // Open confirmation page with email as query param
  const encodedEmail = encodeURIComponent(email);
  window.open(`confirmation.html?email=${encodedEmail}`, "_blank");

  message.textContent = "Thank you for subscribing!";
  message.style.color = "green";
  emailInput.value = "";
}
