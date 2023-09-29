function submit() {
    var ver_alumno_array = []
    for (var j = 1; j <= 4; j++) {
        var nombre_alumno = document.getElementById("nombre_alumno_" + j).value;
        console.log(nombre_alumno);
        ver_alumno_array.push(nombre_alumno);
    }
    console.log(ver_alumno_array);
    var longitud_alumnos = ver_alumno_array.length;
    console.log(longitud_alumnos);
    for (var k = 0; k < longitud_alumnos; k++) {
        ver_alumno_array.push("<h4>NOMBRE -" + ver_alumno_array[k] + "</h4 >");
        console.log(ver_alumno_array);
    }
    console.log(ver_alumno_array);
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array
    var remover_comas = ver_alumno_array.join(" ");
    console.log(remover_comas);
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
    document.getElementById("boton_enviar").style.display = "none";
}
function sorting() {
    ver_alumno_array.sort();
    console.log(ver_alumno_array);
    var lista_alumnos_ordenada = [];
    var longitud_nombre_alumnos_array = ver_alumno_array.length;
    console.log(longitud_nombre_alumnos_array);
    for (var k = 0; k < longitud_nombre_alumnos_array; k++) {
        lista_alumnos_ordenada.push("<h4>NOMBRE -" + ver_alumno_array[k] + "</h4 >");
        console.log(lista_alumnos_ordenada);
    }

    var remover_comas = lista_alumnos_ordenada.join(" ");
    console.log(remover_comas);
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
}