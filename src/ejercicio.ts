let btnEnv = document.getElementById("btnEnv");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
rotulo1.innerHTML = "Ingrese la base: ";
rotulo2.innerHTML = "Ingrese la altura: ";

let base: number = Number(dato1.value);
let altura: number = Number(dato2.value);
let area: number = base * altura;

//btnEnviarBase.addEventListener("click", () => {
//console.log("La base es:", dato1.value);
//});

//btnEnviarAltura.addEventListener("click", () => {
//console.log("La altura es:", dato2.value);
btnEnv.addEventListener("click", () => {
  console.log("Resultado:", area);
});
