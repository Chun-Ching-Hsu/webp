
var i = 1;
var h = 0;
var m = 0;
var s = 0;
var time = new Date();
h = time.getHours();
m = time.getMinutes();
s = time.getSeconds(); 
console.log(h);
setInterval(function run() {
    func(i++);
},1000);

function func(e){
    s = s+parseInt(e%60);
    m = m+parseInt(e/60);
    h = h+parseInt(e/3600);
    var clocks = h +":"+ m +":" +s;
    console.log(clocks);
    $(".clock").html(clocks);
}
