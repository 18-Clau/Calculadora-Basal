const FLUJO = document.getElementById("flu")
const FLUJO2 = document.getElementById("flu2")
const FLUJO3 = document.getElementById("flu3")
const BOTON = document.getElementById("calcular")
const INPUT = document.getElementById("peso")
const ERROR = document.getElementById ("error")

BOTON.addEventListener ("click", ()=>{
    let peso = INPUT.value;
    if (peso== '') {
        ERROR.style.display="block"
    } else if(peso>=30){
        let sc = superficieCorporal(peso)
        FLUJO.innerHTML="SC*1500: " +sc [0] + " cc"
        FLUJO.style.display="block"
        FLUJO2.innerHTML="SC*2000: "+sc [1] + " cc"
        FLUJO2.style.display="block"
        ERROR.style.display="none"
    }else{
        let holy = holliday(peso)
        FLUJO.innerHTML="V/D: " +holy + " cc"
        FLUJO.style.display="block"
        FLUJO2.innerHTML="M: "+(holy /24).toFixed (2) + " cc/hr"
        FLUJO2.style.display="block"
        FLUJO3.innerHTML="m/2: "+((holy/24)*1.5).toFixed (2) + " cc/hr"
        FLUJO3.style.display="block"
        ERROR.style.display="none"
    }
});


function holliday (peso){
    let resultado=0;
if (peso<=10){
    resultado =peso*100
}else if (peso>10 && peso <= 20){
    resultado = (1000+((peso-10)*50))
}else if (peso > 20){
    resultado = (1500 +((peso-20)*20))
}
 return resultado
}
function superficieCorporal (peso){
let sc= ((peso*4)+7)/(peso+90)
let flujo1 = sc*1500; 
let flujo2 = sc*2000; 
return [flujo1.toFixed(2),flujo2.toFixed(2)]
}
