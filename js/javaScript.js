
    let onOff;
    const start=()=>{
        
        if(onOff){
            document.getElementById('gameVisualy').style.display='none'
                onOff=false;
        }else{
            document.getElementById('gameVisualy').style.display='block'
                onOff=true;
        }
    
    }
    const L1=()=>{
        console.log("L1");
    }
    const R1=()=>{
        console.log("R1");
    }