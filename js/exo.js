



function exo1() {
   let tab = [1,2,3,null,4,5,6,null];

   for(i=0;i<tab.length;i++){

    if(tab[i] == null)
        console.log("indice de l'element null : " + i);
   }
}


function exo1bis() {
let n = 0;
let nbEntries = 5;
let tab = [] ;
while(n < nbEntries) {
    let userEntry = prompt("Entrez la valeur elt ou autre chose");
     tab[n] = userEntry;
    n++;
}

   searchElt(tab);

}

function searchElt(tab){
    let isLet = false;
    for(let i in tab){
        if(tab[i] == "let") { 
            isLet = true ;
            break;
        }
    }

    if(isLet) {
        console.log("Le mot let est présent");
    }else{
        console.log("Le mot let n'est pas présent");
    }

}


function exo2() {
   let tab=[1,2,3,2,2,3,4];
   let tabResult=[];
   let tabSearch=[];
   let occ = 1;
   let resultMessage;

    for(i=0;i<tab.length;i++){
            searchValue = tab[i];
            occ = 1;
            // valeur deja recherchée
            if(isValueExist(tabSearch,searchValue)){              
                continue;
            }
            // chercher le nombre d'occurence dans le reste du tableau
            for(j=i+1;j<tab.length;j++){
                
                if(tab[j]==searchValue) {
                    occ++;                
                }
        }
        resultMessage = `le nombre d'occurence de ${searchValue} est : ${occ}`;
        tabResult.push(resultMessage);
        tabSearch.push(searchValue);

    }

    // afficher les résultats
    for(let i in tabResult){
        console.log(tabResult[i]);
    }

    function isValueExist(tab,value) {
        for(let i in tab) {
            if(tab[i]==value) { return true;}
        }
        return false;
    }

}

function exo3() {
    let tab = [1,2,null,3,4,null,9];
    for(i in tab){
        if(tab[i] == null){
            tab.splice(i,1);
        }
    }
    console.log(tab);
}


function exo4() {
    let tab = [];
    let i = 0;
    let userEntry;
    while(i < 5){
        userEntry = prompt('saisissez une valeur');
        tab.push(userEntry);
        i++;
    }

    console.log(reverse(tab));

    function reverse(tab) {
       
        for(i=0;i <tab.length;i++){
    
            debut = i;
            fin = tab.length -1 - i;
            temp = tab[i];
            // reverse
            tab[debut] = tab[fin];
            tab[fin] = temp;
           
    
            if( tab.length % 2 == 0 && fin - debut == 1) {
                console.log("pair");
                console.log("debut : " + debut + " fin " + fin);
                break;
            }
    
            if( tab.length % 2 == 1 && fin == debut) {
                console.log("impair");
                console.log("debut : " + debut + " fin " + fin);
                break;
            } 
        }
       return tab;

    }

}

function exo6() {

    let tab = [-1,-2,3,2];
    let positiveTab = [];
    let negativeTab = [];

    for(i in tab){
        if(tab[i] < 0) {
            negativeTab.push(tab[i]);
        }else{
            positiveTab.push(tab[i]);
        }
    }
    
    console.log('negativeTab ' + negativeTab);
    console.log('positiveTab ' + positiveTab);
   
}

function exo7(){
    let tab=[1,5,1,2,2,3,2];
    let tabSearch=[];
    let tabOcc=[];
    let occ = 1;

 
     for(i=0;i<tab.length;i++){
             searchValue = tab[i];
             occ = 1;
             // valeur deja recherchée
             if(isValueExist(tabSearch,searchValue)){              
                 continue;
             }
             // chercher le nombre d'occurence dans le reste du tableau
             for(j=i+1;j<tab.length;j++){
                 
                 if(tab[j]==searchValue) {
                     occ++;                
                 }
         }

         tabSearch.push(searchValue);
         tabOcc.push(occ);
 
     }
 
     // afficher les résultats
        console.log(tab);
         console.log('valeurs distinctes : '+ tabSearch);
         console.log('nombre de valeurs distinctes : '+ tabSearch.length);
         console.log('ensemble des effectifs : '+ tabOcc);


 
     function isValueExist(tab,value) {
         for(let i in tab) {
             if(tab[i]==value) { return true;}
         }
         return false;
     }

}

function exo1_2(){
    let word = prompt('saisissez une phrase');
    let letter = prompt('saisissez une lettre');

occurString(word,letter);

    function occurString(word,letter){

        const regex  = new RegExp( letter, 'g' );
        const result = word.match(regex);
        if(result != null){
            console.log('nb occurence : ' + result.length);
        }else{
            console.log("pas d'occurence");
        }

    }



}

function exo2_2(){
    longueurStr(prompt('saisissez un mot'));

    function longueurStr(text) {
        console.log(text.length);
    }
    
}

function exo3_2(){

    let sentence = prompt('saisissez une phrase');
    let letterToSupp = prompt('saisissez une lettre');
    console.log(sentence);
    tabConcat = sentence.split(letterToSupp).concat();
    let str ="";
    for(i in tabConcat){str+=tabConcat[i];}
    console.log(str);
}

function exo6_2(){
    
    
}