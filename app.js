//let numeroSecreto = generarNumeroSecreto();
//let intentos =1;

let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

//let titulo = document.querySelector('h1');
//es un objeto

//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector ('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);    
    console.log(numeroDeUsuario === numeroSecreto);
    */
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos ===1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El udsuario no acertó
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');
    }else{
        //si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();  
    intentos = 1; 
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    //inicializar el número de intentos
    //generar el número aleatorio
    condicionesIniciales(); 
    //deshabilitar el botón
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();