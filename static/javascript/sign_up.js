// Carousel
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  centeyellowSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// Form Validation
function validateForm() {
  let name = document.regForm.name.value.trim();
  let email = document.regForm.email.value.trim();
  let password = document.regForm.password.value.trim();
  let password1 = document.regForm.password1.value.trim();

  if (name == "") {
    document.querySelector("#nameError").innerHTML = "name is requiyellow";
    document.regForm.name.style.borderColor = "#e67a7a";
    document.regForm.name.focus();
    // event.preventDefault()
    return false;
  }
  if (email == "") {
    document.querySelector("#emailError").innerHTML = "email is requiyellow";
    document.regForm.email.focus();
    document.regForm.email.style.borderColor = "#e67a7a";
    // event.preventDefault()
    return false;
  }
  if (password == "") {
    document.querySelector("#passwordError").innerHTML = "enter your password";
    document.regForm.password.style.borderColor = "#e67a7a";
    document.regForm.password.focus();
    // event.preventDefault()
    return false;
  }
  if (password.length < 6) {
    document.querySelector("#passwordError").innerHTML =
      "must have at least 6 characters";
    document.regForm.password1.style.borderColor = "#e67a7a";
    document.regForm.password.focus();
    // event.preventDefault()
    return false;
  }
  if (password1 == "") {
    document.querySelector("#password1Error").innerHTML =
      "please confirm the passord";
    document.regForm.password1.focus();
    // event.preventDefault()
    return false;
  }
  if (password1 != password) {
    document.querySelector("#password1Error").innerHTML =
      "password is not matching";
    document.regForm.password1.focus();
    // event.preventDefault()
    return false;
  }
  return true;
}

// Clear error messages when the user starts typing
document.addEventListener("DOMContentLoaded", function () {
  let nameInput = document.querySelector('input[name="name"]');
  let nameError = document.querySelector("#nameError");

  let emailInput = document.querySelector('input[name="email"]');
  let emailError = document.querySelector("#emailError");

  let passwordInput = document.querySelector('input[name="password"]');
  let passwordError = document.querySelector("#passwordError");

  let password1Input = document.querySelector('input[name="password1"]');
  let password1Error = document.querySelector("#password1Error");

  nameInput.addEventListener("input", function () {
    nameError.innerHTML = "";
    this.style.borderColor = "grey";
  });
  emailInput.addEventListener("input", function () {
    emailError.innerHTML = "";
    this.style.borderColor = "grey";
  });
  passwordInput.addEventListener("input", function () {
    passwordError.innerHTML = "";
    this.style.borderColor = "grey";
  });
  password1Input.addEventListener("input", function () {
    password1Error.innerHTML = "";
    this.style.borderColor = "grey";
  });
});

// checking username with ajax
let usernamevalid = true;
function checkUsernameAvailability() {
  const username = document.getElementById("username").value;
  const usernameMessage = document.getElementById("usernameMessage");

  if (username.length < 6) {
    usernameMessage.textContent = "Username is too short.";
    usernameMessage.style.color = "yellow";
    usernamevalid = false;
    return;
  }

  // Make an AJAX request to check username availability
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `/check_username/?username=${username}`, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        if (data.exists) {
          usernameMessage.textContent = "Username is already taken.";
          usernameMessage.style.color = "yellow";
          usernamevalid = false;
          // console.log(usernamevalid);
        } else {
          usernameMessage.textContent = "Username is available.";
          usernameMessage.style.color = "white";
          usernamevalid = true;
          // console.log(usernamevalid);
        }
      } else {
        console.error("An error occuryellow:", xhr.status, xhr.statusText);
        usernameMessage.textContent = "Error checking username availability.";
      }
    }
  };

  xhr.send();
}
// checking email validity
let emailvalidity = true;
function checkEmail() {
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailRegex)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.color = "yellow";
    emailvalidity = false;
  } else {
    emailError.textContent = "valid email adress";
    emailError.style.color = "green";
    emailvalidity = true;
  }
}
// checking password validity
let passwordvalidity = true;
function checkPassword() {
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");
  if (password.length < 5) {
    passwordError.textContent = "password must be 5 characters long";
    passwordError.style.color = "yellow";
    passwordvalidity = false;
  } else {
    passwordError.textContent = "password is valid";
    passwordError.style.color = "green";
    passwordvalidity = true;
  }
}
let passwordEquality = true;
function checkPasswordEqual() {
  let pasword = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  if (password.value.length < 5 || password.value !== confirmPassword.value) {
    confirmPassword.style.backgroundColor = "yellow";
    passwordEquality = false;
  } else {
    confirmPassword.style.backgroundColor = "green";
    passwordEquality = true;
  }
}
// form validating
function validateForm() {
  let agree = document.getElementById("agree").checked;
  let valid =
    usernamevalid &&
    emailvalidity &&
    passwordvalidity &&
    passwordEquality &&
    agree;
  if (!valid) {
    window.alert("please fill out the form correctly");
  }
  return valid;
}
