//Pasos para realizar el JavaScript en encriptador de texto.....


//1. verificamos que el textarea no se encuentre vacio
function validacionvacio(){
    let textarea=document.querySelector("#textarea1");
    if (textarea.value.trim()==" "){ 
        textarea.value="";
        textarea.focus();
        return true;
    }
    return false;
    }
//2. Verificamos si envia algun caracter no alfanumerico: 
function validacionalfanu(){
        let textareavalue=document.querySelector("#textarea1").value;
        let resultado=textareavalue.match(/[^A-Za-z0-9\s]/g);
        if(resultado){
        return true;}
    return false;
    }

//3. Realizamos la conversion de vocales: 
function encriptador(){
    let textvalu = document.querySelector("#textarea1").value;
    let resultado1=textvalu.replace(/[aeiou]/g, (e)=>
    {if(e=="a"){return "ai";};
    if(e=="e"){return "enter";};
    if(e=="i"){return "imes";};
    if(e=="o"){return "ober";};
    if(e=="u"){return "ufat";};   
});

    //3.1 Retornamos el resultado
    return resultado1;

}


//4. Para poder desencriptar hacemos lo mismo cambiando el orden de los elementos encriptados.
function desencriptar(){
    let textareavalue=document.querySelector("#textarea1").value;
    let resultado1 =textareavalue.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (e)=>
    {
    if(e=="ai"){return "a";};
    if(e=="enter"){return "e";};
    if(e=="imes"){return "i";};
    if(e=="ober"){return "o";};
    if(e=="ufat"){return "u";};  
});
return resultado1;
}

//5. Escondemos la imagen y el texto predeterminado para que aparezca el campo de texto con el resultado y con---
//---el display: none escondemos los elementos.
function hideElements(){
    document.querySelector(".contenedor2 img").style.display="none";
    document.querySelector("#titulo").style.display="none";
    document.querySelector("#subtitulo").style.display="none";
    document.querySelector(".contenedor2").style["justify-content"]="space-between";
    document.querySelector("#textarea2").style.display="block";
    document.querySelector("#copiar").style.display="block";

}



//6. Para copiar el texto utilizamos la funcion async. Asi evitaremos problemas en la copia
async function copiar(){
    let textareavalue=document.querySelector("#textarea2").value;

    try {
        await navigator.clipboard.writeText(textareavalue);

      } catch (err) {
        console.error('Error en la copia', err);
      }

}



//7. Para evitar problemas con el texto ingresado por el usuario utilizamos las sgtes validaciones
function ejecucionencriptada(){
    if(validacionvacio()){
        alert("No has ingresado texto");
    }
    if(validacionvacio()==0 && validacionalfanu()==1){
        alert("Has ingresado un caracter no alfanumerico");
    }
    if(validacionvacio()==0 && validacionalfanu()==0){
        let encripatado=encriptador();
        hideElements();
        let textareaoutput=document.querySelector("#textarea2");
        textareaoutput.value=encripatado;
    }
    
    }
    
    

    function ejecuciondesencriptar(){
        if(validacionvacio()){
            alert("No has ingresado texto");
        }
        if(validacionvacio()==0 && validacionalfanu()==1){
            alert("Has ingresado un caracter no alfanumerico");
        }
        if(validacionvacio()==0 && validacionalfanu()==0){
            let desencriptado=desencriptar();
            hideElements();
            let textareaoutput=document.querySelector("#textarea2");
            textareaoutput.value=desencriptado;
        }
         
    }

//8. Conectamos con los elementos respectivos....
document.getElementById("encriptar").onclick=ejecucionencriptada;
document.getElementById("desencriptar").onclick=ejecuciondesencriptar;
document.getElementById("copiar").onclick=copiar;
