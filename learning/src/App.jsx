import React from "react";
import Tag1 from "./components/Tag1";
import F from "./components/Footer"
import Middle from "./components/Mid";
import Jimp from "./components/JsxImp"
import ConditionalRendor from "./components/Conditional";
import Oneclick from "./components/Domclick";
import Use from "./components/Usestate";
function App(){
    return(
        <div>
            <Tag1 />
            <Middle />
            <Jimp />
            <F Custom name="chandana"/>
             {/* props */}
             <ConditionalRendor />
             <Oneclick />
             <Use />
        </div>
    )
}
export default App;