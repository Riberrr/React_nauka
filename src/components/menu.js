import React from "react";

function Menu (props) {
    const changeMenu = (event) => props.updateMenu(event.target.value);
    return(
        <div className="menu">
            <button className="green" value={"1"} onClick={changeMenu}>Menu 1</button>
            <button className="blue" value={"2"} onClick={changeMenu}>Menu 2</button>
            <button className="red" value={"3"} onClick={changeMenu}>Menu 3</button>
        </div>
    );
}

export default Menu;
