
seleccionarBandera();

function seleccionarBandera(){
    let opcion = Number(document.getElementById("seleccion").value);
    console.log(opcion);

    if(opcion == 1){
        document.getElementById("ejercicio1").style.display ="block";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";
    }else if(opcion ==2){
        document.getElementById("ejercicio1").style.display ="none";
        document.getElementById("ejercicio2").style.display ="block";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";
    }else if(opcion ==3){
        document.getElementById("ejercicio1").style.display ="none";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio3").style.display ="block";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";
    }else if(opcion ==4){
        document.getElementById("ejercicio1").style.display ="none";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio4").style.display ="block";
        document.getElementById("ejercicio5").style.display ="none";            
    }else if(opcion ==5){
        document.getElementById("ejercicio1").style.display ="none";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="block";
    }else{
        document.getElementById("ejercicio1").style.display ="none";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";
    }

}