import { listaDeCompras } from "./lista-de-productos.js";

const agregarProducto = (producto) => {
    listaDeCompras.push(producto);
}

export {
    agregarProducto,
}   