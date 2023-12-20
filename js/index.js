//Use an array to hold the value of the quotes
var Quotes = [
    
    {'author': ' Bernard M. Baruch', 
     'quote': 'Be who you are and say what you feel, because those who mind do not matter.'
    },
    {'author': ' Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': ' Robert Frost', 
     'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on.'
    },
    {'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you don\'t have to remember anything.'
    },
    {'author': ' Andre Gide', 
     'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
];

function newQuote()
{
    var random = Number.parseInt(Math.random()* Quotes.length);
    document.getElementById("quoteDisplay").innerHTML= Quotes[random].quote;
    document.getElementById("authorDisplay").innerHTML= Quotes[random].author;
    
}  

