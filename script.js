function replaceUrlsWithLinks (str)
{
    var newStr = '';
    var splitContent = str.split('\n');
    splitContent.forEach((line) => {
        var urlMatch = line.match(/\bhttps?\S+/gi);
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
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
        block.innerHTML = replaceUrlsWithLinks(block.innerHTML);
    });
});