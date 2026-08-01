const DASHBOARD_URL = 
"https://docs.google.com/spreadsheets/d/1hb12dfcZsorpTwGC2InhzugmvQcYmoW042Hi5djlXlg/gviz/tq?tqx=out:csv&gid=0";


const PROGRAMAS_URL = 
"https://docs.google.com/spreadsheets/d/1hb12dfcZsorpTwGC2InhzugmvQcYmoW042Hi5djlXlg/gviz/tq?tqx=out:csv&gid=896499581";



// ==========================
// CARGAR DASHBOARD
// ==========================

fetch(DASHBOARD_URL)

.then(response => response.text())

.then(data => {


    let filas = data.split("\n");

    let datos = {};


    filas.forEach(fila => {


        let columnas = fila.split(",");


        if(columnas.length >= 2){


            let clave = columnas[0]
            .replace(/"/g,"")
            .trim()
            .toLowerCase();


            let valor = columnas[1]
            .replace(/"/g,"")
            .trim();


            datos[clave] = valor;


        }


    });



    document.getElementById("total").innerHTML = datos.total;


    document.getElementById("meta").innerHTML = datos.meta;



    let porcentaje = 
    (Number(datos.total) / Number(datos.meta)) * 100;



    document.getElementById("porcentaje").innerHTML =
    porcentaje.toFixed(1) + "%";



    document.getElementById("progreso").style.width =
    porcentaje + "%";



});





// ==========================
// CARGAR PROGRAMAS
// ==========================


fetch(PROGRAMAS_URL)

.then(response => response.text())

.then(data => {



    let filas = data.split("\n");



    let contenedor = 
    document.querySelector(".grid");



    contenedor.innerHTML = "";



    filas.slice(1).forEach(fila => {



        let columnas = fila.split(",");



        if(columnas.length >= 2){



            let nombre = columnas[0]
            .replace(/"/g,"")
            .trim();



            // TOMAMOS SIEMPRE EL ÚLTIMO VALOR
            let cantidad = columnas[columnas.length - 1]
            .replace(/"/g,"")
            .trim();



            let tarjeta = document.createElement("div");


            tarjeta.className = "card";



            tarjeta.innerHTML = `

            <h3>${nombre}</h3>

            <strong>${cantidad}</strong>

            <p>inscritos</p>

            `;



            contenedor.appendChild(tarjeta);



        }



    });



});
