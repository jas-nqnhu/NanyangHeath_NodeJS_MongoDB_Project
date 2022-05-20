$(function() {
    $.ajax({
        url: "/appointments",
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function(appointment) {
                    $(".appointments").append(`                    
                        <div class="row center">
                        <div class="">
                        <div class="card-panel teal  ">
                        <span class="white-text">
                        <h5><a href="/editBooking?id=${appointment._id}">${appointment.first_name} ${appointment.last_name}</a></h5>
                        <div>
                        Medical Conditions & Symptoms: ${appointment.MedicalConditionSymptoms}<br>
                            First Name: ${appointment.first_name} <br>
                            Last Name: ${appointment.last_name}<br>
                            NRIC: ${appointment.nric}<br>
                            Date Of Birth: ${appointment.dob}<br>
                            Email: ${appointment.email}<br>
                            </span>
                            </div>
                          </div>
                        </div>
                        </div>
                    `);
                })
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
})