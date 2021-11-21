const getLocalStorage = () =>JSON.parse(localStorage.getItem('db_movies')) ?? [];
const setLocalStorage = (item) => localStorage.setItem('db_movies', JSON.stringify(item));


async function getData() {
  try {
    const mod = document.getElementById("mod").value;
    const categoria = document.getElementById("categoria").value;

    const itemRow = `
    <button type="button" class="title-icon"><img src="assets/icons/darkmode/prev.svg" alt=""></button>
    <button type="button" class="title-icon"><img src="assets/icons/darkmode/hourglass-fav.svg" alt=""></button>
    <button type="button" class="title-icon"><img src="assets/icons/darkmode/share.svg" alt=""></button>
    <button type="button" class="title-icon"><img src="assets/icons/darkmode/close.svg" alt=""></button>
    <button type="button" class="title-icon"><img src="assets/icons/darkmode/next.svg" alt=""></button>
    `

    const result = await fetch(
      "https://movie-generator-app.herokuapp.com/post",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ mod, categoria }),
      }
    );
    const json = await result.json();

    if (json.original != undefined || json.original != undefined) {
      document.getElementById("original").innerHTML = json.original;
      document.getElementById("alterado").innerHTML = json.alterado;
      document.getElementById("icon-row").innerHTML = itemRow;
    }
    return json;
  } catch (err) {
    console.log("Deu ruim: \n", err);
  }
}



async function showData(){
  const data = await getData();
  const browserDB = getLocalStorage();
  if (data!==null) browserDB.push(data)

  setLocalStorage(browserDB);
  for(i=0; i<browserDB.length; i++){
    console.log(browserDB[i], i)
  }
  
}

