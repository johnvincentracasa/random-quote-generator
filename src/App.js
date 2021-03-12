import React, { useState, useEffect } from 'react';

const API =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(API);
        const quotes = await response.json();
        setQuotes(quotes.quotes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuotes();
  }, []);

  const handleRandomIndex = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
  };

  return (
    <div
      className="
                    quotes_body
                    d-flex justify-content-center
                    align-items-center
                    min-vw-100 
                    min-vh-100
                    
                    "
    >
      <div
        id="quote-box"
        className="
                      quotes_container
                      rounded
                      d-flex
                      justify-content-center
                      flex-column
                      p-4
                      "
      >
        <span className="mx-4">
          <i className="fa fa-quote-left" aria-hidden="true"></i>
        </span>
        <h5
          id="text"
          className="
                      
                       d-flex
                       justify-content-center
                       mx-5
                       "
        >
          {quotes ? ' ' + quotes[index].quote : ''}
        </h5>

        <p
          id="author"
          className="
                      d-flex
                      justify-content-end
                      pb-3
                      pr-5
                      text-muted
                      "
        >
          {quotes ? '-- ' + quotes[index].author : ''}
        </p>
        <div
          className="
                        btn_container 
                        d-flex 
                        justify-content-between
                        px-5
                        "
        >
          <a
            id="tweet-quote"
            className="btn btn-primary"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noreferrer noopener"
          >
            Twitter
          </a>

          <button id="new-quote" className="btn btn-secondary" onClick={handleRandomIndex}>
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
        by: <a href="/">my codepen</a>
      </div>
    </div>
  );
};

export default App;
