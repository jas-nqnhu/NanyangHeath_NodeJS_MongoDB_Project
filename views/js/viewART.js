$(function () {
  $.ajax({
    url: "/api/arts?token=" + sessionStorage.authToken,
    method: "get",
  })
    .done(function (data) {
      if (sessionStorage.uRole == "Staff") {
        data.forEach(function (record) {
          $(".arts").append(`        
                                  <div class="row">                            
                                  <div class="card  ">
                                      <div class="card-content white-text">
                                      <span class="card-title light-blue">ART Results</span>
                                          <div class="black-text">                                         
                                              Name: ${record.user.name} <br>
                                              Date Taken: ${record.dateTaken}<br>
                                              Result: ${record.result}<br>                                                                                           
                                          </div>
                                      </div>
                                      <div class="card-image">
                                        <img src="../${record.imgPath}" alt="${record.imgPath}"> <br>                                        
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
