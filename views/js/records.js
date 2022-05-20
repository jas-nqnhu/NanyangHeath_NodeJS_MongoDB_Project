$(function () {
  $.ajax({
    url: "/api/records?token=" + sessionStorage.authToken,
    method: "get",
  })
    .done(function (data) {
      if (sessionStorage.uRole == "Staff" || sessionStorage.uRole == "Admin" ) {  
        $(".addRecord").show();              
        data.forEach(function (record) {             
          $(".records").append(`        
          <div class="row">                            
          <div class="card  ">
              <div class="card-content white-text">
              <span class="card-title light-blue">Impatient Records</span>
                  <div class="black-text">
                  <h5>Personal Information:</h5>
                    Patient Name: ${record.patientName}<br>
                    Patient Phone: ${record.patientPhone}<br>
                    Address: ${record.address}<br>
                    Birthday: ${record.birthday} <br>
                    Height: ${record.height} m<br>
                    Weight: ${record.weight} kg<br>
                    Blood Type: ${record.bloodtype}<br>
                    Medical History: ${record.medicalHistory}<br>
                    Other Health Issues: ${record.otherHealthIssue}<br>
                    Added on:  ${record.createdAt}<br>
                    <h5>Nurse Information:</h5>
                    Your personal nurse is ${record.nurse.firstname}  ${record.nurse.lastname} <br>
                    Email:  ${record.nurse.email}<br>
                    Employee ID: ${record.nurse.employeeId}<br>
                    You can find her at ${record.nurse.workLoc}<br>
                  </div>
              </div>  
              <div class="card-action">
              <a href="treatmentRecord/editRecord?id=${record._id}">Edit Record</a>                               
              </div>                                                            
          </div>
      </div>
                      `);
        });
      } else if (sessionStorage.uRole == "User") {  
          data.forEach(function (record) {          
          if (record.user == sessionStorage.uID) {
            $(".records").append(`        
            <div class="row">                            
            <div class="card  ">
                <div class="card-content white-text">
                <span class="card-title light-blue">Personal Record Sheet</span>
                    <div class="black-text">
                    <h5>Personal Information:</h5>
                      Patient Name: ${record.patientName}<br>
                      Patient Phone: ${record.patientPhone}<br>
                      Address: ${record.address}<br>
                      Birthday: ${record.birthday} <br>
                      Height: ${record.height} m<br>
                      Weight: ${record.weight} kg<br>
                      Blood Type: ${record.bloodtype}<br>
                      Medical History: ${record.medicalHistory}<br>
                      Other Health Issues: ${record.otherHealthIssue}<br>
                      Added on:  ${record.createdAt}<br>
                    <h5>Nurse Information:</h5>
                    Your personal nurse is ${record.nurse.firstname}  ${record.nurse.lastname} <br>
                    Email:  ${record.nurse.email}<br>
                    Employee ID: ${record.nurse.employeeId}<br>
                    You can find her at ${record.nurse.workLoc}<br>
                    </div>
                </div>                                                             
            </div>
        </div>
                      `);
          } 
        });
      }
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
});
