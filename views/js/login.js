const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function login() {
  // This function is to be put OUTSIDE the $(document).ready() codes
  var credentials = {
    // get values from the username and password textboxes
    email: $("#email-login").val(),
    password: $("#password-login").val(),
  };
  $.ajax({
    // we make a connection to our login web API to perform a login request
    url: "/login",
    method: "post",
    data: credentials,
  })
    .done(function (data) {
      // if response indicates a successful login
      $(".error-message").text(data.message);
      location.href = data.redirect;

      //stores the token returned from the server, if successful login
      sessionStorage.authToken = data.token;
      sessionStorage.uName = data.name;
      sessionStorage.uRole = data.role;
      sessionStorage.uID = data._id;
    })
    .fail(function (err) {
      // if response indicates an unsuccessful login
      $(".error-message").text(err.responseText);
    });
  return false;
}

function register() {
  // This function is to be put OUTSIDE the $(document).ready() codes
  var credentials = {
    // get values from the name, username and password textboxes
    name: $("#name").val(),
    email: $("#email-register").val(),
    password: $("#password-register").val(),
  };
  $.ajax({
    // we make a connection to our register web API to perform a register request
    url: "/register",
    method: "post",
    data: credentials,
  })
    .done(function (data) {
      // if response indicates a successful register
      $(".error-message2").text(data.message);
      //stores the token returned from the server, if successful register
      sessionStorage.authToken = data.token;
    })
    .fail(function (err) {
      // if response indicates an unsuccessful register
      $(".error-message2").text(err.responseText);
    });
  return false;
}
