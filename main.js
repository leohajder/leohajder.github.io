$(function() {
    var sourceRepos = $("#repos-template").html();
    var templateRepos = Handlebars.compile(sourceRepos);
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/leohajder/repos",
        success: function(response) {
            var dataRepos = {
                repos: response
            }; //the JSON response from the GitHub API is unnamed, so I did this to make it easy to loop with Handlebars.js
            $("#github").append(templateRepos(dataRepos));
        },
        error: function() {
            $("#github").append("Sorry, something went wrong.");
        }
    });
});

$(document).on("click", ".navbar-collapse.in", function(e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
        $(this).collapse("hide");
    }
});
