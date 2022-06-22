import { useState } from 'react'
import Edit from "./edit"
import List from "./list"
import './index.css'
const Home = () =>{

    const [data, setData] = useState ([])
    const [a,setA] = useState(0)
    function plus(){
        setA(function(ad){
            return ad+ 500
        } )
    }
    return <div className='app' >
        {a}
        <button onClick={plus}>家法</button>
        <Edit add={setData}/>
        <List listData={data} deleteData={setData} />
    </div>
}  
export default Home