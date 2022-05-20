var recId = 0;
$(function () {
  var urlParams = new URLSearchParams(window.location.search);
  recId = urlParams.get("id");

  $.ajax({
    url: "/api/staffRecords/" + recId + "?token=" + sessionStorage.authToken,
    method: "get",
  })
    .done(function (data) {
      $("#first_name").val(data.firstname);
      $("#last_name").val(data.lastname);
      $("#address").val(data.address);
      $("#dob").val(data.birthday);
      $("#mStatus").val(data.maritialStat);
      $("#cellphone").val(data.cellphone);
      $("#email").val(data.email);
      $("#jobtitle").val(data.title);
      $("#empId").val(data.employeeId);
      $("#startdate").val(data.startDate);
      $("#department").val(data.deparment);
      $("#workloc").val(data.workLoc);
      $("#Salary").val(data.salary);
      $("#supervisor").val(data.supervisor);
      $("#e_first_name").val(data.efirstname);
      $("#e_last_name").val(data.elastname);
      $("#e_address").val(data.eaddress);
      $("#e_cellphone").val(data.ecellphone);
      $("#rela").val(data.Relationship);
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
  $(".deleteRecord").on("click", function () {
    if (confirm("Are you sure you want to delete this?")) {
      $.ajax({
        url:
          "/staffRecords/deleteStaffRecord/" +
          recId +
          "?token=" +
          sessionStorage.authToken,
        method: "delete",
      })
        .done(function (data) {
          alert(`Deleted record id: ${recId}!!!`);
          window.location.href = "/staffRecord";
        })
        .fail(function (err) {
          alert(err.responseText);
          console.log(err.responseText);
        });
    } else {
      return false;
    }
  });
});

function editStaffRecord() {
  var record = {
    recId: recId,
    firstname:  $("#first_name").val(),
    lastname: $("#last_name").val(),
    address: $("#address").val(),
    birthday: $("#dob").val(),
    maritialStat: $("#mStatus").val(),
    cellphone: $("#cellphone").val(),
    email: $("#email").val(),
    title: $("#jobtitle").val(),
    employeeId: $("#empId").val(),
    startDate: $("#startdate").val(),
    deparment: $("#department").val(),
    workLoc: $("#workloc").val(),
    salary: $("#Salary").val(),
    supervisor:$("#supervisor").val(),
    efirstname: $("#e_first_name").val(),
    elastname: $("#e_last_name").val(),
    eaddress: $("#e_address").val(),
    ecellphone: $("#e_cellphone").val(),
    Relationship: $("#rela").val(),
  };
  // console.log(selectedMedHis)
  $.ajax({
    url: "/staffRecords/editStaffRecord" + "?token=" + sessionStorage.authToken,
    method: "put",
    data: record,
  })
    .done(function (data) {
      alert("Record updated!");
      window.location.href = "/staffRecord";
    })
    .fail(function (err) {
      alert(err.responseText);
      console.log(err);
    });
  return false;
}
