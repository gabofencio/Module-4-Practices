import fs from "fs";
const filePath = "./notas.json";

const agregarNota = (titulo, contenido) => {
  let notas = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    notas = JSON.parse(data);
  }
  notas.push({ titulo, contenido });
  fs.writeFileSync(
    filePath,
    JSON.stringify(notas, null, 2)
  );
  console.log("Nota agregada con éxito.");
};

export { agregarNota };