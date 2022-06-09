
var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){

        let paciente = pacientes[i];

        let tdPeso = paciente.querySelector(".info-peso");

        let peso= tdPeso.textContent;

        let tdAltura = paciente.querySelector(".info-altura");

        let altura = tdAltura.textContent

        let tdIMC = paciente.querySelector('.info-imc')


        let pesoEsValido = validarPeso(peso);
        let alturaEsValida = validarAltura(altura);

        if (!pesoEsValido){
            console.log("Peso incorrecto")
            pesoEsValido = false;
            tdIMC.textContent= 'peso incorrecto';
            paciente.classList.add("paciente-incorrecto")
        }
        if (!alturaEsValida){
            console.log("Altura incorrecta")
            alturaEsValida = false;
            tdIMC.textContent= 'altura incorrecta';
            paciente.classList.add("paciente-incorrecto")
        }

        if (pesoEsValido && alturaEsValida ){
        
          
        
            tdIMC.textContent= calcularIMC(peso, altura);//to fixed fija la cantidad de decimales que queremos mostrar
        }

}



function calcularIMC(peso, altura){
    let imc = peso/ (altura * altura); 
    return imc.toFixed(2);
}


function validarPeso(peso){
    return peso >= 0 && peso < 1000;
}
function validarAltura(altura){
    return altura >= 0 && altura < 3.00;
}