import { listaDeCompras } from "./lista-de-productos.js";

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index > -1) {
        listaDeCompras.splice(index, 1);
    }
}
export {
    eliminarProducto,
    }