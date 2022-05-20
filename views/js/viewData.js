$(function () {

    $.ajax({
        method: 'GET',
        url: 'https://covid19.mathdro.id/api/countries/singapore/confirmed',
      }).done(function (data) {
        data.forEach(function (cd) {
          $("#data").append(`
                    <div class="row">
                    <div class="col s9">
                        <div class="card">
                        <div class="card-content">
                            <p>Data For Covid19 in: <br> ${cd.countryRegion}</p><br><br>
                            <p>Confirmed Covid19 cases: <br> ${cd.confirmed}</p><br><br>
                            <p>Death count: <br> ${cd.deaths}</p><br><br>
                            <p>Active Covid19 cases: <br> ${cd.active}</p><br><br>
                            <p>Cases in the past 28 days: <br> ${cd.cases28Days}</p><br><br>
                        </div>
                        <div class="card-action">
                            <a href="https://www.arcgis.com/apps/dashboards/bda7594740fd40299423467b48e9ecf6" target="_blank">Read More</a>
                        </div>
                        </div>
                    </div>
                    </div>
                      `);    
        });      

      })
      .fail(function (err) {
        console.log(err.responseText);
        JSON.stringify(data);
      });
  });