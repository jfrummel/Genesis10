// Main function to validate form inputs
function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const phoneNumber = document.forms["contactForm"]["phone"].value;

  if (name === "") {
    alert("Name is required.");
    document.forms["contactForm"]["name"].focus();
    return false;
  }
  if (email === "") {
    alert("Email is required.");
    document.forms["contactForm"]["email"].focus();
    return false;
  }
  if (phoneNumber === "" || isNaN(phoneNumber)) {
    alert("Phone number is required.");
    document.forms["contactForm"]["phone"].focus();
    return false;
  }
  alert("Contact information has been validated.");
  clearForm();
  return false;
}

// Clears input fields
function clearForm() {
  document.forms["contactForm"]["name"].value = "";
  document.forms["contactForm"]["email"].value = "";
  document.forms["contactForm"]["phone"].value = "";
}
