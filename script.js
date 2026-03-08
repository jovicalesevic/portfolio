// script.js

const SELECTORS = {
  button: '#vise-dugme',
  content: '#vise-tekst',
};

const LABELS = {
  expand: 'Više o meni',
  collapse: 'Manje',
};

function initExpandable(buttonSelector, contentSelector, labels = LABELS) {
  const button = document.querySelector(buttonSelector);
  const content = document.querySelector(contentSelector);

  if (!button || !content) return;

  const toggle = () => {
    const isHidden = content.classList.toggle('sakriven');
    button.textContent = isHidden ? labels.expand : labels.collapse;
    button.setAttribute('aria-expanded', !isHidden);
    content.setAttribute('aria-hidden', isHidden);
  };

  button.addEventListener('click', toggle);
}

initExpandable(SELECTORS.button, SELECTORS.content);
