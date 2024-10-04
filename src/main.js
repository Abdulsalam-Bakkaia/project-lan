function validateAndRedirect(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  const form = document.getElementById("createAccount");
  const inputs = form.querySelectorAll("input");

  let isValid = true;
  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      isValid = false;
    }
  });

  if (isValid) {
    window.location.href = "./home page/home.html";
  } else {
    alert("Please fill in all the fields before continuing.");
  }
}
