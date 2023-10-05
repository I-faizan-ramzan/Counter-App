import React, { useState,useEffect } from 'react';
import './Counter.css'

 const Counter= ({setValue})=> {
    const [count, setCount] = useState(0)
    useEffect(() => {
    setValue(count)
      });
  return (
    <div>
        <div className='container'> 
            <div className='incr' onClick={() => setCount(count + 1)}>+ Button</div>
            
              <div className='num'>  {count}</div>
                
              <div className='dcr' onClick={() => setCount(count - 1)} >- Button</div>

        </div>
    </div>
  )
}
export default Counter;
