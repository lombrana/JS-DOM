const QUOTES = [
  {
    quote: "Lorem ipsum bla, blas, blas",
    author: "Jose Botella",
    year: 2022,
  },

  {
    quote: "Marcapasos en el cielo blas, blas",
    author: "Freud Simon",
    year: 2000,
  },

  {
    quote: "Todos los caminos llevan a Roma",
    author: "Antonio Aurelio",
    year: 560,
  },
];

const quotesList = document.querySelector("#quotes-list");


const getQuoteTemplate = (quote, author, year) => {
  return `<div class="quote-block">
    <blockquote>${quote}</blockquote>
    <p>${author} - ${year}</p>
    </div>`;
};

const setupQuotesList = () => {

  for (let i = 0; i < QUOTES.length; i++) {
    const quoteElement = QUOTES[i];

    quotesList.innerHTML += getQuoteTemplate(
      quoteElement.quote,
      quoteElement.author,
      quoteElement.year
    );
  }
};

const handleFormSumit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;

    const newQuote = {
        author: formElements.author.value,
        quote: formElements.quote.value,
        year: formElements.year.value,
    };

    console.log(newQuote)
    quotesList.innerHTML += getQuoteTemplate(
        newQuote.quote,
        newQuote.author,
        newQuote.year,
    );

    event.target.reset();
};

const form = document.querySelector('#quote-form');
form.addEventListener('submit', handleFormSumit);

setupQuotesList();
