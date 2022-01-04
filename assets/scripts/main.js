const getLocalStorage = () =>JSON.parse(localStorage.getItem('db_movies')) ?? [];
const setLocalStorage = (item) => localStorage.setItem('db_movies', JSON.stringify(item));


async function getData() {
  try {
    const mod = document.getElementById("mod").value;
    const categoria = document.getElementById("categoria").value;
/*
    const itemRow = `
    <button id="prev" type="button" class="title-icon"><img src="assets/icons/darkmode/prev.svg" alt=""></button>
    <button type="button" class="title-icon"><img src="assets/icons/darkmode/hourglass-fav.svg" alt=""></button>
    <button type="button" class="title-icon"><img src="assets/icons/darkmode/share.svg" alt=""></button>
    <button onclick="window.location.reload();" type="button" class="title-icon"><img src="assets/icons/darkmode/close.svg" alt=""></button>
    <button id="next" type="button" class="title-icon"><img src="assets/icons/darkmode/next.svg" alt=""></button>
    `
*/
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
   //   document.getElementById("icon-row").innerHTML = itemRow;
    }
    return json;
  } catch (err) {
    console.log("Deu ruim: \n", err);
  }
}


/*
async function showData(){
  const data = await getData();
  const browserDB = getLocalStorage();
  if (data!==null) browserDB.push(data)

  setLocalStorage(browserDB);
  
  const lastIndex = browserDB.length;
  let index = lastIndex;



  document.getElementById("prev").addEventListener("click", ()=>{
    
    console.log(index)
    index--;
    document.getElementById("original").innerHTML = browserDB[index].original;
    document.getElementById("alterado").innerHTML = browserDB[index].alterado;
  })

  document.getElementById("next").addEventListener("click", ()=>{
    if(index<lastIndex-1){
      
      console.log(index);
      index++;

      document.getElementById("original").innerHTML = browserDB[index].original;
      document.getElementById("alterado").innerHTML = browserDB[index].alterado;
    }

  })





   
}




async function prevName(){

  const browserDB = await getLocalStorage();


  
  
  //let lastElement = browserDB[browserDB.length - 1];



  
}


function listaGenero(){
  const categoria = document.getElementById("categoria").value;
  
  if(categoria == 'filmes'){
    document.getElementById('genero-lista').innerHTML = `
    <select class="form-control form-item" id="genero-id">
    <option selected value="">Selecione o gênero</option>
    <option value="">Ainda não funciona...</option>
    <option value="">Ainda não funciona...</option>
    <option value="">Ainda não funciona...</option>
  </select>
    `
  }else{
    document.getElementById('genero-lista').innerHTML ='';
  }

}



document.getElementById("clear").addEventListener("click", ()=>{
  window.location.reload();
})
*/