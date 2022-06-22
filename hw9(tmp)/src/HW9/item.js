const Item = ({id, note, date, time,deleteData,state}) => {
  
    function deleteItem(){
         deleteData(function(prev){
             return prev.filter(item => item.id !== id)
         })
    }

    // function finishItem(){
    //   state(function(prev){
    //     if (prev.filter(item=>item.id === id))
    //       return {
    //         ...prev,state: !prev.state
    //       }
    //       return prev
    //   })
    
    // }

    return (
      <div className="item">
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;
