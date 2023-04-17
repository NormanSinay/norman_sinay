let menu = prompt("¿Qué desea pedir en su orden de comida? (carne, pescado o verdura)")

switch (menu) {
  case "carne":
    alert("Como bebida se le ofrece vino tinto.")
    console.log("Como bebida se le ofrece vino tinto.")
    break;
  case "pescado":
    alert("Como bebida se le ofrece vino blanco.")
    console.log("Como bebida se le ofrece vino blanco.")
    break;
  case "verdura":
    alert("Como bebida se le ofrece agua.")
    console.log("Como bebida se le ofrece agua.")
    break;
  default:
    alert("Por favor, elija carne, pescado o verdura.")
    console.log("Por favor, elija carne, pescado o verdura.")
    break;
}
