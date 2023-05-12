class Lampa {
  #allapot;
  #id;
  divElem;
  constructor(id, allapot, szuloElem) {
    this.#id = id;
    this.#allapot = allapot;
    //this.szuloElem = szuloElem;
   // console.log(this.#allapot);
    szuloElem.append(`<div class="egylampa"></div>`);
    this.divElem = $(`article div:last-child`);
    this.szinBeallit();
    //console.log(this.divElem);
    this.divElem.on("click", () => {
      this.kattintasTrigger();
    });
    
  }
  setAllapot() {
    this.szinBeallit();
  }

  szinBeallit() {
    //$(selector).attr(attribute,function(index,currentvalue))
    //console.log(this.divElem);
    if (this.#allapot == true) {
      $(this.divElem).css("background-color", "green");
    } else {
      $(this.divElem).css("background-color", "yellow");
    }
  }

  kattintasTrigger() {
    const esemeny = new CustomEvent("kapcsolas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Lampa;
