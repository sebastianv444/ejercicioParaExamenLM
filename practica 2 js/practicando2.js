function ejercicio1(){

    const horas = parseInt(document.getElementById("horas").value)
        
    let precioTotal = 0 
    
        
    if (horas >= 0 && horas <= 56) {
        
        precioTotal = horas * 5
        
    }else{
        alert("el numero ingresado no es correcto\n Recuerda que lo maximo a ingresar son '56 Horas'")
    }

    const nuevo = document.getElementById("nuevo").checked
    const antiguo = document.getElementById("antiguo").checked

    if(antiguo == true){
        precioTotal -= 12
    }

    document.getElementById("precioCalculo").textContent = precioTotal   + " euros al mes"

    /**
     * Está permitido matricularse de “Filosofía” y de “Historia de la Filosofía” a la
     * vez, pero no está permitido elegir “Historia de la Filosofía” sin elegir
     * “Filosofía”. Si se hace esto, no debe verse el precio, sino alguna clase de
     * mensaje de error donde prefieras, un alert o modificando el contenido. 
     */

    const matematica = document.getElementById("matematicas").checked
    const filosofia = document.getElementById("filosofia").checked
    const HistoriaFilosofia = document.getElementById("HistoriaF").checked
    const fisica = document.getElementById("fisica").checked

    if(filosofia == false && HistoriaFilosofia == true || filosofia == true && HistoriaFilosofia == false){
        document.getElementById("precioCalculo").textContent = "------"
        alert("escogiste mal\nrecuerda que si seleccionas filosofia tambien tienes que seleccionar historia de la filosofia y viceversa")
    }

}