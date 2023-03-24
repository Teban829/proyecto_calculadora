

var acumulado = "" 
var acumulado2 = ""
var estado = false 
var operador = ""
function botones(boton){

    // primero validar si entra un operador
    if(boton.value == "*" || boton.value == "+" || boton.value == "-" || boton.value == "/" || boton.value == "²" || boton.value == "1/x"){
        estado = true
        operador = boton.value
        document.getElementById("operadorEnPantalla").innerHTML = operador
        // Mirar si el operador es raiz cuadrada o invertir para realizar la operacion sin necesidad de el boton igual "="
        if(operador == "²"){
            let resultado = Math.sqrt(acumulado)
            document.getElementById("resultadoEnPantalla").innerHTML = resultado
        } 
        else if(operador == "1/x"){
        let resultado = 1 / parseInt(acumulado)
        document.getElementById("resultadoEnPantalla").innerHTML = resultado
        }    
    }   
    // Mirar si el entro el simbolo igual "="
    else if(boton.value == "="){
        // Mirar que operador se habia ingresado anteriormente para realizar el tipo de operacion entre los acumulados
        if(operador == "*"){
        let resultado = parseInt(acumulado) * parseInt(acumulado2)
        document.getElementById("resultadoEnPantalla").innerHTML = resultado
        }
        else if(operador == "+"){
                let resultado = parseInt(acumulado) + parseInt(acumulado2)
                console.log(resultado)
                document.getElementById("resultadoEnPantalla").innerHTML = resultado
        }
        else if(operador == "-"){
            let resultado = parseInt(acumulado) - parseInt(acumulado2)
            document.getElementById("resultadoEnPantalla").innerHTML = resultado
        }
        else if(operador == "/"){
            let resultado = parseInt(acumulado) / parseInt(acumulado2)
            document.getElementById("resultadoEnPantalla").innerHTML = resultado
        }
        
        estado = false
        
        document.getElementById("operadorEnPantalla").innerHTML = ""
        document.getElementById("acumuladoEnPantalla1").innerHTML = ""
        document.getElementById("acumuladoEnPantalla2").innerHTML = ""
        document.getElementById("acumuladoPostResultado").innerHTML = `${acumulado} ${operador} ${acumulado2}`
        operador = ""
        acumulado = ""
        acumulado2 = ""
    }
    // Mirar si ingresa el valor "C" para borrar los valores en memoria y en pantalla.
    else{
            if(boton.value == "C"){
        acumulado = ""
        acumulado2 = ""
        estado = false
        operador = ""
        document.getElementById("operadorEnPantalla").innerHTML = ""
        document.getElementById("acumuladoEnPantalla1").innerHTML = ""
        document.getElementById("acumuladoEnPantalla2").innerHTML = ""
        document.getElementById("resultadoEnPantalla").innerHTML = ""
        document.getElementById("acumuladoPostResultado").innerHTML = ""
    }
    // Mirar si el estado no cambio para 
        else if(estado == false){
            acumulado += boton.value
           document.getElementById("acumuladoEnPantalla1").innerHTML = acumulado
        }
        else{
            // Ya no se que esta pasando
            acumulado2 += boton.value
            document.getElementById("acumuladoEnPantalla2").innerHTML = acumulado2
        }
    }
    
}
// commited sucide, tell my wije I loved her
