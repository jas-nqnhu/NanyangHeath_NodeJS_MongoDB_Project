var recId = 0;
$(function () {
  var urlParams = new URLSearchParams(window.location.search);
  recId = urlParams.get("id");

  $.ajax({
    url: "/api/record/" + recId + "?token=" + sessionStorage.authToken,
    method: "get",
  })
    .done(function (data) {
      $("#ptName").val(data.patientName);
      $("#ptPhone").val(data.patientPhone);
      $("#address").val(data.address);
      $("#birthday").val(data.birthday);
      $("#height").val(data.height);
      $("#weight").val(data.weight);
      $("#bloodtype").val(data.bloodtype);
      $("#medhis").val(data.medicalHistory);
      $("#othrIssue").val(data.otherHealthIssue);
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
  $(".deleteRecord").on("click", function () {
    if (confirm("Are you sure you want to delete this?")) {
      $.ajax({
        url:
          "/treatmentRecord/deleteRecord/" +
          recId +
          "?token=" +
          sessionStorage.authToken,
        method: "delete",
      })
        .done(function (data) {
          alert(`Deleted record id: ${recId}!!!`);
          window.location.href = "/treatmentRecord";
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

function editRecord() {
  var selectedMedHis = $("#medhis:checked")
    .map(function () {
      return this.value; // simple but you could also use $(this).val();
    })
    .get();

  var record = {
    recId: recId,
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
  // console.log(selectedMedHis)
  $.ajax({
    url: "/treatmentRecord/editRecord" + "?token=" + sessionStorage.authToken,
    method: "put",
    data: record,
  })
    .done(function (data) {
      alert("Record updated!");
      window.location.href = "/treatmentRecord";
    })
    .fail(function (err) {
      alert(err.responseText);
      console.log(err);
    });
  return false;
}