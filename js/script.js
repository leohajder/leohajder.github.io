function replaceUrlsWithLinks(str)
{
    let newStr = '';
    const splitContent = str.split('\n');
    splitContent.forEach((line) => {
        const urlMatch = line.match(/\bhttps?\S+/gi);
        if (urlMatch) {
            const url = urlMatch[0];
            const linkTemplate = `<a href="__url__" target="_blank">__url__</a>`;
            const aTag = linkTemplate.replaceAll('__url__', url);
            const preparedLine = line.replaceAll(url, aTag);

            newStr += preparedLine + '\n';
        } else {
            newStr += line + '\n';
        }
    });

    return newStr;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((element) => {
        hljs.highlightElement(element);
        element.innerHTML = replaceUrlsWithLinks(element.innerHTML);
    });
});