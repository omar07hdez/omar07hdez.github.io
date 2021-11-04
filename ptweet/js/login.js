window.onload = function(){
    var boton = document.getElementById("btnAceptar");
    var txtUsuario =document.getElementById("txtUsuario");
    var txtPassword = document.getElementById("txtPassword");
    //boton.style.backgroundColor="#FF0000"
    boton.addEventListener('click',function(){
        let usuario =txtUsuario.value;
        let pass = txtPassword.value;
        if(usuario.trim()  == "admin" && pass.trim() == "123"){
            alert("listo");
        }else{
            document.getElementById("error").innerHTML="credenciales incorrectas";
            txtUsuario.style.backgroundColor="#FF0000";
            txtPassword.style.backgroundColor="#FF0000";
        }
        
        



    });

}
function limpiar(){
    txtUsuario.style.backgroundColor="#FFF";
    txtPassword.style.backgroundColor="#FFF";
}