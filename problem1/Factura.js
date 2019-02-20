export default class Factura {
    constructor(dateFac, totFac, noFac) {
        this._dateFac = dateFac;
        this._totFac = totFac;
        this._noFac = noFac;
    }

    imprimir(){
        console.log(`${this._dateFac}, ${this._totFac}, ${this._noFac}`);
    }

    get dateFac(){
        return this._dateFac;
    }

    get totFac(){
        return this._totFac;
    }

    get noFac(){
        return this._noFac;
    }

    set noFac(noFac){
        this._noFac = noFac;
    }


}
