import Lampa from "./Lampa.js";
class JatekTer {
  #db;
  #allapotLista = [];
  #meret;
  #lepes;

  constructor() {
    this.#meret = 3 * 3;
    this.#allapotLista = [true,true,true,true,true,true,true,true];
    const SZULOELEM = $("article");
    //console.log(this.#meret);

    for (let index = 0; index < this.#meret; index++) {
      const elem = new Lampa(index, this.#allapotLista[index], SZULOELEM);
      console.log(elem);
    }

    $(window).on("kapcsolas", (event) => {
      event.detail.setAllapot(this.#allapotLista);
    });
  }

  setAllapotLista() {
    for (let index = 0; index < this.#meret; index++) {
      const element = Math.floor(Math.random() * 3);
      console.log(element);
      if (element == 0) {
        this.#allapotLista[index] = false;
      } else {
        this.#allapotLista[index] = true;
      }
    }
  }

  szomszedokKeresese(id) {}

  init() {}

  ellenorzes() {}
}

export default JatekTer;
