$(function() {
    var sourceAge = $("#age-template").html();
    var templateAge = Handlebars.compile(sourceAge);
    var myAge = new Date(new Date() - new Date('1987-11-14')).getFullYear() - 1970
    var dataAge = {
        age: myAge
    };
    $("#age").append(templateAge(dataAge));

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

    $(document).on("click", ".navbar-collapse.in", function(e) {
        if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
            $(this).collapse("hide");
        }
    });
});
