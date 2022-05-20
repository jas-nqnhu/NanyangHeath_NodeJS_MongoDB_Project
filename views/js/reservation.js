function addReservation() {
    var reservation = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        date: $("#date").val(),
        book_time: $("#book_time").val(),
        person: $("#person").val(),
    };
    $.ajax({
            url: "/addReservation",
            method: "post",
            data: reservation,
          })
            .done(function (data) {
              $(".error-message").text(data.message);
              location.href = data.redirect;
            })
            .fail(function (err) {
              console.log(err);
              $(".error-message").text(err.responseText);
            });
          return true;
};