export default class Paciente {
    constructor(dateNa, est, pes) {
        this._dateNa = dateNa;
        this._est = est;
        this._pes = pes;
    }

    imprimir(){
        console.log(`${this._dateNa}, ${this._est}, ${this._pes}`);
    }

    get dateNa(){
        return this._dateNa;
    }

    get est(){
        return this._est;
    }

    get pes(){
        return this._pes;
    }

    set dateNa(dateNa){
        this._dateNa = dateNa;
    }

    set est(est){
        this._est = est;
    }
    
    set pes(pes){
        this._pes = pes;
    }

}
