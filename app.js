console.log('Funguju!');
//vybrání všech karet s třídou .karticka
const karticky = document.querySelectorAll('.karticka');
//Pole otočených karet
let otoceneKarticky = [];
//pole nalezených dvojic
let zablokovaneKarticky = [];

const otocKartu = (karta) => {
  //nedelej nic pokud neobsahuje třidu .otocena nebo je disabled
  if (!karta.target.classList.contains('otocena') || karta.disabled === true) {
    return;
  }
  //otoč kartu
  karta.target.classList.remove('otocena');
  otoceneKarticky.push(karta);

  if (otoceneKarticky.length === 2) {
    const [karticka1, karticka2] = otoceneKarticky;
    const obrazek1 = karticka1.target.querySelector('img').src;
    const obrazek2 = karticka2.target.querySelector('img').src;

    if (obrazek1 === obrazek2) {
      karticka1.disabled = true;
      karticka2.disabled = true;

      otoceneKarticky = [];
      zablokovaneKarticky.push(karticka1);
      zablokovaneKarticky.push(karticka2);

      if (zablokovaneKarticky.length === 36) {
        setTimeout(() => {
          alert('Hra skončila.');
        }, 1000);
      }
    } else {
      setTimeout(() => {
        karticka1.target.classList.add('otocena');
        karticka2.target.classList.add('otocena');
        otoceneKarticky = [];
      }, 1000);
    }
  }
};

karticky.forEach((karticka) => {
  karticka.addEventListener('click', otocKartu);
});
