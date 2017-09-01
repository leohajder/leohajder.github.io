$(function() {
    var sourceAge = $("#age-template").html();
    var templateAge = Handlebars.compile(sourceAge);
    var birthDay = "1987-11-14";
    var myAge = new Date(new Date() - new Date(birthDay)).getFullYear() - 1970;
    var dataAge = {
        age: myAge
    };
    $("#age").append(templateAge(dataAge));

    var sourceSkills = $("#skills-template").html();
    var templateSkills = Handlebars.compile(sourceSkills);
    var dataSkills = {
        skills: [
            {
                skill: "PHP",
                subsets: ["Symfony", "Sylius",]
            },
            {
                skill: "Python",
                subsets: ["Django", "Tkinter",]
            },
            {
                skill: "JavaScript",
                subsets: ["jQuery", "AJAX", "Handlebars.js",]
            },
            {
                skill: "C#",
                subsets: ["Windows Forms", "ASP.Net MVC",]
            },
            {
                skill: "HTML",
                subsets: ["Bootstrap", "Semantic UI", "Font Awesome",]
            },
            {
                skill: "CSS",
            },
            {
                skill: "SQL",
            },
            {
                skill: "Git",
            },
        ]
    };
    $("#skills").append(templateSkills(dataSkills));

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

    var sourceMusic = $("#music-template").html();
    var templateMusic = Handlebars.compile(sourceMusic);
    var dataMusic = {
        urls: [
            "https://www.youtube.com/embed/videoseries?list=PLEC1A7D5D8F5E7203",
            "https://www.youtube.com/embed/Xme5P55xZJw",
            "https://www.youtube.com/embed/videoseries?list=PL392EC9FEC6CDE8DE",
            "https://www.youtube.com/embed/videoseries?list=PL81F245C0FDAF7513",
            "https://www.youtube.com/embed/videoseries?list=PL8D71B82E74CAB164",
            "https://www.youtube.com/embed/Sl40IYO6KB0",
            "https://www.youtube.com/embed/ikIlgcc2YSY",
            "https://www.youtube.com/embed/SqwKEa3m8LU",
        ],
        frameBorder: "0"
    };
    $("#music").append(templateMusic(dataMusic));

    $(document).on("click", ".navbar-collapse.in", function(e) {
        if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
            $(this).collapse("hide");
        }
    });
});
