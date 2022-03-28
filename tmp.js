function tree_main(){
    function Trees(){
        var row = 4 ;
        for ( var r = 1; r<=row ; r++){
            var tri = "";
            for (var next = 1; next <=4 ; next ++){
                for (var space = r ; space<row; space ++ ){
                    tri += " "; 
                }
                for (var star=1 ; star<=2*r-1 ; star++){
                    tri+='*';
                }
                tri+=" ";
                for (var space = row+r ; space <= 2*row-1 ; space++){
                    tri+=" ";
                }
            }
        }
        console.log(tri);
        return 0;
    }
 }
    function tree_node(){
        for (var r = 1 ; r<=3 ; r++){
            var tri = "";
            for (var next=1 ; next<=4 ; next++){
                for (var space=1  ;space<4 ; space ++){
                    tri +=" ";
                }
                tri += "*";
                for (var space = 1 ; space <= row ; space++){
                    tri+=" ";
                }
            }
            console.log(tri);
        }
        return 0;
    }
}
print_tree(){
    for (var i=1 ; i<=4 ; i++){
        function Trees();
    }
    for (var i=1 ; i<=4 ; i++){
        function tree_node();
    }

}