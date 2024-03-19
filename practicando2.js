function ejercicio1(){

    const horas = document.getElementById("horas")

    const horasSemanales = parseInt(horas.value)
        
    let precioTotal = 0 
    
        
    if (horasSemanales > 0 && horasSemanales <= 56) {
        
        precioTotal = horasSemanales * 5
        
    }else{
        alert("el numero ingresado no es correcto\n Recuerda que lo maximo a ingresar son '56 Horas'")
    }

    const nuevo = document.getElementById("nuevo")
    const antiguo = document.getElementById("antiguo")

    var alumnoNuevo = nuevo.value = true
    var alumnoAntiguo = antiguo.value = true

    if(alumnoAntiguo == false){
        precioTotal -= 12
    }

    const precioCalculo = document.getElementById("precioCalculo")
    precioCalculo.textContent = precioTotal + ' euros al mes'

}