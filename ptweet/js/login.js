window.onload = function(){
    var boton = document.getElementById("btnAceptar");
    var txtUsuario =document.getElementById("txtUsuario");
    var txtPassword = document.getElementById("txtPassword");
    //boton.style.backgroundColor="#FF0000"
    boton.addEventListener('click',function(){
        let usuario =txtUsuario.value;
        let pass = txtPassword.value;
        let arregloUsuarios=[
            {id:1, nombre:"Fedrico Pluche", imagen:"fede.jpg",username:"fedep",password:"123"},
            {id:1, nombre:"Dom Camerion", imagen:"camerino.jpg",username:"camerino",password:"123"},
            {id:1, nombre:"Vivi", imagen:"vivi.jpg",username:"vivi",password:"123"},
        ];
        let encontro = false;
        arregloUsuarios.forEach(fila=>{
            if(fila.username == usuario.trim() && fila.password == pass.trim()){
                encontro=true;
                localStorage.setItem("usuario",JSON.stringify(fila));
                let fecha=new Date();
                localStorage.setItem("fecha", fecha.getFullYear()+"/"+fecha.getMonth()+"/"+fecha.getDay());


                
            }
        });

        

        if(encontro){
            //REDIRECCIONAR
            location.href="./index.html"
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