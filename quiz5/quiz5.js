$(document).ready(function(){
    $("li").click(function(e){
        console.log(e.target.textContent);
    });
});
var context = "hello cgu!";
$("#myList").append("<li>"+ "hello cgu!" +"</li>");