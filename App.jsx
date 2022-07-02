import React from "react";
import { useState } from "react";
// import Card from './Cards';
// import sdata from './sdata';
const App = () => {
    
    const [curname, updatedone] = useState("");
    const [data, updateddata] = useState("typed word will appear here after submitting")
    const inputEvent = (event) => {
        
        updatedone(event.target.value)
    }
    const fun = (event) => {
        event.preventDefault();
        updateddata(curname)
    }
   
    return (
        <>
            <div>
                <form >
                <h1>{data}</h1>
                <input type="text" placeholder="write here"
                    onChange={inputEvent}
                    // value={curname}
                    defaultValue=""
                />
                <button onClick={fun} type="submit"> click here</button>
                </form>
            </div>

        </>
    );

}
export default App;