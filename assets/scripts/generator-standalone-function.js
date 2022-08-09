const titulos = {
  filmes: [
    "O Senhor Dos Anéis: A Sociedade do Anel",
    "De Pernas Pro Ar",
    "Professor Aloprado",
    "Um Sonho de Liberdade",
    "O Poderoso Chefão",
    "Batman: Cavaleiro das Trevas",
    "A Lista de Shindler",
    "11 Homens e um Segredo",
    "Clube da Luta",
    "Forrest Gump: O Contador de Histórias",
    "Era Uma Vez em Hollywood",
    "Os Oito Odiados",
    "Django Livre",
    "Bastardos Inglórios",
    "Django Livre",
    "Kill Bill",
    "Cães de Aluguel",
  ],
};


const tituloFilme = (mod, cat) => {
  let arr = "";
  switch (cat) {
    case "filmes":
      arr = titulos.filmes;

      break;
    case "series":
      arr = titulos.series;
      break;
  }
  if (arr != "") {
    const randomMovie = arr[Math.floor(Math.random() * arr.length)];

    const myArr = randomMovie.split(" ");
    let rng = "";
    while (rng.length < 4) {
      rng = myArr[Math.floor(Math.random() * myArr.length)];
    }

    const joined = myArr.join(" ");

    const newMovie = joined.replace(rng, mod);

    const newObj = {
      categoria: cat,
      original: randomMovie,
      alterado: newMovie,
    };

    return newObj;
  } else {
    return { erro: "Selecione uma categoria!" };
  }
};

console.log(tituloFilme("cu", "filmes"));
