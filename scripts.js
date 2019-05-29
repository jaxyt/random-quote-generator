
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
    },
    {
        quote: 'Humility is no substitute for a good personality.', 
        source: 'Fran Leibowitz', 
        citation: 'Metropolitan Life', 
        year: 1978
    }
];


function getRandomQuote(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex]
}

function printQuote(quotation) {
    var output = document.getElementById('output');
    output.innerHTML = '<h1 id="head">“' + quotation.quote + '”</h1>' + '<p class="paragraph">-' + quotation.source + ', <span class="citation">' + quotation.citation + '</span>, ' + quotation.year + '</p>';
}


 printQuote(getRandomQuote(quotes));