function replaceUrlsWithLinks(str)
{
    const urlMatches = str.match(/\bhttps?\S+/gi);
    const linkTemplate = `<a href="__url__" target="_blank">__url__</a>`;

    urlMatches.forEach((url) => {
        const linkTag = linkTemplate.replaceAll('__url__', url);
        str = str.replaceAll(url, linkTag);
    });

    return str;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((element) => {
        hljs.highlightElement(element);
        element.innerHTML = replaceUrlsWithLinks(element.innerHTML);
    });
});