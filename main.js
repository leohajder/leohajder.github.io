$(function () {
    var source = $('#template').html();
    var template = Handlebars.compile(source);
    var data = {
        age: function () {
            var birthDay = '1987-11-14';
            return new Date(new Date() - new Date(birthDay)).getFullYear() - 1970;
        },
        job: {
            title: 'junior developer',
            company: 'MojPosao (Tau On-Line d.o.o.)',
            site: 'https://www.moj-posao.net',
            location: 'Zagreb, Croatia'
        },
        skills: [{
                skill: 'PHP',
                subsets: ['Symfony', 'Sylius']
            },
            {
                skill: 'Python',
                subsets: ['Django', 'Tkinter']
            },
            {
                skill: 'JavaScript',
                subsets: ['jQuery', 'AJAX', 'Handlebars.js']
            },
            {
                skill: 'C#',
                subsets: ['Windows Forms', 'ASP.Net MVC']
            },
            {
                skill: 'HTML',
                subsets: ['Bootstrap', 'Semantic UI', 'Font Awesome']
            },
            {
                skill: 'CSS'
            },
            {
                skill: 'SQL'
            },
            {
                skill: 'Git'
            }
        ],
        music: {
            urls: [
                'https://www.youtube.com/embed/videoseries?list=PLEC1A7D5D8F5E7203',
                'https://www.youtube.com/embed/Xme5P55xZJw',
                'https://www.youtube.com/embed/videoseries?list=PL392EC9FEC6CDE8DE',
                'https://www.youtube.com/embed/videoseries?list=PL81F245C0FDAF7513',
                'https://www.youtube.com/embed/videoseries?list=PL8D71B82E74CAB164',
                'https://www.youtube.com/embed/Sl40IYO6KB0',
                'https://www.youtube.com/embed/ikIlgcc2YSY',
                'https://www.youtube.com/embed/SqwKEa3m8LU'
            ],
            frameBorder: '0'
        },
        contact: [{
                name: 'email',
                url: 'mailto:leohajder@gmail.com',
                icon: 'fa-envelope-o'
            },
            {
                name: 'github',
                url: 'https://github.com/leohajder',
                icon: 'fa-github'
            },
            {
                name: 'linkedin',
                url: 'http://www.linkedin.com/in/leohajder',
                icon: 'fa-linkedin'
            },
            {
                name: 'freecodecamp',
                url: 'https://www.freecodecamp.com/leohajder',
                icon: 'fa-free-code-camp'
            },
            {
                name: 'codepen',
                url: 'https://codepen.io/leohajder/',
                icon: 'fa-codepen'
            },
            {
                name: 'facebook',
                url: 'https://www.facebook.com/leohajder',
                icon: 'fa-facebook'
            },
            {
                name: 'youtube',
                url: 'https://www.youtube.com/c/leohajder',
                icon: 'fa-youtube-play'
            },
            {
                name: 'lastfm',
                url: 'https://www.last.fm/user/leohajder',
                icon: 'fa-lastfm'
            }
        ],
        repos: null
    };

    $.ajax({
        url: 'https://api.github.com/users/leohajder/repos'
    }).done(function (response) {
        data.repos = response
    }).fail(function () {
        data.repos = {}
    }).always(function () {
        $('#content').append(template(data))
    });

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide')
        }
    });
})
