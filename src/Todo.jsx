import React , {useState} from 'react'
import './App.css'
import ListRemove from './ListRemove'


const Todo = () => {

    

    const [item ,setitem] = useState([]);
    const [inputList,setinputList] = useState();
    const itemEvents = (event) =>{
        setinputList(event.target.value);
    }

    const makeList = (event) =>{
        setitem((oldItems) => {
                return [...oldItems,inputList]
        })

        setinputList('');
    }
    const removeItem = (id) => {

        
        setitem((oldItems) => {
            return oldItems.filter((arrEle,index)=>{
                return index !== id; 
            })
    })
    }
    

    return (
        <>
    <div className = "Main"> 
        <div className = "Card_div">
            <br/> 
            <h1> 📔  ToDo List 📔 </h1><br/>
            <input
              type = 'text'
              value = {inputList}
              onChange = {itemEvents}
              placeholder = "Enter Task here"
            />
            <button className="addBtn" onClick = {makeList}> + </button>
           
            <ul>
            {item.map((itemVal,index) =>{ 
                    return(  <ListRemove 
                   key = {index}
                   id = {index} 
                   text={itemVal}
                   onSelect = {removeItem} /> 
                    )})}
            

            </ul>
        </div>
        <h1 className = 'Personal'>BY YASIR KHANA</h1>
        <h3 className = 'Personal'>KHAN10055YASIR@GMAIL.COM</h3>
    </div>
    </>
    )
}
export default Todo;