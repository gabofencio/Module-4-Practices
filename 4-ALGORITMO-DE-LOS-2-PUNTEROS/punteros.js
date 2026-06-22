import {invitados} from "./invitados.js";
function encontrarInvitados(invitados) {
    let inicio = 0;
    let fin = 1;

    while (fin < invitados.length) {
        const inicialInicio = invitados[inicio][0];
        const inicialFin = invitados[fin][0];

        if (inicialInicio === inicialFin) {
            return [invitados[inicio], invitados[fin]];
        }

        inicio++;
        fin++;
    }

    return null;
}

export{
    encontrarInvitados
}
