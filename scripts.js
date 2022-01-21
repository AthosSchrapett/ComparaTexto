function compararButton(textoBase, textoSecundario){
    if(isEmpty(textoBase) && isEmpty(textoSecundario)){
        alert("Insira um texto, os campos estão vazios.");
    }
    
    if(isEmpty(textoBase) && !isEmpty(textoSecundario)){
        alert("Insira um texto no primeiro campo, somente o segundo está preenchido.");
    }

    if(!isEmpty(textoBase) && isEmpty(textoSecundario)){
        alert("Insira um texto no segundo campo, somente o primeiro está preenchido.");
    }

    if((!isEmpty(textoBase) && !isEmpty(textoSecundario)) && (textoBase == textoSecundario)){
        alert("Os textos são iguais");
    }

    if((!isEmpty(textoBase) && !isEmpty(textoSecundario)) && (textoBase != textoSecundario)){
        alert("Os textos são diferentes");
    }
}

function isEmpty(str){
    return (!str || str.length === 0 );
}