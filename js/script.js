function replaceUrlsWithLinks(str)
{
    var urlMatches = str.match(/\bhttps?\S+/gi);
    var linkTemplate = '<a href="__url__" target="_blank">__url__</a>';
    
    for (var i = 0; i < urlMatches.length; i++) {
        var linkTag = linkTemplate.replaceAll('__url__', urlMatches[i]);
        str = str.replaceAll(urlMatches[i], linkTag);
    }

    return str;
}

document.addEventListener('DOMContentLoaded', function () {
    var codeSnippets = document.querySelectorAll('pre code');
    for (var i = 0; i < codeSnippets.length; i++) {
        hljs.highlightElement(codeSnippets[i]);
        codeSnippets[i].innerHTML = replaceUrlsWithLinks(codeSnippets[i].innerHTML);
    }
});
