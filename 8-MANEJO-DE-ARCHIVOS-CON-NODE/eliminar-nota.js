import fs from "fs";
const filePath = "./notas.json";
const eliminarNota = (titulo) => {
  if (!fs.existsSync(filePath)) {
    console.log("No hay notas para eliminar.");
    return;
  }
  const data = fs.readFileSync(filePath, "utf8");
  const notas = JSON.parse(data);
  const notasRestantes = notas.filter(
    (nota) => nota.titulo !== titulo
  );
  fs.writeFileSync(
    filePath,
    JSON.stringify(notasRestantes, null, 2)
  );
  console.log(`Nota con título "${titulo}" eliminada.`);
};

export { eliminarNota };