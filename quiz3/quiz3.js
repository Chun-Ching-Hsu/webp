var s =""; 
document.addEventListener('keydown',function(lokey){
    s = s+lokey.key;
    document.getElementById("quiz3").innerHTML = s ;
},false);