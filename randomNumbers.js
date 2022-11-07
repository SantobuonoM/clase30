//const random = (req, res, next) => {

process.on("message", (msg) => {
  function generator(rad) {
    const arr = [];
    const obj = {};

    for (let index = 0; index < rad; index++) {
      const num = Math.floor(Math.random() * 1000 + 1);
      obj[num] = obj[num] ? obj[num] + 1 : 1;
    }

    const arrOrdenado = arr.sort();
    let cont = 1;
    for (let i = 0; i < arrOrdenado.length; i++) {
      if (arrOrdenado[i + 1] === arrOrdenado[i]) {
        cont++;
      } else {
        obj[arrOrdenado[i]] = cont;

        cont = 1;
      }
    }

    return obj;
  }

  const random = generator(msg);

  process.send(random);
  process.end;
});

process.send("listo");

//module.exports = {random};
