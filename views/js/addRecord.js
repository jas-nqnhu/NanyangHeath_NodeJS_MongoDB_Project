function addRecord() {
  // This function is to be put OUTSIDE the $(document).ready() codes
  var selectedMedHis = $("#medhis:checked")
    .map(function () {
      return this.value; // simple but you could also use $(this).val();
    })
    .get();

  var record = {
    ptId: $("#ptid").val(),
    staffId: $("#staffid").val(),
    patientName: $("#ptName").val(),
    patientPhone: $("#ptPhone").val(),
    address: $("#address").val(),
    birthday: $("#birthday").val(),
    height: $("#height").val(),
    weight: $("#weight").val(),
    bloodtype: $("#bloodtype").val(),
    medicalHistory: selectedMedHis,
    otherHealthIssue: $("#othrIssue").val(),
  };
  $.ajax({
    // we make a connection to our login web API to perform a login request
    url: "/treatmentRecord/addRecord" + "?token=" + sessionStorage.authToken,
    method: "post",
    data: record,
  })
    .done(function (data) {
      $(".error-message").text(data.message);
      location.href = data.redirect;
    })
    .fail(function (err) {
      console.log(err);
      $(".error-message").text(err.responseText);
    });
  return false;
}
