function nombres() {
    var resultado1=document.getElementById("correo").value;
    var resultado2=document.getElementById("correo1").value;
    var resultado3=document.getElementById("correo2").value;
    var resultado4=document.getElementById("correo3").value;
    var resultado5=document.getElementById("correo4").value;
    var resultado6=document.getElementById("correo5").value;
    console.log(resultado1+" "+ resultado2+" "+ resultado3+" "+ resultado4+" "+ resultado5+" "+resultado6);

    if(resultado1==""){
        alert("Debes digitar tu usuario")
        document.getElementById("correo").focus();
}
else{
    if(resultado2==""){
        alert("Debes digitar tu contraseña")
        document.getElementById("correo1").focus();
}
else{
    if(resultado3==""){
        alert("Debes digitar tu telefono")
        document.getElementById("correo2").focus();
}
else{
    if(resultado4==""){
        alert("Debes digitar tu correo electronico")
        document.getElementById("correo4").focus();
}
else{
    if(resultado5==""){
        alert("Debes digitar nuevamente tu contraseña")
        document.getElementById("correo5").focus();
}
else{
    if(resultado6==""){
        alert("Debes digitar tu telefono")
        document.getElementById("correo3").focus();
}
else{
    console.log(resultado1+" "+ resultado2+" "+ resultado3+" "+ resultado4+" "+resultado5+" "+resultado6);
    document.getElementById("correo1").focus();
    document.getElementById("correo2").focus();
    document.getElementById("correo3").focus();
    document.getElementById("correo4").focus();
    document.getElementById("correo5").focus();
}
}
}
}
}
}
}