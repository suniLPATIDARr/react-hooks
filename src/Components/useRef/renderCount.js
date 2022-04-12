/* eslint-disable react-hooks/rules-of-hooks */
import React, {useRef,useEffect} from 'react';

const index = () => {
    const input = useRef('')
    const count = useRef(0)
    const inputChange=(e)=>{
        console.log(e.target.value)
        console.log(input.current.value);
    }
    useEffect(()=>{
        count.current=count.current+1;
    },)
  return (
    <div>
        <input ref={input} onChange={inputChange} value={input.current.value} type={'text'}/>
        <br/>
        Rerender component {count.current} times.
    </div>
  )
}

export default index