(function ($) {
  $(function () {
    var token = sessionStorage.authToken;
    var name = sessionStorage.uName;
    var role = sessionStorage.uRole;

    let urlParams = new URLSearchParams(window.location.search);
    let message = urlParams.get("msg");
    if (message != null) {
      alert(message);
      window.location.href = "/";
    }
    if (role == "Admin") {
      //drop down content
      $(".dropdown-content").append(`
      <li><a href="/treatmentRecord" class="viewTreatmentRecord"><i class="material-icons">healing</i>Treatment Record</a></li>
      <li class="divider"></li>
      <li><a href="/staffRecord" class="viewStaff"><i class="material-icons right">assignment_ind</i>Staff Record</a></li>
      <li class="divider"></li>
      <li><a href="/viewStatus" class="viewVacStatus"><i class="material-icons">vaccines</i>Vaccination Status</a></li>
      <li class="divider"></li>
      <li><a href="/manageUserRoles" class="viewVacStatus">Manage Roles</a></li>
      `);

      // Nav Bar content
      $(".navBar").append(`
      <div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo"><img src="https://i.ibb.co/jfxPtYP/Logo-06-600-x-600-px.png" alt="Logo" width="75" height="75"></a>
        <ul class="right hide-on-med-and-down">
          <li class="welcomeName"></li>
          <li><a class="dropdown-trigger" data-target="dropdown1">Patient Care<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="/loginSignup"><i class="material-icons logInBtn">account_circle</i></a></li>
          <li><a><i class="material-icons logOutBtn">exit_to_app</i></a></li>
        </ul>  
        <ul id="nav-mobile" class="sidenav">
          <li><a href="/loginSignup" class="logInBtn"><i class="material-icons">account_circle</i>Login</a></li>
          <li><a href="/treatmentRecord" class="viewTreatmentRecord"><i class="material-icons">healing</i>Treatment Record</a></li>
          <li class="divider"></li>
          <li><a href="/staffRecord" class="viewStaff"><i class="material-icons right">assignment_ind</i>Staff Record</a></li>
          <li class="divider"></li>
          <li><a href="/vaccinationStatus" class="viewVacStatus"><i class="material-icons">vaccines</i>Vaccination Status</a></li>
          <li class="divider"></li>
          <li><a href="/settings"><i class="material-icons ">settings</i>Setting</a></li>
          <li><a class="logOutBtn"><i class="material-icons">exit_to_app</i>Logout</a></li>
        </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
      `);
    } else if (role == "Staff") {
      $(".dropdown-content").append(`
      <li><a href="/treatmentRecord" class="viewPatient"><i class="material-icons right">text_snippet</i>Patient Records</a></li>
      <li class="divider"></li>
      <li><a href="/staffRecord" class="viewStaff"><i class="material-icons right">assignment_ind</i>Staff Record</a></li>
      <li class="divider"></li>
      <li><a href="/ART/viewART" class="viewStaff"><i class="material-icons right">assignment_ind</i>ART Record</a></li>
      <li class="divider"></li>
      <li><a href="/viewStatus" class="viewVacStatus"><i class="material-icons">vaccines</i>Vaccination Records</a></li>
      `);

      $(".navBar").append(`
      <div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo"><img src="https://i.ibb.co/jfxPtYP/Logo-06-600-x-600-px.png" alt="Logo" width="75" height="75"></a>
        <ul class="right hide-on-med-and-down">
          <li class="welcomeName"></li>
          <li><a class="dropdown-trigger" data-target="dropdown1">Patient Care<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="/loginSignup"><i class="material-icons logInBtn">account_circle</i></a></li>
          <li><a><i class="material-icons logOutBtn">exit_to_app</i></a></li>
        </ul>
  
        <ul id="nav-mobile" class="sidenav">
          <li><a href="/loginSignup" class="logInBtn"><i class="material-icons">account_circle</i>Login</a></li>
          <li><a href="/treatmentRecord" class="viewPatient"><i class="material-icons right">text_snippet</i>Patient Records</a></li>
          <li class="divider"></li>
          <li><a href="/staffRecord" class="viewStaff"><i class="material-icons right">assignment_ind</i>Staff Record</a></li>
          <li class="divider"></li>
          <li><a href="/ART/viewART" class="viewStaff"><i class="material-icons right">assignment_ind</i>ART Record</a></li>
          <li class="divider"></li>
          <li><a href="/viewStatus" class="viewVacStatus"><i class="material-icons">vaccines</i>Vaccination Records</a></li>
          <li class="divider"></li>
          <li><a class="logOutBtn"><i class="material-icons">exit_to_app</i>Logout</a></li>
        </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
      `);
    } else if (role == "User") {
      $(".dropdown-content").append(`
      <li><a href="/covidNews" class="viewNews"><i class="material-icons">newspaper</i>Covid19 News</a></li>
      <li class="divider"></li>
      <li><a href="/viewData" class="viewData"><i class="material-icons">insights</i>Covid 19 Statistics</a></li>
      <li class="divider"></li>
      <li><a href="/treatmentRecord" class="viewTreatmentRecord"><i class="material-icons">healing</i>Treatment Record</a></li>
      <li class="divider"></li>
      <li><a href="/vaccinationStatus" class="viewVacStatus"><i class="material-icons">vaccines</i>Vaccination Status</a></li>
      <li class="divider"></li>
      <li><a href="/ART" class="ART"><i class="material-icons">health_and_safety</i>ART Test Result</a></li>
      <li class="divider"></li>
      <li><a href="/appointment" class="appointment"><i class="material-icons">book_online</i>Appointments</a></li>
      <li class="divider"></li>
      <li><a href="/store" class="store"><i class="material-icons">storefront</i>Restaurant</a></li>
      `);

      $(".navBar").append(`
      <div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo"><img src="https://i.ibb.co/jfxPtYP/Logo-06-600-x-600-px.png" alt="Logo" width="75" height="75"></a>
        <ul class="right hide-on-med-and-down">
          <li class="welcomeName"></li>
          <li><a class="dropdown-trigger" data-target="dropdown1">Patient Care<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="/loginSignup"><i class="material-icons logInBtn">account_circle</i></a></li>
          <li><a><i class="material-icons logOutBtn">exit_to_app</i></a></li>
        </ul>
  
        <ul id="nav-mobile" class="sidenav">
          <li><a href="/loginSignup" class="logInBtn"><i class="material-icons">account_circle</i>Login</a></li>
          <li><a href="/covidNews" class="viewNews"><i class="material-icons">newspaper</i>Covid19 News</a></li>
          <li class="divider"></li>
          <li><a href="/viewData" class="viewData"><i class="material-icons">insights</i>Covid 19 Statistics</a></li>
          <li class="divider"></li>
          <li><a href="/treatmentRecord" class="viewTreatmentRecord"><i class="material-icons">healing</i>Treatment Record</a></li>
          <li class="divider"></li>
          <li><a href="/vaccinationStatus" class="viewVacStatus"><i class="material-icons">vaccines</i>Vaccination Status</a></li>
          <li class="divider"></li>
          <li><a href="/ART" class="ART"><i class="material-icons">health_and_safety</i>ART Test Result</a></li>
          <li class="divider"></li>
          <li><a href="/appointment" class="appointment"><i class="material-icons">book_online</i>Appointments</a></li>
          <li class="divider"></li>
          <li><a href="/store" class="store"><i class="material-icons">storefront</i>Restaurant</a></li>
          <li><a class="logOutBtn"><i class="material-icons">exit_to_app</i>Logout</a></li>
        </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
      `);
    } else {
      $(".navBar").append(`
      <div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo"><img src="https://i.ibb.co/jfxPtYP/Logo-06-600-x-600-px.png" alt="Logo" width="75" height="75"></a>
        <ul class="right hide-on-med-and-down">
          <li class="welcomeName"></li>
          <li><a href="/loginSignup"><i class="material-icons logInBtn">account_circle</i></a></li>
          <li><a href="/covidNews" class="viewNews"><i class="material-icons">newspaper</i></a></li>
          <li class="divider"></li>
          <li><a href="/store" class="store"><i class="material-icons">storefront</i></a></li>
        </ul>
  
        <ul id="nav-mobile" class="sidenav">
          <li><a href="/loginSignup" class="logInBtn"><i class="material-icons">account_circle</i>Login</a></li>
          <li class="divider"></li>
          <li><a href="/covidNews" class="viewNews"><i class="material-icons">newspaper</i>View Covid-19 News</a></li>
          <li class="divider"></li>
          <li><a href="/store" class="store"><i class="material-icons">storefront</i>Restaurant</a></li>
        </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
      `);
    }

    // Logout Function
    $(".logOutBtn").on("click", function () {
      $.ajax({
        url: "/logOut?token=" + token,
        method: "get",
      })
        .done(function (data) {
          sessionStorage.removeItem("authToken");
          sessionStorage.removeItem("uRole");
          location.href = "/";
        })
        .fail(function (err) {
          console.log(err.responseText);
        });
    });

    // if token is not found, hide the logout button and display login button
    if (token == undefined) {
      $(".logOutBtn").hide();
      $(".logInBtn").show();
      $(".welcomeName").text("You Have Not Sign In");
    } else {
      // show the logout button and hide the login button
      $(".logOutBtn").show();
      $(".logInBtn").hide();
      $(".welcomeName").text(`Welcome, ${name}`);
    }
    $(".sidenav").sidenav();
    $(".dropdown-trigger").dropdown({ hover: true });
  });
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".table-body tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  $(".addRecord").hide();
})(jQuery);
