# leohajder.github.io

My personal website with a short CV, portfolio and social media links.

## Resources

- [Bootstrap](http://getbootstrap.com/)
- [Bootswatch](https://bootswatch.com/)
- [Font Awesome](http://fontawesome.io/)
- [GitHub API](https://developer.github.com/v3/)
- [Handlebars.js](http://handlebarsjs.com/)
- [jQuery](https://jquery.com/)

## How it works

JSON data, some of which we get via AJAX, gets passed to and templated by Handlebars.js. I have precompiled the Handlebars templates to javascript and minified files with the [Minify plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=HookyQR.minify). There is no database, so I put all dynamic data in a json file on a GitHub gist and get the data via AJAX. Just make sure you get the latest file and **not some revision**. Just add `/raw` to the gist url.

## The process

- `sudo apt-get install -y nodejs npm` to install node and npm
- `sudo npm install -g handlebars` to install handlebars globally
- `handlebars src/tpl/template.handlebars -f dist/js/template.js` to compile the template to javascript
- minify `dist/js/template.js` to `dist/js/template.min.js`
- delete `dist/js/template.js`
- git commit
- git push

## Create your own GitHub page

Put the contents of your site in a new rpository named `<your_username>.github.io` and push. For more info visit [pages.github.com](https://pages.github.com/).

Visit [leohajder.github.io](https://leohajder.github.io/).
