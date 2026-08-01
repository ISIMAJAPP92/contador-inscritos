const meta=900,total=453;
const programs=[
'Bachillerato en Mantenimiento Automotriz',
'Bachillerato en Programación',
'Bachillerato en Servicios de Hospedaje',
'Bachillerato en Puericultura',
'Doctorado en Educación',
'Especialidad en Mecánica Automotriz',
'Ingeniería en Mecánica Automotriz',
'Licenciatura en Criminología y Criminalística',
'Chef Profesional',
'Licenciatura en Arquitectura',
'Licenciatura en Administración de Empresas',
'Licenciatura en Derecho',
'Licenciatura en Pedagogía',
'Licenciatura en Gastronomía',
'Licenciatura en Turismo',
'Licenciatura en Seguridad Pública',
'Maestría en Derecho Penal',
'Maestría en Formación Docente',
'Maestría en Dirección de Negocios'
];
let n=0,c=document.getElementById('counter');
const t=setInterval(()=>{n+=Math.ceil((total-n)/8);if(n>=total){n=total;clearInterval(t)};c.textContent=n;},25);
document.getElementById('fill').style.width=(total/meta*100)+'%';
document.getElementById('pct').textContent=(total/meta*100).toFixed(1)+'% de la meta';
document.getElementById('time').textContent=new Date().toLocaleString();
const ul=document.getElementById('programs');
programs.forEach(p=>{let li=document.createElement('li');li.textContent=p+' — 0';ul.appendChild(li);});
