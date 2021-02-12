function PrendiDuePunti(){
    
    // prendo due punti uno di partenza dell'aereoporto
    
    
    let puntodipartenza = document.getElementById("codice1").value;
    
    switch (puntodipartenza){
             case "1":
                    let puntop1x = 90;
                    let puntop1y = 50;
                    let risultato1x = puntop1x - puntop1y;
                    console.log(puntop1x + " " + puntop1y  + " " + risultato1x);
                    puntodipartenza= risultato1x;
                    break;
                case "2":
                   let puntop2x = 80;
                    let puntop2y = 80;
                    let risultato2x = puntop2x - puntop2y;
                    console.log(puntop2x + " " + puntop2y + " " + risultato2x);
                    puntodipartenza= risultato2x;
                    break;
                 case "3":
                    let puntop3x = 40;
                    let puntop3y = 60;
                    let risultato3x = puntop3x - puntop3y;
                    console.log(puntop3x + " " + puntop3y + " " + risultato3x);
                    puntodipartenza= risultato3x;
                    break;
                 case "4":
                    let puntop4x = 30;
                    let puntop4y = 70;
                    let risultato4x = puntop4x - puntop4y;
                    console.log(puntop4x + " " + puntop4y  + " " + risultato4x);
                    puntodipartenza= risultato4x;
                    break;
                    default:
                    console.log("Spiacenti, non sono riuscito a prendere il valore");
    }
    
        
    // prendo due punti  di arrivo dell'aereoporto
    
    let puntodarrivo = document.getElementById("codice2").value;
        
    switch (puntodarrivo){
                case "1":
                    let puntoa1x = 90;
                    let puntoa1y = 50;
                    let risultato1y = puntoa1x - puntoa1y;
                    console.log(puntoa1x + " " + puntoa1y  + " " + risultato1y);
                    puntodarrivo=risultato1y;
                    break;
                case "2":
                   let puntoa2x = 80;
                    let puntoa2y = 80;
                    let risultato2y = puntoa2x - puntoa2y;
                    console.log(puntoa2x + " " + puntoa2y  + " " + risultato2y);
                    puntodarrivo=risultato2y;
                    break;
                 case "3":
                    let puntoa3x = 40;
                    let puntoa3y = 60;
                    let risultato3y = puntoa3x - puntoa3y;
                    console.log(puntoa3x + " " + puntoa3y  + " " + risultato3y);
                    puntodarrivo=risultato3y;
                    break;
                 case "4":
                    let puntoa4x = 30;
                    let puntoa4y = 70;
                    let risultato4y = puntoa4x - puntoa4y;
                    console.log(puntoa4x + " " + puntoa4y + " " + risultato4y);
                    puntodarrivo=risultato4y;
                    break;
                    default:
                    console.log("Spiacenti, non sono riuscito a prendere il valore");
            
            }
        //check punti presi per debug ,  ho arrotondato tramite funzione calcoladuepunti
    
        console.log(puntodipartenza + "sono punto di partenza");
        console.log(puntodarrivo + "sono punto di arrivo");
    
        
        if (puntodipartenza==puntodarrivo){
            console.log("sono l'if");
            alert("hai selezionato l'aereoporto di partenza e di arrivo uguali seleziona un altro aereoporto di arrivo");
        }
    
        CalcolaDuePunti(puntodipartenza,puntodarrivo);
    
        
    
}

function CalcolaDuePunti( x, y){
    
    let distanza = Math.floor(Math.sqrt((x * x) + (y * y)));
    console.log(distanza);
    document.getElementById("prezzo").innerHTML = distanza;
    
}

function Riepilogo(){
    console.log("lancio funzione")
      document.getElementsByClassName("form-destro")[0].style.display="inline";
    var a1 = document.getElementById("nome").value 
    document.getElementById("bigliettoriepilogo").innerHTML= a1;
    
    var a2 = document.getElementById("seriale").value 
    document.getElementById("intestatarioriepilogo").innerHTML= a2;

     var a3 = document.getElementById("posto").value 
    document.getElementById("postoriepilogo").innerHTML= a3;
    
    var a4 = document.getElementById("gate").value 
    document.getElementById("gateriepilogo").innerHTML= a4;
    
       
    var a5 = document.getElementById("codicepartenza").value 
    document.getElementById("aereoportopartenzariepilogo").innerHTML= a5;
    
  
    var sel = document.getElementById("codice2");
    var a6= sel.options[sel.selectedIndex].text;
    document.getElementById("aereoportoarrivoriepilogo").innerHTML= a6;
    
        }
    




