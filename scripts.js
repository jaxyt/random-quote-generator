
var quotes = [
    {
    quote: 'hi there', 
    source: 'jax', 
    citation: 'wiki', 
    year: 1768
    },
    {
    quote: 'hello', 
    source: 'adriel', 
    citation: 'wiki', 
    year: 1942
    },
    {
    quote: 'shut up', 
    source: 'olivia', 
    citation: 'wiki', 
    year: 800
    },
    {
    quote: 'dope sauce', 
    source: 'anon', 
    citation: 'wiki', 
    year: 1776
    },
    {
    quote: 'beans and cornbread', 
    source: 'jb smoove', 
    citation: 'tosh.0', 
    year: 2019
    }
];

var html = '';

function getRandomQuote(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex]
}

function printQuote(quotation) {
    html += '<h1 id="head">' + quotation.quote + '</h1>';
    html += '<p class="paragraph">-' + quotation.source+ ', ';
    html += '<span class="source">' + quotation.citation + '</span>, ';
    html += quotation.year + '</p>';

    document.write(html);
}


