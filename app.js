console.log('Funguju!');
//vybrání všech karet s třídou .karticka
const karticky = document.querySelectorAll('.karticka');
//Pole otočených karet
let otoceneKarticky = [];
//pole nalezených dvojic
let zablokovaneKarticky = [];

const otocKartu = (e) => {
  //nedelej nic pokud neobsahuje třidu .otocena nebo je disabled
  if (!e.target.classList.contains('otocena') || e.disabled === true) {
    return;
  }
  //nebo otoč kartu
  e.target.classList.remove('otocena');
  otoceneKarticky.push(e);

  //pole otocených karet obsahuje 2 znaky
  if (otoceneKarticky.length === 2) {
    const [karticka1, karticka2] = otoceneKarticky;
    //1. vybere z karet zdroje
    const obrazek1 = karticka1.target.querySelector('img').src;
    const obrazek2 = karticka2.target.querySelector('img').src;
    //2. porovná zdroje
    if (obrazek1 === obrazek2) {
      //když se rovnají zablokuje je, aby se neotočily
      karticka1.disabled = true;
      karticka2.disabled = true;
      //vyprázdní pole
      otoceneKarticky = [];
      //pushne je do zablokovaných karet
      zablokovaneKarticky.push(karticka1);
      zablokovaneKarticky.push(karticka2);

      //Když pole zablokovaných karet je dlouhé 36 znaků, spustí se časovač HRA SKONČILA
      if (zablokovaneKarticky.length === 36) {
        setTimeout(() => {
          alert('Hra skončila.');
        }, 1000);
      }

      // Nebo pokud nevyšla ani jedna podmínka, otočí je zpět a vyprádní pole otočených karet
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
