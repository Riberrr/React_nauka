import React, { useState } from "react";
import Output from './output'
import Menu from  './menu'
import Content from './inputs';

function All () {
    const [menuId, setMenuId] = useState("");
    const [names, setNames] = useState("");
    const [orderId, setOrderId] = useState("");
    const updateValueName = childValue => {setNames(childValue)};
    const updateValueMenu = childValue => {setMenuId(childValue)};
    const updateValueOrderId = childValue => {setOrderId(childValue)};

    return(
        <div className="all">
            <Menu updateMenu={updateValueMenu} />
            <div className="content">
                <Content 
                    updateName={updateValueName} 
                    updateOrderId={updateValueOrderId}
                    />
                <Output
                    imie={names} 
                    orderId={orderId}
                    menu={menuId} />
            </div>
        </div>
    )
};

export default All;