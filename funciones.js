var validarM, validarL, validarE;
function validarNota(elemento){
    const nota = parseInt(elemento.value);
    const materia = elemento.id;
    if(nota < 1 || nota > 10){
        elemento.style.color = "Red";
        if(nota == matematica) validarM=0;
        else if (nota == lengua) validarL=0;
        else validarE = 0;
    }
    else{
        elemento.style.color = "Green";
        if(nota == matematica) validarM=1;
        else if (nota == lengua) validarL=1;
        else validarE = 1;
    }
}

function obtenerPromedio(){
    const cantidadMaterias = 3;
    let notaMatematica = document.getElementById('matematica').value, notaLengua = document.getElementById('lengua').value, notaEfsi = document.getElementById('EFSI').value;
    notaMatematica = parseInt(notaMatematica);
    notaLengua = parseInt(notaLengua);
    notaEfsi = parseInt(notaEfsi);
    let promedioP = document.getElementById('resultado'), promedio, resultado = document.getElementById('reaccion');
    if(isNaN(notaMatematica) || isNaN(notaLengua) || isNaN(notaEfsi) || validarM == 0 || validarL == 0 || validarE == 0){
        alert('Los valores de este formulario son obligatorios, deben ser ingresadas todas las notas. Además deben ser valores numéricos entre 1 y 10.');
    }
    else{
        promedio = (notaMatematica + notaLengua + notaEfsi)/cantidadMaterias;
        if(promedio >= 6){
            promedioP.style.color="Green";
            reaccion.innerHTML = `<img width="30%" src="images/Yipee.gif">`;
        }
        else {
            promedioP.style.color="Red"
            reaccion.innerHTML = `<img width="30%" src="images/SadHamster.gif">`;
        }
        promedioP.innerHTML = 'El promedio de las notas es ' +(notaMatematica + notaLengua + notaEfsi)/cantidadMaterias;
}}

function obtenerMayor(){
    const cantidadMaterias = 3;
    let notaMatematica = document.getElementById('matematica').value, notaLengua = document.getElementById('lengua').value, notaEfsi = document.getElementById('EFSI').value, mayor = document.getElementById('resultado'), mayorNum, mayorNota = [], reaccion = document.getElementById("reaccion");
    notaMatematica = parseInt(notaMatematica);
    notaLengua = parseInt(notaLengua);
    notaEfsi = parseInt(notaEfsi);
    mayor.style.color = "Blue";
    if(isNaN(notaMatematica) || isNaN(notaLengua) || isNaN(notaEfsi) || validarM == 0 || validarL == 0 || validarE == 0){
        alert('Los valores de este formulario son obligatorios, deben ser ingresadas todas las notas. Además deben ser valores numéricos entre 1 y 10.');
    }
    else{
        mayorNum = Math.max(notaMatematica, notaLengua, notaEfsi);

        if (notaMatematica == mayorNum) mayorNota.push("matemática");
        if(notaLengua == mayorNum) mayorNota.push("lengua");
        if (notaEfsi == mayorNum) mayorNota.push("EFSI");
        mayor.innerHTML = `La/las materia/s que obtuvo/ieron la mayor nota es/son: ${mayorNota.join(", ")}`;
        reaccion.innerHTML = `<img width="30%" src="images/Yipee2.gif">`;
    }
    }