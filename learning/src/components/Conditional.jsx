import React from "react";
const F=false;
const T=true;


function ConditionalRendor(){

    return(
        <div>
           { F && <p>hello this is false because F is false</p>}
           {T && <p>hello this is True because T is True</p>}
        </div>
    )
}
export default ConditionalRendor;