document.addEventListener('DOMContentLoaded', function () {
    var codeSnippets = document.querySelectorAll('pre code');
    for (var i = 0; i < codeSnippets.length; i++) {
        hljs.highlightElement(codeSnippets[i]);
    }
});
