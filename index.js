let quotes = document.getElementById('quote');
let authors = document.getElementById('author');
const button = document.getElementById('getQuote');
const container = document.getElementById('container');

button.addEventListener('click', randomQuote = () => {
  button.disabled = true; // Disable the button
  container.classList.add('loading'); // Add loading class to the container

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
    })
    .finally(() => {
      button.disabled = false; // Enable the button
      container.classList.remove('loading'); // Remove loading class from the container
    });
});

const showError = (message) => {
  container.innerHTML = `<p>Error: ${message}</p>`;
};


