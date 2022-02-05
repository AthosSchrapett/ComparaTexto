function compararButton(textoBase, textoSecundario) {
    if (isEmpty(textoBase) && isEmpty(textoSecundario)) {
        alert("Insira um texto, os campos estão vazios.");
    }

    if (isEmpty(textoBase) && !isEmpty(textoSecundario)) {
        alert("Insira um texto no primeiro campo, somente o segundo está preenchido.");
    }

    if (!isEmpty(textoBase) && isEmpty(textoSecundario)) {
        alert("Insira um texto no segundo campo, somente o primeiro está preenchido.");
    }

    if ((!isEmpty(textoBase) && !isEmpty(textoSecundario)) && (textoBase == textoSecundario)) {
        alert("Os textos são iguais");
    }

    if ((!isEmpty(textoBase) && !isEmpty(textoSecundario)) && (textoBase != textoSecundario)) {
        validarTextos(textoBase, textoSecundario);
        alert("Os textos são diferentes");
    }
}

function isEmpty(str) {
    return (!str || str.length === 0);
}

function validarTextos(textoBase, textoSecundario) {

    textoBaseArray = textoBase.split('')
    textoSecundarioArray = textoSecundario.split('')

    let textoBaseDiferentes = "";
    let textoSecundarioDiferentes = "";

    if (textoBase.length > textoSecundario.length) {
        for (let i = 0; i < textoBase.length; i++) {
            if(textoBaseArray[i] != textoSecundarioArray[i]){
                textoBaseDiferentes += "*"+textoBaseArray[i]+"*";
                if(textoSecundarioArray[i] != undefined || textoSecundarioArray[i] != null){
                    textoSecundarioDiferentes += "*"+textoSecundarioArray[i]+"*";
                }
                else{
                    textoSecundarioDiferentes += "*"+ "" +"*";
                }
                
            }
            else{
                textoBaseDiferentes += textoBaseArray[i];
                textoSecundarioDiferentes += textoSecundarioArray[i];
            }
        }
    }

    if (textoBase.length < textoSecundario.length) {
        for (let i = 0; i < textoSecundario.length; i++) {
            if(textoBaseArray[i] != textoSecundarioArray[i]){
                if(textoBaseArray[i] != undefined || textoBaseArray[i] != null){
                    textoBaseDiferentes += "*"+textoBaseArray[i]+"*";
                }
                else{
                    textoBaseDiferentes += "*"+ "" +"*";
                }
                textoSecundarioDiferentes += "*"+textoSecundarioArray[i]+"*";
            }
            else{
                textoBaseDiferentes += textoBaseArray[i];
                textoSecundarioDiferentes += textoSecundarioArray[i];
            }
        }
    }

    if ((textoBase != textoSecundario) && (textoBase.length == textoSecundario.length)) {

        for (let i = 0; i < textoBase.length; i++) {
            if(textoBaseArray[i] != textoSecundarioArray[i]){
                textoBaseDiferentes += "*"+textoBaseArray[i]+"*";
                textoSecundarioDiferentes += "*"+textoSecundarioArray[i]+"*";
            }
            else{
                textoBaseDiferentes += textoBaseArray[i];
                textoSecundarioDiferentes += textoSecundarioArray[i];
            }
        }        
    }

    console.log(textoBaseDiferentes);
    console.log(textoSecundarioDiferentes);

}