import fs from "fs";
const filePath = "./notas.json";

const listarNotas = () => {
  if (!fs.existsSync(filePath)) {
    console.log("No hay notas guardadas.");
    return;
  }
  const data = fs.readFileSync(filePath, "utf8");
  const notas = JSON.parse(data);
  notas.forEach((nota, index) => {
    console.log(`${index + 1}. ${nota.titulo}`);
    console.log(nota.contenido);
  });
};

export { listarNotas };