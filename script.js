const URL_SHEET = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGjEjirs_Rw7zIxTI0CdzSRgn2REAc8H_J0tXnlIn9m57hgvM71XmRduBluxcvz6tByhKkpaYcOxqO/pub?gid=0&single=true&output=csv";


fetch(URL_SHEET)
.then(response => response.text())
.then(data => {

    let filas = data.split("\n");

    let valores = {};

    filas.forEach(fila => {

        let columnas = fila.split(",");

        if(columnas.length >= 2){

            let clave = columnas[0].trim();
            let valor = columnas[1].trim();

            valores[clave] = Number(valor);

        }

    });


    document.getElementById("total").innerHTML = valores.total;

    document.getElementById("meta").innerHTML = valores.meta;


    let porcentaje = (valores.total / valores.meta) * 100;


    document.getElementById("porcentaje").innerHTML =
    porcentaje.toFixed(2) + "%";


    document.getElementById("progreso").style.width =
    porcentaje + "%";



    document.getElementById("bachillerato").innerHTML =
    valores.bachillerato;


    document.getElementById("licenciaturas").innerHTML =
    valores.licenciaturas;


    document.getElementById("ingenieria").innerHTML =
    valores.ingenieria;


    document.getElementById("especialidad").innerHTML =
    valores.especialidad;


    document.getElementById("maestrias").innerHTML =
    valores.maestrias;


    document.getElementById("doctorado").innerHTML =
    valores.doctorado;



    document.getElementById("hoy").innerHTML =
    "+" + valores.hoy;


    document.getElementById("semana").innerHTML =
    "+" + valores.semana;


    document.getElementById("mes").innerHTML =
    "+" + valores.mes;


});
