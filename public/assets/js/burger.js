// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devoured-it").on("click", function (event) {
        const id = $(this).data("id");
        const changeDevoured = $(this).data("changedevoured");

        const newDevouredState = {
            devoured: changeDevoured
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };
        if (newBurger.burger_name) {
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                () => {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } else {
            alert('Please enter a valid burger name');
        }
    });

});