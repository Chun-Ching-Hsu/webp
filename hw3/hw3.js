var s ="";
var s_time=0;
var num=0;
var tmp = "qazwsxedcrfvtgbyhnujmikolp"; 
document.addEventListener('keydown',getchar);
function getchar(lokey){
    creat_s();
    //console.log(s[s.length-1],lokey.key);
    if(s[s.length-1] == lokey.key){
        s = s.substring(0,s.length-1);
    }
    document.getElementById("hw3").innerHTML = s ;
}
function creat_s(){
    num = get_t()*2.5;
    if(s.length<num) { 
        for (var i=0 ;i< num-s.length ; i++){
            var rand = Math.floor(Math.random()*26);
            s = tmp[rand]+s;
        }
    }
}
function start_t(){
    s_time = new Date().getTime();
    return s_time;
}
function get_t(){
    var dif_t = new Date().getTime();
    dif_t = (dif_t-s_time)/1000;
    return dif_t;
}