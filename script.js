fetch("datos.json")

.then(res=>res.json())

.then(data=>{


document.getElementById("total").innerHTML=data.total;

document.getElementById("meta").innerHTML=data.meta;


let porcentaje=
(data.total/data.meta)*100;


document.getElementById("porcentaje")
.innerHTML=porcentaje.toFixed(2)+"%";


document.getElementById("progreso")
.style.width=porcentaje+"%";



document.getElementById("bachillerato").innerHTML=
data.niveles.bachillerato;


document.getElementById("licenciaturas").innerHTML=
data.niveles.licenciaturas;


document.getElementById("ingenieria").innerHTML=
data.niveles.ingenieria;


document.getElementById("especialidad").innerHTML=
data.niveles.especialidad;


document.getElementById("maestrias").innerHTML=
data.niveles.maestrias;


document.getElementById("doctorado").innerHTML=
data.niveles.doctorado;



document.getElementById("hoy").innerHTML=
"+"+data.crecimiento.hoy;


document.getElementById("semana").innerHTML=
"+"+data.crecimiento.semana;


document.getElementById("mes").innerHTML=
"+"+data.crecimiento.mes;


document.getElementById("actualizado").innerHTML=
data.actualizado;


});
