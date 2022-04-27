
var i = 1;
var h = 0;
var m = 0;
var s = 0;
var time = new Date();
h = time.getHours();
m = time.getMinutes();
s = time.getSeconds(); 
//console.log(h);
setInterval(function run() {
    func(1);
},1000);

function func(e){
    //console.log(s,e);
    s = parseInt( (s+e)%60 );
    //console.log(s);
    m = parseInt((m + s/60) % 60);
    h = parseInt((h+m/60+s/3600)%24);
    var clocks = h +":"+ m +":" +s;
    console.log(clocks);
    $(".clock").html(clocks);
}
