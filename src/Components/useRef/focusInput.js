/* eslint-disable react-hooks/rules-of-hooks */
import React, {useRef,useEffect,useState} from 'react';

const index = () => {
    const [name, setname] = useState('')
    const input = useRef('')
    const count = useRef(0)
    const inputChange=(e)=>{
        setname(e.target.value)
    }
    const clickHandler=()=>{
        //input.current is actually a complete input element
        console.log(input.current)
        input.current.focus();
    }
    useEffect(()=>{
        count.current=count.current+1;
    },)
  return (
    <div>
        <input ref={input} onChange={inputChange} value={name} type={'text'}/>
        <br/>
        Rerender component {count.current} times.
        <br/>
        <button onClick={clickHandler}>Focus</button>
    </div>
  )
}

export default index