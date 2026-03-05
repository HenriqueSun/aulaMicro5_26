const express = require("express");
const app = express();

app.get("/:henrique",(req,rest) => {
    const {henrique} = req.params;
  rest.status(200).json({
    mensagem: `Seja Bem-Vindo ${henrique}`
  });
});

app.listen(3016, () => {
  console.log("Servidor on Junior Junior Henrique Casagrande");
});