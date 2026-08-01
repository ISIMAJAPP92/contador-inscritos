const DASHBOARD_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vSGjEjirs_Rw7zIxTI0CdzSRgn2REAc8H_J0tXnlIn9m57hgvM71XmRduBluxcvz6tByhKkpaYcOxqO/pub?gid=0&single=true&output=csv";


const PROGRAMAS_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vSGjEjirs_Rw7zIxTI0CdzSRgn2REAc8H_J0tXnlIn9m57hgvM71XmRduBluxcvz6tByhKkpaYcOxqO/pub?gid=896499581&single=true&output=csv";



// ==========================
// LEER DASHBOARD
// ==========================

fetch(DASHBOARD_URL)
.then(res => res.text())
.then(data => {

    console.log("Dashboard recibido:", data);


    let filas = data.trim().split("\n");

    let datos = {};


    filas.forEach(fila => {

        let columnas = fila.split(",");


        let clave = columnas[0]
        .replace(/"/g,"")
        .trim()
        .toLowerCase();


        let valor = columnas[1]
        ?.replace(/"/g,"")
        .trim();


        datos[clave] = valor;

    });


    document.getElementById("meta").innerHTML = datos.meta;

    document.getElementById("total").innerHTML = datos.total;


    let porcentaje =
    (Number(datos.total) / Number(datos.meta)) * 100;


    document.getElementById("porcentaje").innerHTML =
    porcentaje.toFixed(1) + "%";


    document.getElementById("progreso").style.width =
    porcentaje + "%";


});




// ==========================
// LEER PROGRAMAS
// ==========================

fetch(PROGRAMAS_URL)
.then(res => res.text())
.then(data => {


    console.log("Programas recibido:", data);


    let filas = data.trim().split("\n");


    let contenedor =
    document.getElementById("programas");


    contenedor.innerHTML = "";



    filas.slice(1).forEach(fila => {


        let columnas = fila.match(/(".*?"|[^",]+)/g);



        if(columnas && columnas.length >= 2){


            let nombre = columnas[0]
            .replace(/"/g,"")
            .trim();


            let inscritos = columnas[1]
            .replace(/"/g,"")
            .trim();



            let tarjeta = document.createElement("div");


            tarjeta.className = "card";


            tarjeta.innerHTML = `

            <h3>${nombre}</h3>

            <strong>${inscritos}</strong>

            <p>inscritos</p>

            `;


            contenedor.appendChild(tarjeta);


        }


    });


});
