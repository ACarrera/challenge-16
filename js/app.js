/* Pedirle números al usuario hasta que el usuario aprete el botón de cancelar.
Verificar que lo ingresado por el usuario sea un número válido (avisar por alert si no lo es).
Al apretar cancelar, se deben mostrar todos los números juntos.*/


let surrender = false;
let numbers2 = "";
while (surrender == false) {
  let numbers1 = parseInt(prompt("ingresa un numero"));
  if (isNaN(numbers1)) {
    alert("no es un numero");
  }else{
    let execute = confirm("quiere ingresar otro numero?");
    if (execute == true) {
      numbers2 = numbers2 + numbers1;
    } else {
      surrender = true;
      console.log(numbers2 + numbers1);
    }
  }
}
