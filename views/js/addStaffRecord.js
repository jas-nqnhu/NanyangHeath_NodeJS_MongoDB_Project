function addStaffRecord() {
    // This function is to be put OUTSIDE the $(document).ready() codes  
    var staffRecord = {
      firstname: $("#first_name").val(),
      lastname: $("#last_name").val(),
      address: $("#address").val(),
      dob: $("#dob").val(),
      mStatus: $("#mStatus").val(),
      cellphone: $("#cellphone").val(),
      email: $("#email").val(),
      jobtitle: $("#jobtitle").val(),
      empId: $("#empId").val(),
      startdate: $("#startdate").val(),
      department: $("#department").val(),
      workloc: $("#workloc").val(),
      salary: $("#Salary").val(),
      supervisor: $("#supervisor").val(),
      efirstname: $("#e_first_name").val(),
      elastname: $("#e_last_name").val(),
      eadddress: $("#e_address").val(),
      ecellphone: $("#e_cellphone").val(),
      rela: $("#rela").val(),
    };
    
    $.ajax({
      // we make a connection to our login web API to perform a login request
      url: "/staffRecord/addStaffRecord" + "?token=" + sessionStorage.authToken,
      method: "post",
      data: staffRecord,
    })
      .done(function (data) {
        console.log(data);
        $(".error-message").text(data.message);
        location.href = data.redirect;
      })
      .fail(function (err) {
        console.log(err);
        $(".error-message").text(err.responseText);
      });
    return false;
  }
  