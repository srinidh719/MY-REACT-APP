import React from "react";
const Itemslist=()=>{
    const items=['apple','banana','mango'];
    return(
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>

            ))}
        </ul>
    );
};
       export default Itemslist;