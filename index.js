let quotes = document.getElementById('quote');
let authors = document.getElementById('author');
const button = document.getElementById('getQuote');

button.addEventListener('click', randomQuote = () => {
  const url = "https://api.quotable.io/random";
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error('Fetch failed!');
      }
    })
    .then(data => {
      quotes.textContent = data.content;
      authors.textContent = "By: " + data.author;
    })
    .catch(error => {
      showError(error.message);
    });
});

const showError = (message) => {
  container.innerHTML = `<p>Error: ${message}</p>`;
};

