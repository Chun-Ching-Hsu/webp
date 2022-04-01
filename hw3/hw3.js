var s ="";
var s_time=0;
var num=0;
var tmp = "qazwsxedcrfvtgbyhnujmikolp"; 
var s_len =0;
document.addEventListener('keydown',getchar);
function getchar(lokey){
    creat_s();
    if(s[s.length-1] == lokey.key){
        s = s.substring(0,s.length-1);
    }
    document.getElementById("hw3").innerHTML = s ;
}
function creat_s(){
    num = get_t()*2.5; 
    for (var i=0 ;i< num-s_len ; i++){
        var rand = Math.floor(Math.random()*26);
        s = tmp[rand]+s;
    }
    s_len = num;
    console.log(s_len);
    console.log(num);
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