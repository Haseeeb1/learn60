var x;
var count=0;
var t;
function add1(){
     x=document.getElementById("input1").value;
    document.getElementById("input1").value="";    
    count=1; 
}


function sq1(){
    document.getElementById("input1").value="";    
    count=6;
}

function sub1(){
    x=document.getElementById("input1").value;
    document.getElementById("input1").value="";    
    count=2;
}

function mul1(){
    x=document.getElementById("input1").value;
    document.getElementById("input1").value="";    
    count=3;
}

function divide1(){
    x=document.getElementById("input1").value;
    document.getElementById("input1").value="";    
    count=4;
}

function mod1(){
    x=document.getElementById("input1").value;
    document.getElementById("input1").value="";    
    count=5;
}

function enter1(){




/*

for(var i=c; i>c-5; i--){
    var o=1;
    document.getElementById("e"+o).innerHTML+=localStorage.getItem(i+"");
    o++;
}
}

else{
    for(var i=c; i>0; i++){
        var o=1;
        document.getElementById("e"+o).innerHTML+=localStorage.getItem(i+"");
        o++;
    }
}
*/

    if (count===1){
        var z=document.getElementById("input1").value;
        const result = Number(x) + Number(z);
        document.getElementById("label").innerHTML=Number(result);
        document.getElementById("input1").value=result+"";   
         t=Number(localStorage.length);
        localStorage.setItem(t+1+"",x+"+"+z+"="+result);
    }
 
    if (count===2){
        var z=document.getElementById("input1").value;
        const result = Number(x) - Number(z);
        document.getElementById("label").innerHTML=Number(result);
        document.getElementById("input1").value=result+"";
        t=Number(localStorage.length);
        localStorage.setItem(t+1+"",x+"-"+z+"="+result);
    }

    if (count===3){
        var z=document.getElementById("input1").value;
        const result = Number(x) * Number(z);
        document.getElementById("label").innerHTML=Number(result);
        document.getElementById("input1").value=result+"";
        t=Number(localStorage.length);
        localStorage.setItem(t+1+"",x+"x"+z+"="+result);
    }

    if (count===4){
        var z=document.getElementById("input1").value;
        const result = Number(x) / Number(z);
        document.getElementById("label").innerHTML=Number(result);
        document.getElementById("input1").value=result+"";
        t=Number(localStorage.length);
        localStorage.setItem(t+1+"",x+"÷"+z+"="+result);
    }

    if (count===5){
        var z=document.getElementById("input1").value;
        const result = Number(x) % Number(z);
        document.getElementById("label").innerHTML=Number(result);
        document.getElementById("input1").value=result+"";
        t=Number(localStorage.length);
        localStorage.setItem(t+1+"",x+"%"+z+"="+result);

    }

    if (count===6){
        var z=document.getElementById("input1").value;
        const result = Math.sqrt(Number(z));
        document.getElementById("label").innerHTML=Number(result);
        document.getElementById("input1").value=result+"";
        t=Number(localStorage.length);
        localStorage.setItem(t+1+"","√"+z+"="+result);
    }

   var j=localStorage.length;
   for(var i=j; i>j-5; i--){
    const elem1=document.createElement("p");
    const elemtext=document.createTextNode(""+ localStorage.getItem(i));
    elem1.appendChild(elemtext);
    document.getElementById("history").appendChild(elem1);
   }


}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



function zero1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+0;
}

function one1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+1;
}
function two1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+2;
}

function three1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+3;
}
function four1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+4;
}

function five1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+5;
}
function six1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+6;
}

function  seven1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+7;
}
function eight1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+8;
}

function nine1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+9;
}

function dot1(){
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value = document.getElementById("input1").value+""+".";
}
function clear1(){
    document.getElementById("label").innerHTML="";
    if(document.getElementById("input1").value==="0"){
        document.getElementById("input1").value="";
    }
    document.getElementById("input1").value ="";
}

function remove1(){
    if(document.getElementById("input1").value===""){
     return;
    }
    else {
        var y= document.getElementById("input1").value;
        var x=y.substring(0, y.length - 1);
        document.getElementById("input1").value = x;
    }
}



