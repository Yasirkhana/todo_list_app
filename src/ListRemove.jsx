import React from 'react'


const ListRemove = (props) => {

    return (
        <>
                     <li>
                        <button className='removeBtn' 
                        onClick ={() => {
                        props.onSelect(props.id);
                        }} 
                        > x 
                        </button> 
                         ✔  {props.text} 
                    </li> 
         </>
    )
} 

export default ListRemove;