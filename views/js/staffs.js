$(function () {
    $.ajax({
      url: "/api/staffRecords?token=" + sessionStorage.authToken,
      method: "get",
    })
      .done(function (data) {
        if (sessionStorage.uRole == "Staff" || sessionStorage.uRole == "Admin") {
          data.forEach(function (staff) {
              $(".staffid").append(`
              <option value="${staff._id}">${staff.firstname} ${staff.lastname}: (${staff.employeeId})</option>
              `);                
          });
        } 
      })
      .fail(function (err) {
        console.log(err.responseText);
      });
  });
  