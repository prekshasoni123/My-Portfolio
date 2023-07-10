import React from 'react'
import {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const Data=({title,answer})=>{

    const[isAnswerShowing, setIsAnswerShowing] =useState(false);
    return(
        <article className='data' onClick={()=>setIsAnswerShowing(prev=>!prev)}>
            <div>
                <h4>{title}</h4>
                <button className='data_icon'>
                    {
                        isAnswerShowing? <AiOutlineMinus/> : <AiOutlinePlus/>
                    }
                </button>
            </div>
            {isAnswerShowing &&<p>{answer}</p>}
        </article>
    )
}

export default Data