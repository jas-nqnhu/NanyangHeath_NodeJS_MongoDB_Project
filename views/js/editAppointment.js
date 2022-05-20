var bookingId = 0;
$(function() { // This is our so called “ready” function in shorthand
    var urlParams = new URLSearchParams(window.location.search);
    bookingId = urlParams.get('id');

    $.ajax({
        url: "/appointment/" + bookingId,
        method: "get"
    }).done(
        function (data) {
            $('#MedicalConditionSymptoms').val(data.MedicalConditionSymptoms);
            $('#first_name').val(data.first_name);
            $('#last_name').val(data.last_name);
            $('#nric').val(data.nric);
            $('.datepicker').val(data.dob);
            $('#email').val(data.email);
            
        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    $("#deleteAppointmentBtn").on("click", function () {
        if(confirm("Are you sure you want to delete this?")){
            $.ajax({
                url: "/deleteAppointment/" + bookingId,
                method: "delete",
              })
                .done(function (data) {
                  alert(`Deleted record id: ${bookingId}!!!`);
                  window.location.href = "/appointment";
                })
                .fail(function (err) {
                  console.log(err.responseText);
                });
        }
        else{
            return false;
        }          
    });
});
function editBooking() {
    var appointment = {
        id: bookingId,
        MedicalConditionSymptoms: $("#MedicalConditionSymptoms").val(),
        first_name: $("#first_name").val(),
        last_name: $("#last_name").val(),
        nric: $("#nric").val(),
        dob: $("#dob").val(),
        email: $("#email").val()
    };
    $.ajax(
        {
            url: '/editBooking',
            method: 'put',
            data: appointment
        }
    ).done(
        function (data) {
            alert("Appointment updated!");
            window.location.href = "/appointment";
        }
    ).fail(
        function (err) {
           console.log(err.responseText);
        }
    );
    return false;
}
