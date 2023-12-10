import React, { useState,useEffect } from "react";

function Use(){
    const [Counter,state]=useState(0);//[0,fn] 1st render
    useEffect(()=>{
        console.log("i ran counter",Counter);

    },[Counter])
    function inc(){
        state(Counter+1);
    }
    function dec(){
        state(Counter-1);
    }

    return(
        <div>
            <h1>count:{Counter}</h1>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
        </div>
    )
}
//So, to answer your question, the console.log inside your useEffect hook runs after the component has been
// rendered and the changes have been committed to the screen.
export default Use;

