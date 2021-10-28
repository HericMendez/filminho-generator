async function getData() {
  try {
    const mod = document.getElementById("mod").value;
    const categoria = document.getElementById("categoria").value;

    const result = await fetch("https://movie-generator-app.herokuapp.com/post", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ mod, categoria }),
    });
    const json = await result.json();
    // console.log(json)

    if (json.original != undefined || json.original != undefined) {
      document.getElementById("original").innerHTML = json.original;
      document.getElementById("alterado").innerHTML = json.alterado;
    }
  } catch (err) {
    console.log(err);
  }
}
