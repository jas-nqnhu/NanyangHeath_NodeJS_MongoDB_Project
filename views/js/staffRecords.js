$(function () {
  $.ajax({
    url: "/api/staffRecords?token=" + sessionStorage.authToken,
    method: "get",
  })
    .done(function (data) {
      if (sessionStorage.uRole == "Staff") {
        data.forEach(function (record) {
          $(".addRecord").hide();
          $(".staffRecords").append(`        
                                <div class="row">                            
                                <div class="card  ">
                                    <div class="card-content white-text">
                                    <span class="card-title light-blue">Employee Information Sheet</span>
                                        <div class="black-text">
                                        <h5>Personal Information:</h5>
                                            Staff Name: ${record.firstname} ${record.lastname}<br>
                                            Address: ${record.address}<br>
                                            Birth Date: ${record.birthday}<br>
                                            Cell Phone: ${record.cellphone}<br>
                                            Email: ${record.email}<br>                                            
                                            Maritial Status: ${record.maritialStat} <br>
                                        <h5>Job Information:</h5>
                                            Titile: ${record.title}<br>
                                            Employee ID: ${record.employeeId}<br>
                                            Start Date: ${record.startDate}<br>
                                            Department:  ${record.deparment}<br>
                                            Work Location:  ${record.workLoc}<br>
                                            Salary:  $${record.salary}<br>
                                            Supervisor:  ${record.supervisor}<br>
                                        <h5>Emergency Contact Information:</h5>
                                            Name: ${record.efirstname} ${record.elastname}<br>
                                            Address: ${record.eaddress}<br>
                                            Cell Phone: ${record.ecellphone}<br>                                      
                                            Relationship: ${record.Relationship} <br>
                                        </div>
                                    </div>                                                             
                                </div>
                            </div>
                        `);
        });
      } else if (sessionStorage.uRole == "Admin"){
        data.forEach(function (record) {
        $(".staffRecords").append(`        
                                <div class="row">                            
                                <div class="card  ">
                                    <div class="card-content white-text">
                                    <span class="card-title light-blue">Employee Information Sheet</span>
                                        <div class="black-text">
                                        <h5>Personal Information:</h5>
                                            Staff Name: ${record.firstname} ${record.lastname}<br>
                                            Address: ${record.address}<br>
                                            Birth Date: ${record.birthday}<br>
                                            Cell Phone: ${record.cellphone}<br>
                                            Email: ${record.email}<br>                                            
                                            Maritial Status: ${record.maritialStat} <br>
                                        <h5>Job Information:</h5>
                                            Titile: ${record.title}<br>
                                            Employee ID: ${record.employeeId}<br>
                                            Start Date: ${record.startDate}<br>
                                            Department:  ${record.deparment}<br>
                                            Work Location:  ${record.workLoc}<br>
                                            Salary:  $${record.salary}<br>
                                            Supervisor:  ${record.supervisor}<br>
                                        <h5>Emergency Contact Information:</h5>
                                            Name: ${record.efirstname} ${record.elastname}<br>
                                            Address: ${record.eaddress}<br>
                                            Cell Phone: ${record.ecellphone}<br>                                      
                                            Relationship: ${record.Relationship} <br>
                                        </div>
                                    </div>
                                    <div class="card-action">
                                    <a href="staffRecord/editStaffRecord?id=${record._id}">Edit Record</a>                               
                                    </div>                            
                                </div>
                            </div>
                        `);
        });
      }
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
});
