var statusId = 0;
$(function () {
    var urlParams = new URLSearchParams(window.location.search);
    statusId = urlParams.get("id");

    $.ajax({
        url: "/status/" + statusId + "?token=" + sessionStorage.authToken,
        method: "get",
    })
        .done(function (data) {
            $('#first_name').val(data.first_name);
            $('#last_name').val(data.last_name);
            $('#nric').val(data.nric);
            $('.datepicker').val(data.dob);
            $('#email').val(data.email);
            $("#travelhistory").val(data.travelhistory);
            $("#symptoms").val(data.symptoms);
            $("#vacstatus").val(data.vacstatus);
            $("#declaration").val(data.declaration);
        })
        .fail(function (err) {
            console.log(err.responseText);
        });
    $("#deleteStatusBtn").on("click", function () {
        if (confirm("Are you sure you want to delete this?")) {
            $.ajax({
                url: "deleteStatus/" + statusId +
                "?token=" +
                sessionStorage.authToken,
                method: "delete",
            })
                .done(function (data) {
                    alert(`Deleted record id: ${statusId}!!!`);
                    window.location.href = "/vaccinationStatus";
                })
                .fail(function (err) {
                    console.log(err.responseText);
                });
        } else {
            return false;
        }
    });
});

function editStatus() {
    var selectedsymptions = $("#symptoms:checked").map(
        function () {
            return this.value; // simple but you could also use $(this).val();
        }).get();
    var status = {
        statusId: statusId,
        first_name: $("#first_name").val(),
        last_name: $("#last_name").val(),
        nric: $("#nric").val(),
        dob: $("#dob").val(),
        email: $("#email").val(),
        travelhistory: $("#travelhistory").val(),
        symptoms: selectedsymptions,
        vacstatus: $("#vacstatus").val(),
        declaration: $("#declaration").val(),
    };
    $.ajax({
        url: "/editStatus" + "?token=" + sessionStorage.authToken,
        method: "put",
        data: status,
    })
        .done(function (data) {
            alert("Status updated!");
            window.location.href = "/vaccinationStatus";
        })
        .fail(function (err) {
            console.log(err);
        });
    return false;
}
