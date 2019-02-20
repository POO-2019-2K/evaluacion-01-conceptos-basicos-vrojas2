export default class Casa {
    constructor(pre, sup, noHa, noBa) {
        this._pre = pre;
        this._sup = sup;
        this._noHa = noHa;
        this._noBa = noBa;
    }

    imprimir(){
        console.log(`${this._pre}, ${this._sup}, ${this._noHa}, ${this._noBa}`);
    }

    get pre(){
        return this._pre;
    }

    get sup(){
        return this._sup;
    }

    get noHa(){
        return this._noHa;
    }

    get noBa(){
        return this._noBa;
    }

    set noHa(noHa){
        this._noHa = noHa;
    }

    set noBa(noBa){
        this._noBa = noBa;
    }

}
