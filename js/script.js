function replaceUrlsWithLinks(str)
{
    var urlMatches = str.match(/\bhttps?\S+/gi);
    var linkTemplate = '<a href="__url__" target="_blank">__url__</a>';

    urlMatches.forEach(function (url) {
        var linkTag = linkTemplate.replaceAll('__url__', url);
        str = str.replaceAll(url, linkTag);
    });

    return str;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre code').forEach(function (element) {
        hljs.highlightElement(element);
        element.innerHTML = replaceUrlsWithLinks(element.innerHTML);
    });
});