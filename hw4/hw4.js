var s_time;
var d_time;
var count=100; 
$(document).ready(function(){
    $("input").click(function(){ 
        s_time=new Date().getTime();
        creat_s();
        document.addEventListener('keydown',creat_s);
        document.addEventListener('keydown',delete_ch);
        window.setInterval(end,1000);
    });
    $("button").click(function(){
        $(".text").toggle();
    });
});
function move(){
    //$(".trail")[0].find("img").animate({left:"97%"},5000);
    $(".trail").find("img").animate({left:"97%"},20000);
}
function delete_ch(lokey){
    let del_node = document.createElement("img");
    del_node.src = "alpha/"+(lokey.keyCode-65)+".png";
    for (let x =0 ; x<=5 ; x++){
        let last = $(".trail")[x].children[0];
        if (last.src == del_node.src){
            $(".trail")[x].removeChild(last);
            break;
        }
    }
    //console.log(last);
}
function creat_s(){ 
    let num=[] ;
    let total_s = get_t()*1.5;
    for( let s=0 ; s<total_s-s ; s++){
        for (let i=0 ; i<=5 ; i++){
            num[i] = Math.floor(Math.random()*25); 
        }
        for (let x = 0 ; x <=5 ; x++){
            let newNode =  document.createElement("img"); 
            newNode.src="alpha/"+num[x]+".png";
            newNode.style.zIndex=count;
            $(".trail")[x].append(newNode);
        }
        count--;
    }
    move();
}

function get_t(){
    d_time = new Date().getTime();
    d_time = (d_time-s_time)/1000;
    return d_time;
}
function end(){
    for(var y = 0 ; y <= 5 ; y++){
        var pos = $(".trail")[y].children[0];
        if(pos.style.left >= "94%" ){
            alert("Game over");
            $('img').stop(true);
        }
    }
}