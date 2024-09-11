
function digitar0() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTzero");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function digitar1() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTum");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
    
}

function digitar2() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTdois");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function digitar3() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTtreis");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function digitar4() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTquatro");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
}

function digitar5() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTcinco");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function digitar6() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTseis");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function digitar7() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTsete");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function digitar8() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BToito");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function digitar9() {
    var b = document.querySelector("#audio2");
    var a = document.getElementById("BTnove");
    var element = document.querySelector("#tela");
    var text = document.createTextNode(a.value);
    element.appendChild(text);
    b.play();
    
}

function corrigir () {
    document.getElementById("tela").innerText = null;
    document.getElementById("tela2").innerText = null;
}

function imprimir () {
    var senha = "1234";
    var a =  document.getElementById(tela).innerText;
    if (a == senha) {
        print();
        
        
    }
    else {""}
}
   
setInterval (function mostrar (){
    
    var a = document.getElementById("tela").innerText;
    var candidato1 = "22";
    var candidato2 = "35";
    var candidato3 = "27";
    var candidato4 = "31";
    

    if (a == candidato1) {
              
        document.getElementById("tela2").innerHTML = '<img src="carlos.jpeg" width="244px" height="379px"></img>'
        
        
        
       
        
    }
        
        
    
     else if (a == candidato2) {
        
        document.getElementById("tela2").innerHTML = '<img src="ana.jpeg" width="244px" height="379px"></img>'
        
    }
     else if (a == candidato3) {
        
        document.getElementById("tela2").innerHTML = '<img src="patricia.jpeg" width="244px" height="379px"></img>'
        
    }
     else if (a == candidato4) {
        
        document.getElementById("tela2").innerHTML = '<img src="fernando.jpeg" width="244px" height="379px"></img>'
        
    }
  
    
    else {}
    
}, 1000)

voto1 = 0;
voto1++;

voto2 = 0;
voto2++;

voto3 = 0;
voto3++;

voto4 = 0;
voto4++;

senha = 1234;


function votar () {
    var b = document.querySelector("#audio1");
    var a = document.getElementById("tela").innerText;
    var candidato1 = "22";
    var candidato2 = "35";
    var candidato3 = "27";
    var candidato4 = "31";
    b.play()
    

    if (a == candidato1) {
        
       
        document.getElementById("tiago").innerHTML = voto1;
        voto1++;
        
        document.getElementById("tela").innerText = null;
        document.getElementById("tela2").innerText = null;
       
        
    }
        
        
    
     else if (a == candidato2) {
        
        document.getElementById("doralice").innerHTML = voto2;
        voto2++;
        document.getElementById("tela").innerText = null;
        document.getElementById("tela2").innerText = null;
    }
     else if (a == candidato3) {
        
        document.getElementById("noemia").innerHTML = voto3;
        voto3++;
        document.getElementById("tela").innerText = null;
        document.getElementById("tela2").innerText = null;
    }
     else if (a == candidato4) {
        
        document.getElementById("gilvan").innerHTML = voto4;
        voto4++;
        document.getElementById("tela").innerText = null;
        document.getElementById("tela2").innerText = null;
    }
    else if (a == senha) {
        var d = document.getElementById("tiago").innerHTML;
        var e = document.getElementById("doralice").innerHTML;
        var f = document.getElementById("noemia").innerHTML;
        var g = document.getElementById("gilvan").innerHTML;
        document.write("CARLOS, obteve: ", d," votos. ",
        "ANA, obteve: ", e," votos. ", "PATRICIA, obteve: ", f," votos. ",
        "FERNANDO, obteve: ", g," votos.");
        print();
    }
    else {
        window.alert("Erro!");
        document.getElementById("tela").innerText = null;}
}



