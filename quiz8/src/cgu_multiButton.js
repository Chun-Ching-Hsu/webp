const styleArgument = {fontSize: '100px' , color: 'red'};

const changeText = (event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText +"被點了"
}
const MultiButton=(num)=>{
    var output=[];
    for (let i=1;i<=num ; ++i){
        output.push( <button >第{i}個按鍵</button> )
    }
    return output;
}

// var new_button = document.getElementsByName('#buttons');
// new_button.addEventListener('click', function(e) {
//     if ( e.target.tagName === 'button' ) {
//         e.target.textContent = e.target.textContent+"被點了";
//         console.log(e.target.textContent);
//     }
// }, false);

export default MultiButton;
