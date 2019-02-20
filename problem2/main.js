import Paciente from "./Paciente.js";

let p1 = new Paciente("19/02/2000", "166 cm", "50 kg");

console.log(p1.dateNa);

p1.dateNa = "New date: 19/02/2001";
console.log(p1.dateNa);

p1.est = "New est: 176 cm";
console.log(p1.est);

p1.pes = "New pes: 60 kg";
console.log(p1.pes);

p1.imprimir();

