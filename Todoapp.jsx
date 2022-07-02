import React from "react";
import { useState } from "react";
import Additeminlist from "./Additeminlist";
const Todoapp = () => {
    const [initial, final] = useState()
    const [data, entereddata] = useState([])

    const itemEvent = (e) => {
        // e.preventDefault();
        final(e.target.value)
    }

    const fun = () => {

        entereddata((olditem) => {// oldit... ke through usestate([]) mai pahle se jo data h usko access kar rahe h
            //console.log(olditem)
            return [...olditem, initial];
        });
        final("")//likhne wale jagah ko click karne ke baad phir se saaf kar rahe  , as humlog final ko empty pas 
        //kar rahe isliye initial v empty ho jayega
    };

  const deletitem=(id)=>{
    console.log("deleted");
    entereddata((olditem)=>{
        return olditem.filter((arryele,index)=>
        {
            return index!==id;
        })
    })
  }

    return (
        <>
            <div className="maindiv">
                <div className="centerdiv">
                    <br />
                    <h1>TO DO  LIST</h1>
                    <br />

                    <input type="text" placeholder="add item" onChange={itemEvent}
                        value={initial} />
                    <button onClick={fun}>+</button>

                    <ol>
                        {
                            data.map((val, index) => {
                                return (
                                    <Additeminlist text={val}
                                        key={index}
                                        id={index}
                                        onSelect={deletitem}
                                    />);

                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};
export default Todoapp;