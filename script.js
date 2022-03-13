var form1 =  document.getElementById("form1");
var LR = form1.querySelector("#leftRight");
var TB = form1.querySelector("#topBottom");
var blur = form1.querySelector("#blur");
var spread = form1.querySelector("#spread");
var color = form1.querySelector("#color");
var output = document.getElementById("demo");


output.style.boxShadow = `${LR.value}px ${TB.value}px ${blur.value}px  ${spread.value}px ${color.value}`;

form1.oninput = function() {
    LR = this.querySelector("#leftRight");
    TB = this.querySelector("#topBottom");
    blur = this.querySelector("#blur");
    spread = this.querySelector("#spread");
    color = this.querySelector("#color");


    output.style.boxShadow = `${LR.value}px ${TB.value}px ${blur.value}px  ${spread.value}px ${color.value}`;
}