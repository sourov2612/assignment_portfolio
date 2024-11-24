function sendMail(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Sending email with emailjs
  emailjs
    .send("service_ph26rzg", "template_soskjbk", parms)
    .then((response) => {
      alert("Email sent successfully!");
      console.log("Success:", response); // For debugging purposes
    })
    .catch((error) => {
      alert("Failed to send the email. Please try again.");
      console.error("Error:", error); // Log the error for debugging
    });
}
