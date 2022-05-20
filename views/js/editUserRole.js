var userId = 0;
$(function () { // This is our so called “ready” function in shorthand
    var urlParams = new URLSearchParams(window.location.search);
    bookingId = urlParams.get('id');

    $.ajax({
        url: "/user/" +
            userId +
            "?token=" +
            sessionStorage.authToken,
        method: "get"
    }).done(
        function (data) {
            $('#name').val(data.name);
            $('#email').val(data.email);
            $('#role').val(data.role);

        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    $("#deleteUserBtn").on("click", function () {
        if (confirm("Are you sure you want to delete this?")) {
            $.ajax({
                url: "deleteUserRole/" +
                    userId +
                    "?token=" +
                    sessionStorage.authToken,
                method: "delete",
            })
                .done(function (data) {
                    alert(`Deleted record id: ${userId}!!!`);
                    window.location.href = "/manageUserRoles";
                })
                .fail(function (err) {
                    console.log(err.responseText);
                });
        }
        else {
            return false;
        }
    });
});
function editUserRole() {
    var user = {
        id: userId,
        name: $("#name").val(),
        email: $("#email").val(),
        role: $("#role").val()
    };
    $.ajax(
        {
            url: '/editUserRole' + "?token=" + sessionStorage.authToken,
            method: 'put',
            data: user
        }
    ).done(
        function (data) {
            alert("User Role updated!");
            window.location.href = "/manageUserRoles";
        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    return false;
}
