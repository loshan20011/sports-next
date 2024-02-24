// initial state
document.getElementById("popup-box").style.visibility = "hidden";

function openPopup() {
  const div = document.getElementById("popup-box");
  div.style.visibility = "visible";
}

function closePopup() {
  const div = document.getElementById("popup-box");
  div.style.visibility = "hidden";
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  // e.preventDefault();
  validateForm(e);
});

function validateForm(e) {
  const name = document.getElementById("name");
  const telephone = document.getElementById("tel");
  const date = document.getElementById("date");
  const email = document.getElementById("email");
  const rating = document.getElementById("rating");
  const comment = document.getElementById("comment");
  const content = document.myForm.content;
  const availability = document.myForm.availability;
  const professionalism = document.myForm.professionalism;
  const productQuality = document.myForm.productQuality;
  const websiteNavigation = document.myForm.websiteNavigation;

  const nameValue = name.value.trim();
  const telephoneValue = telephone.value.trim();
  const dateValue = date.value.trim();
  const emailValue = email.value.trim();
  const commentValue = comment.value.trim();
  const ratingValue = rating.value.trim();

  const contentValue = content.value.trim();
  const availabilityValue = availability.value.trim();
  const professionalismValue = professionalism.value.trim();
  const productQualityValue = productQuality.value.trim();
  const websiteNavigationValue = websiteNavigation.value.trim();

  let isValidated = true;

  if (nameValue === "") {
    setError(name, "name is required");
    isValidated = false;
  } else {
    setSuccess(name);
  }

  if (telephoneValue === "") {
    setError(telephone, "telephone is required");
    isValidated = false;
  } else {
    setSuccess(telephone);
  }

  if (dateValue === "") {
    setError(date, "Date is required");
    isValidated = false;
  } else {
    setSuccess(date);
  }

  if (emailValue === "") {
    setError(email, "E-mail is required");
    isValidated = false;
  } else {
    setSuccess(email);
  }

  if (commentValue === "") {
    setError(comment, "This field is required");
    isValidated = false;
  } else {
    setSuccess(comment);
  }

  if (ratingValue === "") {
    setError(rating, "This field is required");
    isValidated = false;
  } else {
    setSuccess(rating);
  }

  if (contentValue === "") {
    setError(content[0], "This field is required");
    isValidated = false;
  } else {
    setSuccess(content[0]);
  }

  if (availabilityValue === "") {
    setError(availability[0], "This field is required");
    isValidated = false;
  } else {
    setSuccess(availability[0]);
  }

  if (professionalismValue === "") {
    setError(professionalism[0], "This field is required");
    isValidated = false;
  } else {
    setSuccess(professionalism[0]);
  }

  if (productQualityValue === "") {
    setError(productQuality[0], "This field is required");
    isValidated = false;
  } else {
    setSuccess(productQuality[0]);
  }

  if (websiteNavigationValue === "") {
    setError(websiteNavigation[0], "This field is required");
    isValidated = false;
  } else {
    setSuccess(websiteNavigation[0]);
  }

  //if (isValidated)  openPopup();

  if (!isValidated) {
    e.preventDefault();
  }
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
