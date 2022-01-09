import React, { useState } from "react";

function Content (props){
    const [names, setNames] = useState("");
    const [orderId, setOrderId] = useState("");

    const getName = (event) => {
        setNames(event.target.value);
        props.updateName(event.target.value)}
    const getId = (event) => {
        setOrderId(event.target.value)
        props.updateOrderId(event.target.value)}

    return(
        <div>
            <input 
                placeholder="Podaj imię"
                name='names'
                type="text" 
                value={names}
                onChange={getName}
            />
            <input 
                placeholder="Podaj numer zamówienia"
                name='setOrderId'
                type="text" 
                value={orderId}
                onChange={getId}
            />
        </div>
        )
}

export default Content;