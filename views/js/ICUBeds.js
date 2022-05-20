$(function () {
  $.ajax({
    url: "https://data.gov.sg/api/action/datastore_search?resource_id=b5ae6ad5-1272-41f4-a4e5-23308ad6e32d",
    method: "get",
  })
    .done(function (data) {
      data.result.records.reverse().forEach(function (records) {      
        $(".table-body").append(`
        <tr>
        <td>${records.as_of_date}</td>
        <td>${records.status}</td>
        <td>${records.value}</td>
      </tr>
            `)
      });
    })
    .fail(function (err) {
      console.log(err.responseText);
    });
});
