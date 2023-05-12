class Lampa {
  #allapot;
  #id;
  #divElem;
  constructor(id, allapot, szuloElem) {
    this.#id = id;
    this.#allapot = true;
    //this.szuloElem = szuloElem;
    szuloElem.append(`<div class="egylampa"></div>`);
    this.divElem = $(`article div:last-child`);
    this.#divElem.on("click", () => {
      this.#kattintasTrigger();
    });
  }
  setAllapot() {
    szinBeallit();
  }

  #szinBeallit() {
    //$(selector).attr(attribute,function(index,currentvalue))

    if(this.#allapot == true){
        $(this.#divElem) = $(`article div:last-child`);
    }
    else{
        $(this.#divElem) = $(`article div:last-child`);
    }

  }
  #kattintasTrigger() {
    const esmeny = new CustomEvent("kapcsolas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Lampa;
