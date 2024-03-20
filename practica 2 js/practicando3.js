function ejercicio1(){

const salario = parseInt(document.getElementById("salario").value)
var impuesto;

if(salario <= 20000){

    impuesto = 0
    
}else if(salario >= 20001 && salario <= 30000){

    impuesto = 10

}else if(salario >= 30001 && salario <= 55000){

    impuesto = 20

}else if(salario > 55000){

    impuesto = 40

}

const hijosSi = document.getElementById("hijosSi").checked
var descuento;

if(hijosSi == true){

    descuento = 25
    impuesto -= descuento
    
}

const bonus = document.getElementById("bonus").checked
const extra = document.getElementById("extra").checked

if(bonus == true){

    impuesto -= 450

}else if(extra == true){

    impuesto -= 300

}

var nuevoImpuesto;

if(hijosSi == true && extra == true){

    nuevoImpuesto = ((impuesto - 300)- 5)

}else if(bonus == true && extra == true){

    nuevoImpuesto = ((impuesto - 750)-5)

}

document.getElementById("resultado").children[1].textContent = "el total de impuestos a pagar es de: "+ nuevoImpuesto

}