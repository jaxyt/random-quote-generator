
var quotes = [
    {
        quote: 'Get busy living or get busy dying.', 
        source: 'Stephen King', 
        citation: 'Shawshank Redemption', 
        year: 1994
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', 
        source: 'Eleanor Roosevelt',  
        year: 1987
    },
    {
        quote: 'Those who dare to fail miserably can achieve greatly.', 
        source: 'John F. Kennedy', 
        citation: 'US Inaugural Address', 
        year: 1989
    },
    {
        quote: 'It is hard to fail, but it is worse never to have tried to succeed.', 
        source: 'Theodore Roosevelt', 
    },
    {
        quote: 'Every man loves justice at another man’s expense.', 
        source: 'Anonymous',
        citation: 'Forbes'
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
    if (quotation.year && quotation.citation) {
        output.innerHTML = '<h1 id="head">“' + quotation.quote + '”</h1>' + '<p class="paragraph">-' + quotation.source + ', <span class="citation">' + quotation.citation + '</span>, ' + quotation.year + '</p>';
    } else if (quotation.year) {
        output.innerHTML = '<h1 id="head">“' + quotation.quote + '”</h1>' + '<p class="paragraph">-' + quotation.source + ', ' + quotation.year + '</p>';
    } else if (quotation.citation) {
        output.innerHTML = '<h1 id="head">“' + quotation.quote + '”</h1>' + '<p class="paragraph">-' + quotation.source + ', <span class="citation">' + quotation.citation + '</span></p>';
    } else {
        output.innerHTML = '<h1 id="head">“' + quotation.quote + '”</h1>' + '<p class="paragraph">-' + quotation.source +'</p>';
    }
}


 printQuote(getRandomQuote(quotes));