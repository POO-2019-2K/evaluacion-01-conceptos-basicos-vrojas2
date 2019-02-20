import Factura from "./Factura.js";

let f1 = new Factura("19/02/2019", "5000", "12345");

console.log(f1.dateFac);
console.log(f1.totFac);
console.log(f1.noFac);

f1.noFac = "New No.de factura: 2555";
console.log(f1.noFac);

f1.imprimir();
