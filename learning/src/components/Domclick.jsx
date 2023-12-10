import React from "react";



function Oneclick() {
    var count = 0; 
    function changeme(event) {

        if (count % 2 === 0) {
            event.target.style.backgroundColor = "red";
        } else {
            event.target.style.backgroundColor = "yellow";
        }
        count++;
    }

    return <button onClick={changeme}>Change Me</button>;
}

export default Oneclick;