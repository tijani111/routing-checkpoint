import React from 'react'

export default function Rate({rate,setRate}) {
    const arr=[1,2,3,4,5];
    return (
        <div>
            {arr.map((el)=>(<span onClick={()=>setRate(el)}>{el <= rate ?
            
            (<i class="fas fa-star"></i>):(<i class="far fa-star"></i>)} </span>))}

    </div>
    );
}
