const DASHBOARD_URL =
"https://docs.google.com/spreadsheets/d/1hb12dfcZsorpTwGC2InhzugmvQcYmoW042Hi5djlXlg/gviz/tq?tqx=out:csv&gid=0";


const PROGRAMAS_URL =
"https://docs.google.com/spreadsheets/d/1hb12dfcZsorpTwGC2InhzugmvQcYmoW042Hi5djlXlg/gviz/tq?tqx=out:csv&gid=896499581";



// ======================
// DASHBOARD
// ======================

fetch(DASHBOARD_URL)
.then(r => r.text())
.then(data => {

    let filas = data.split("\n");

    let datos = {};

    filas.forEach(fila => {

        let columnas = fila.split(",");

        let clave = columnas[0]
        ?.replace(/"/g,"")
        .trim()
        .toLowerCase();


        let valor = columnas[1]
        ?.replace(/"/g,"")
        .trim();


        if(clave){
            datos[clave] = valor;
        }

    });


    document.getElementById("total").innerHTML = datos.total;

    document.getElementById("meta").innerHTML = datos.meta;


    let porcentaje =
    (Number(datos.total) / Number(datos.meta)) * 100;


    document.getElementById("porcentaje").innerHTML =
    porcentaje.toFixed(1)+"%";


    document.getElementById("progreso").style.width =
    porcentaje+"%";


});




// ======================
// PROGRAMAS
// ======================


fetch(PROGRAMAS_URL)
.then(r => r.text())
.then(data => {


    let filas = data.split("\n");


    let contenedor =
    document.querySelector(".grid");


    contenedor.innerHTML="";



    filas.slice(1).forEach(fila => {


        let columnas = fila
        .split(",")
        .map(x => x.replace(/"/g,"").trim())
        .filter(x => x !== "");



        if(columnas.length >= 2){


            let nombre = columnas[0];


            let cantidad = columnas[1];



            let tarjeta = document.createElement("div");


            tarjeta.className="card";


            tarjeta.innerHTML = `

            <h3>${nombre}</h3>

            <strong>${cantidad}</strong>

            <p>inscritos</p>

            `;


            contenedor.appendChild(tarjeta);


        }


    });



});
