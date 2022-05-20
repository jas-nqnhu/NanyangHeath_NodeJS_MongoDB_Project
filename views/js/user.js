$(function () {
  $.ajax({
    url: "/api/users?token=" + sessionStorage.authToken,
    method: "get",
  })
    .done(function (data) {
      if (sessionStorage.uRole == "Staff" || sessionStorage.uRole == "Admin") {
        data.forEach(function (users) {
          if (users.role == "User") {
            $(".ptid").append(`
            <option value="${users._id}">${users.name}: (${users._id})</option>
            `);
          }                   
        });
      } else{
        data.forEach(function (users) {
          if (users.name == sessionStorage.uName) {
            $(".uName").append(`
            <option value="${users._id}">${users.name}</option>
            `);
          }          
        });
      }
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
});
