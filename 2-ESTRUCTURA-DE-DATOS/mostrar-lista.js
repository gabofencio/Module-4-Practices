import { listaDeCompras } from "./lista-de-productos.js";

const mostrarLista = () => {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
}
export {
    mostrarLista,
}