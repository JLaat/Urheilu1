class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    urheilulaji,
    urheiluSaavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.urheilulaji = urheilulaji;
    this.urheiluSaavutukset = urheiluSaavutukset;
  }

  get kokonimi() {
    return `${this.etunimet} ${this.sukunimi}`;
  }
  get saavutukset() {
    return this.urheiluSaavutukset;
  }
  set saavutukset(saavutukset) {
    this.urheiluSaavutukset = saavutukset;
  }
  get laji() {
    return this.urheilulaji;
  }
  set laji(laji) {
    this.urheilulaji = laji;
  }
}

const seppoRaty = new Urheilija(
  "Seppo Henrik",
  "Räty",
  "Seppo",
  1962,
  "https://seura.fi/wp-content/uploads/2012/12/Sepporaty1s_548.jpg",
  102,
  "Keihäänheitto",
  "MM-tulokset: kultaa 1987, hopeaa 1991. Olympia-tulokset: hopeaa 1992, pronssia 1988 ja 1996"
);

console.log(
  `${seppoRaty.kokonimi}, ${seppoRaty.laji}, ${seppoRaty.saavutukset}`
);
