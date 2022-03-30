/*var s =""; 
document.addEventListener('keydown',function(lokey){
    s = s+=lokey.key};
    document.getElementById("quiz3").innerHTML = s ;
},false);*/
var text=document.getElementById("quiz3")
document.addEventListener('keydown',function(s){
    quiz3.textContent+=`${s.key}`;
})