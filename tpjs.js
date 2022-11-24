
/*function lePendu(){
    let joueur = prompt("saisissez votre lettre");
    let tab = ["Canette","Soda","Montagne","Bateau","Limousine","Chapeau","Cuisine","Tea","Pyramides"];
    let leChoix = Math.floor(Math.random()*tab.length);
    let leMot = tab[leChoix];
    console.log(leMot);
    while(joueur == leMot || joueur != leMot){
        joueur = prompt("saisissez votre lettre");
        for(let i = 0 ; i < 5 ; i++){
            if(joueur == leMot){
                alert("Bien!");
                console.log(joueur);
            }else{
                alert("Nop!");
            }
        }
    }

}

lePendu();
*/

//Fonction de Mot aléatoire

function leMot1(){
    let tab = ["Canette","Soda","Montagne","Bateau","Limousine","Chapeau","Cuisine","Tea","Pyramides"];
    let leChoix = Math.floor(Math.random()*tab.length);
    let leMot = tab[leChoix];
    console.log(leMot);
    return leMot;
}

//Fonction du jeu + compteur


function leJeu(){
    let aTrouver = leMot1();
    let mot = aTrouver.split("");
    let compteur = 0; 
    let joueur;
    let tabJoueur = [];
    let succes = 0;
    for(let i = 0 ; i < mot.length ; i++){
         tabJoueur[i]= "_";
    }
    while(compteur != 5 && succes != mot.length){
        joueur = prompt("saisissez votre lettre : "+tabJoueur);
        if(mot.includes(joueur)){
           alert("Bon!");
           for(let i = 0 ; i < mot.length ; i++){
                if(mot[i] == joueur){
                    succes++;
                    tabJoueur[i]=joueur;
                }
           }
        }else{
            compteur += 1;
            alert("Faux! Tu a fais"+compteur+"erreurs attention! tu peut en faire max 5");
        }
    }
    if(compteur == 5){
        alert("Retente ta chance!");
    }else{
        alert("Victory!");
    }
}

leJeu();

 /*for(let i = 0 ; i < 5 ; i++){
            joueur = prompt("saisissez votre lettre");
            if(joueur == aTrouver){
                alert("Bien!");
                console.log(joueur);
            }else{
                alert("Nop!");

            }
        }*/