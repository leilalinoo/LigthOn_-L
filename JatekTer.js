import Lampa from "./Lampa.js";
class JatekTer {
  #db;
  #allapotLista = [];
  #meret;
  #lepes;

  constructor() {
   this.#meret = 3*3;
    this.#allapotLista = [false, false, false, true, false, false, false, false, false]
    const SZULOELEM = $("article")
    console.log(this.#meret)
    for (let index = 0; index < this.#meret; index++) {
      const elem = new Lampa(index, this.#allapotLista[index], SZULOELEM);
      console.log(elem)
    }
  }

  #setAllapotLista() {}

  #szomszedokKeresese(id) {

  }

  #init() {}

  #ellenorzes() {}
}


export default JatekTer