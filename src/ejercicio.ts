let btnEnv = document.getElementById("btnEnv");
let base = document.getElementById("base");
let altura = document.getElementById("altura");
rotulo1.innerHTML = "Ingrese la base: ";
rotulo2.innerHTML = "Ingrese la altura: ";

//let base: number = Number(dato1.value);
//let altura: number = Number(dato2.value);

//btnEnviarBase.addEventListener("click", () => {
//console.log("La base es:", dato1.value);
//});

//btnEnviarAltura.addEventListener("click", () => {
//console.log("La altura es:", dato2.value);
btnEnv.addEventListener("click", () => {
  let area: number = Number(base.value) * Number(altura.value);
  console.log("Resultado:", area);
});
