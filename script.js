// script.js

const dugme = document.querySelector('#vise-dugme');
const dodatniTekst = document.querySelector('#vise-tekst');

if (!dugme || !dodatniTekst) return;

const toggleOpis = () => {
  const sakriven = dodatniTekst.classList.toggle('sakriven');
  dugme.textContent = sakriven ? 'Više o meni' : 'Manje';
};

dugme.addEventListener('click', toggleOpis);
