$(function () {
  $.ajax({
    url: "https://data.gov.sg/api/action/datastore_search?resource_id=1ee4d904-b17e-41de-a731-854578b036e6&limit=5",
    method: "get",
  })
    .done(function (data) {
      data.result.records.reverse().forEach(function (records) {
        $(".table-body").append(`
          <tr>
          <td>${records.date}</td>
          <td>${records.average_daily_number_of_art_swabs_tested_over_the_past_week}</td>
        </tr>
              `);
      });
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
});
$('#artForm').attr('action', `/ART?token=${sessionStorage.authToken}`);

