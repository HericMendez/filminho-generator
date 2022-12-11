const tituloFilme = () => {
  const mod = document.getElementById("mod").value;
  const cat = document.getElementById("categoria").value;

  let arr = "";
  switch (cat) {
    case "filmes":
      arr = titulos.filmes;

      break;
    case "series":
      arr = titulos.series;
      break;
    case "animes":
      arr = titulos.animes;
      break;
    case "novelas":
      arr = titulos.novelas;
      break;
  }
  if (mod !== "") {
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

    document.getElementById("original").innerHTML = newObj.original;
    document.getElementById("alterado").innerHTML = newObj.alterado;
    console.log(newObj)
  } else {
    return { erro: "Selecione uma categoria!" };
  }
};
