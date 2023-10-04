console.log('Funguju!');

const karticky = document.querySelectorAll('.karticka');
// první karta v poli má nastavenou třídu

const addClass = (e) => {
  const karticka = e.target;
  karticka.classList.toggle('otocena');

  if (!karticka.classList.contains('otocena')) {
    if (
      karticka.querySelector('img').src === karticka.querySelector('img').src
    ) {
    }
    setTimeout(() => {
      return karticka.classList.add('otocena');
    }, 1000);
  }
};

karticky.forEach((karticka) => {
  karticka.addEventListener('click', addClass);
});
