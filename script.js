
const quotes = [
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Talk is cheap. Show me the code.",
  "Fix the cause, not the symptom.",
  "The best way to get a project done faster is to start sooner."
];

function getRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
}

// Event listener
document.getElementById('new-quote').addEventListener('click', getRandomQuote);

// Initial load
getRandomQuote();
