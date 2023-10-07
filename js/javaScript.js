
    let onOff;
    let botones = false;
    let pantalla;
    let contenido
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
                    
                onOff=true;
                botones=true;
        }
        
    
    }
    const L1=()=>{
        if(botones==true){
        console.log("L1");
        }
    }
    const R1=()=>{
        if(botones==true){
            console.log("R1");
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
            console.log("arriba");
            }
    }
    const izquierda=()=>{
        if(botones==true){
            console.log("izquierda");
            }
    }
    const derecha=()=>{
        if(botones==true){
            console.log("derecha");
            }
    }
    const abajo=()=>{
        if(botones==true){
            console.log("abajo");
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
            console.log("X");
            }
    }
    const botonY=()=>{
        if(botones==true){
            console.log("Y");
            }
    }
    const botonA=()=>{
        if(botones==true){
            console.log("A");
            }
    }
    const botonB=()=>{
        if(botones==true){
            console.log("B");
            }
    }
    const joystickDerecha=()=>{
        if(botones==true){
            console.log("Joystick derecha");
            }
    }
    const home=()=>{
        if(botones==true){
            console.log("Home");
            }
    }