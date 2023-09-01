//INTEREST

function interest(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let result = (num1 * num2 * num3);
    let num4 = document.getElementById("num4");
    num4.value = result;

}

//PRINCIPAL

function principal(){
    let num5 = Number(document.getElementById("num5").value);
    let num6 = Number(document.getElementById("num6").value);
    let num7 = Number(document.getElementById("num7").value);
    let result = (num5 / (num6 * num7));
    let num8 = document.getElementById("num8");
    num8.value = result;

}

//RATE

function rate(){
    let num9 = Number(document.getElementById("num9").value);
    let num10 = Number(document.getElementById("num10").value);
    let num11 = Number(document.getElementById("num11").value);
    let result = (num9 / (num10 * num11));
    let num12 = document.getElementById("num12");
    num12.value = result;

}

//TIME

function time(){
    let num13 = Number(document.getElementById("num13").value);
    let num14 = Number(document.getElementById("num14").value);
    let num15 = Number(document.getElementById("num15").value);
    let result = (num13 / (num14 * num15));
    let num16 = document.getElementById("num16");
    num16.value = result;

}