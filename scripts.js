
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
    html += '<h2>quote: ' + quotation.quote + '</h2>';
    html += '<p>source: ' + quotation.source+ '</p>';
    html += '<p>citation: ' + quotation.citation + '</p>';
    html += '<p>year: ' + quotation.year + '</p>';
    document.write(html);
}

var randQuote = getRandomQuote(quotes);
printQuote(randQuote);
