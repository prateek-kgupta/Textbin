function colorChange() {
    const color = document.getElementsByName("bgcolor")[0].value;
    document.getElementById("tarea").style.backgroundColor = color;
    var buttons = document.getElementsByClassName("but"); 
    for (let b in buttons){
        buttons[b].style.backgroundColor = color;
    }
}

function bold() {
    const  element = document.getElementById("tarea");
    if (element.style.fontWeight == "bold") {
        element.style.fontWeight = "normal";
    }
    else { 
        element.style.fontWeight = "bold"; 
    }
}

function italic() {
    const  element = document.getElementById("tarea");
    if (element.style.fontStyle == "italic"){
        element.style.fontStyle = "normal";
    }
    else{
        element.style.fontStyle = "italic";
    }
}

function underline() {
    const  element = document.getElementById("tarea");
    if (element.style.textDecoration == "underline"){
        element.style.textDecoration = "none";
    }
    else{
        element.style.textDecoration = "underline";
    }
}

function strikethrough() {
    const  element = document.getElementById("tarea");
    if (element.style.textDecoration == "line-through"){
        element.style.textDecoration = "none";
    }
    else{
        element.style.textDecoration = "line-through";
    }
}

function fsize() {
    var size = document.getElementById("fsize").value;
    size += 'px';
    document.getElementById("tarea").style.fontSize = size;
}

function ffam(){
    var fam = document.getElementById("ffam").value;
    document.getElementById("tarea").style.fontFamily = fam;
}

function txtclr(){
    document.getElementById("no").click();
}

function fclrchange(){
    var element = document.getElementsByClassName("txtclr")[0];
    var col = document.getElementById("no").value;
    document.getElementById("tarea").style.color = col;
    element.style.color = col;
    var buttons = document.getElementsByClassName("but"); 
    for (let b in buttons){
        buttons[b].style.color = col;
    }
    

}