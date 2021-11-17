window.onload=()=>{
    let usuario= JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("imgUser").src="./img/"+usuario.imagen;
    let arrayTw=[];

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET','./js/tweets.json',true);
    xobj.onreadystatechange=function(){
        if(xobj.readyState == 4 && xobj.status=='200'){
            arrayTw=JSON.parse (xobj.responseText);
            console.log(arrayTw);
            comentario();
        }
    }
    xobj.send(null);
    
    //console.log(usuario);
    //document.getElementById("usuario").innerHTML="Hola "+usuario.nombre;
    let txtTweet=document.getElementById("txtTweet")
    let btnTweet=document.getElementById("btnTweet")
    btnTweet.addEventListener('click',(evt)=>{
        if(txtTweet.value.trim() != ""){
            let obj = {
                img:usuario.imagen,
                nombre:usuario.nombre,
                mensaje:txtTweet.value,
                username:usuario.username,
                
                
                
                

                
            };

            
          

            arrayTw.push(obj);
            crearPost()
            txtTweet.value="";


        }
       
    });
    txtTweet.addEventListener('keyup',(evt)=>{
       
        

    });
    function crearPost(){
        var todo="";
        arrayTw.forEach(el=>{
            todo+=`<div class="post">
            <div>
                <img src="./img/${el.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${el.nombre}</span>
                    <span>@${el.username}</span>
                </h2>
                <div class="textTweet">
                    ${el.mensaje}
                </div>
                ${el.likes}
            </div>
        </div>`;
        });
        document.getElementById("posts").innerHTML=todo;
    

    }
    function comentario(){
        
        
        var todo="";
        arrayTw.forEach(el=>{
            todo+=`<div class="post">
            <div>
                <img src="./img/${el.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${el.nombre}</span>
                    <span>@${el.username}</span>
                </h2>
                <div class="textTweet">
                    ${el.tweet} 
                </div>
                <div> 
                <div>${el.likes}<div>${el.retweets}</div></div>
                <div><img src="./img/${el.comentarios['img']}" alt="" class="imgUser"></div>
                
                </div>
                
                
                
                               
            </div>
        </div>`;
        });
        document.getElementById("posts").innerHTML=todo;
    }


    function crearPost2(){
        
        var todo="";
        arrayTw.forEach(el=>{
            todo+=`<div class="post">
            <div>
                <img src="./img/${el.comentario['img']}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${el.nombre}</span>
                    <span>@${el.username}</span>
                </h2>
                <div class="textTweet">
                    ${el.mensaje}
                </div>
                ${el.likes}
            </div>
        </div>`;
        });
        document.getElementById("posts").innerHTML=todo;
    

    }


};