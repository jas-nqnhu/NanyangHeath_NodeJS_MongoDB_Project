$(function () {
  $.ajax({
    url: "/status",
    method: "get",
  })
    .done(function (data) {
      data.forEach(function (vaccination) {
        $(".vaccinations").append(`        
                              <div class="row">                            
                              <div class="card teal ">
                                  <div class="card-content white-text">
                                  <span class="card-title">Record Details</span>
                                      <div class="">
                                      First Name: ${vaccination.first_name} <br>
                                      Last Name: ${vaccination.last_name}<br>
                                      NRIC: ${vaccination.nric}<br>
                                      Date Of Birth: ${vaccination.dob}<br>
                                      Email: ${vaccination.email}<br>
                                      Travel History: ${vaccination.travelhistory}<br>
                                      Symptoms: ${vaccination.symptoms}<br>
                                      Vaccination Status: ${vaccination.vacstatus}<br>
                                      Declarations: ${vaccination.declaration}<br>
                                      Added on:  ${vaccination.createdAt}<br>
                                      </div>
                                  </div>
                                  <div class="card-action">
                                  <a href="editStatus?id=${vaccination._id}">Edit Status</a>                               
                                  </div>                               
                              </div>
                          </div>
                      `);
      });
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
});