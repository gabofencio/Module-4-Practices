import {invitados} from "./invitados.js";
import {encontrarInvitados} from "./punteros.js";

const resultado = encontrarInvitados(invitados);
function mostrarResultado() {
if (resultado) {
    console.log(`El primer par es: ${resultado[0]} y ${resultado[1]}`);
} else {
    console.log("No se encontró ningún par.");
}};
export { mostrarResultado };