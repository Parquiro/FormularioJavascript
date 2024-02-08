function calcularPesoTotalYPrecioTotal(pesoMuñeca, pesoPayaso, cantidadMuñecas, cantidadPayasos, precioPorGramo) {

    var pesoTotal = (pesoMuñeca * cantidadMuñecas) + (pesoPayaso * cantidadPayasos);

    var precioTotal = pesoTotal * precioPorGramo;

    return { pesoTotal: pesoTotal, precioTotal: precioTotal };
}


var pesoMuñeca = 75;
var pesoPayaso = 112;
var cantidadMuñecas = 3;
var cantidadPayasos = 5;
var precioPorGramo = 0.1;

var resultado = calcularPesoTotalYPrecioTotal(pesoMuñeca, pesoPayaso, cantidadMuñecas, cantidadPayasos, precioPorGramo);
console.log("El peso total del paquete es: " + resultado.pesoTotal + " gramos");
console.log("El precio total del paquete es: $" + resultado.precioTotal);


function calcularSalario(horasTrabajadas, precioPorHora) {
    var salario = horasTrabajadas * precioPorHora;
    return salario;
}

// Ejemplo de uso
var horasTrabajadas = 40;
var precioPorHora = 10;

var salario = calcularSalario(horasTrabajadas, precioPorHora);
console.log("El salario es: $" + salario);
