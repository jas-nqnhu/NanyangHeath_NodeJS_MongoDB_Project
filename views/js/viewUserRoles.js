$(function () {
    $.ajax({
        url: "/viewUsers",
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function (user) {
                    $(".users").append(`                    
                        <div class="row center">
                        <div class="">
                        <div class="card-panel teal">
                        <span class="white-text">
                        <h5><a href="/editUserRole?id=${user._id}">${user.name}</a></h5>
                        <div>
                            Email: ${user.email}<br>
                            Role: ${user.role} <br>
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