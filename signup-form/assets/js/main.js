function seeMyPassword(){
    var x = document.getElementById("passInputNormal");
    var y = document.getElementById("passInputRetype");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}