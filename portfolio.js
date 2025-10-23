document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

 
  const to = "melouki.lea21@gmail.com";


  const mailtoLink = `mailto:${to}?subject=Message%20du%20portfolio&body=${encodeURIComponent(
    "Nom : " + name + "\nEmail : " + email + "\n\nMessage :\n" + message
  )}`;

 
  window.location.href = mailtoLink;
});
