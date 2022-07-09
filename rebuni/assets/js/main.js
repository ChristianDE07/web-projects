// Change Div Function to change the artcile
function changeDivFirst(){
    document.getElementById("bA").className = "chosen numberA";
    document.getElementById("bB").className = "not-chosen numberB";
    document.getElementById("bC").className = "not-chosen numberC";
    document.getElementById("bD").className = "not-chosen numberD";
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "none";
}
function changeDivSecond(){
    document.getElementById("bA").className = "not-chosen numberA";
    document.getElementById("bB").className = "chosen numberB";
    document.getElementById("bC").className = "not-chosen numberC";
    document.getElementById("bD").className = "not-chosen numberD";
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "none";
}
function changeDivThird(){
    document.getElementById("bA").className = "not-chosen numberA";
    document.getElementById("bB").className = "not-chosen numberB";
    document.getElementById("bC").className = "chosen numberC";
    document.getElementById("bD").className = "not-chosen numberD";
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("fourth").style.display = "none";
}
function changeDivFourth(){
    document.getElementById("bA").className = "not-chosen numberA";
    document.getElementById("bB").className = "not-chosen numberB";
    document.getElementById("bC").className = "not-chosen numberC";
    document.getElementById("bD").className = "chosen numberD";
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "block";
}