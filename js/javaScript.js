
    let onOff;
    let botones = false;
    let pantalla;
    let contenido;
    const video = document.getElementById('display')
    const imagess = document.getElementById('imagenEvent')
    let controlador=0;
    const start=()=>{       
        if(onOff){
            document.getElementById('gameVisualy').style.display='none'
            document.getElementById('gameVisualy').style.display='block'
            document.querySelector(".myclass").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass1").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass2").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass3").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass4").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass5").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass6").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass7").style.color='rgb(67, 66, 66)';
            document.querySelector(".myclass8").style.color='rgb(67, 66, 66)';
            document.getElementById('encendido').style.opacity='0'
            video.src=""            
             onOff=false;
             botones=false;
        }else if(!onOff){
            document.getElementById('gameVisualy').style.display='block'
            document.querySelector(".myclass").style.color='white';
            document.querySelector(".myclass1").style.color='white';
            document.querySelector(".myclass2").style.color='white';
            document.querySelector(".myclass3").style.color='white';
            document.querySelector(".myclass4").style.color='white';
            document.querySelector(".myclass5").style.color='white';
            document.querySelector(".myclass6").style.color='white';
            document.querySelector(".myclass7").style.color='white';
            document.querySelector(".myclass8").style.color='white';
            document.getElementById('encendido').style.opacity='100'        
                onOff=true;
                botones=true;
        }

    }
    const L1=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
            imagess.src="img-video/l1.webp"
        }
    }
    const R1=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
            imagess.src="img-video/r1.webp"
            }
    }
    const minus=()=>{
        if(botones==true){
            console.log("minus");
            }
    }
    const joystickIzquierda=()=>{
        if(botones==true){
            console.log("Joystick Izquierda");
            }
    }
    const arriba=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
                    video.src="img-video/funnypikachu.webp"
                 
            }
    }
    const izquierda=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
                    video.src="img-video/zelda.webp"
            }
    }
    const derecha=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
                    video.src="img-video/poke.webp"
            }
    }
    const abajo=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
                video.src="img-video/magikarp.webp"
            }
    }
    const botonDerecha=()=>{
        if(botones==true){
            console.log("boton cuadrado Derecha");
            }
    }
    const mas=()=>{
        if(botones==true){
            console.log("mas");
            }
    }
    const botonX=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
                video.src="img-video/pikach.mp4"              
            }
    }
    const botonY=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
            video.src="img-video/mario.mp4"              
            }
    }
    const botonA=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
            video.src="img-video/zelda.mp4"              
            }
    }
    const botonB=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='0'
            video.src="img-video/pokemon.mp4"
            }
    }
    const joystickDerecha=()=>{
        if(botones==true){
            console.log("Joystick derecha");
            }
    }
    const home=()=>{
        if(botones==true){
            document.getElementById('encendido').style.opacity='100'
            video.src=""
            }
    }