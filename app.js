import { agregarNota } from "./8-MANEJO-DE-ARCHIVOS-CON-NODE/agregar-nota.js";
import { listarNotas } from "./8-MANEJO-DE-ARCHIVOS-CON-NODE/listar-nota.js";
import { eliminarNota } from "./8-MANEJO-DE-ARCHIVOS-CON-NODE/eliminar-nota.js";

agregarNota("Compras", "Maíz Pozolero, Agua Bonafont y Chips Fuego.");
agregarNota("Trabajo", "Terminar diseño industrial de pistón para motor boxer.");
agregarNota("Ocio", "Ver por tercera vez los sopranos.");
listarNotas();
eliminarNota("Compras");
listarNotas();