$(function() {
    var source = $("#repos-template").html();
    var template = Handlebars.compile(source);
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/leohajder/repos",
        success: function(response) {
            var viewData = {
                repos: response
            }; //the JSON response from the GitHub API is unnamed, so I did this to make it easy to loop with Handlebars.js
            $("#projects").append(template(viewData));
        },
        error: function() {
            $("#projects").append("Sorry, something went wrong.");
        }
    });
});

$(document).on("click", ".navbar-collapse.in", function(e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
        $(this).collapse("hide");
    }
});
