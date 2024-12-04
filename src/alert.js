import React from "react";
const AlertButton=()=>{
    const handleclick=()=>{
        alert('button clicked');
    };
    return<button onClick={handleclick}>clickme</button>;
};
export default AlertButton;