import React from "react";
import "../App.css"

function Menutab() {
    return(
        <div className="menutab-close menu-list" id="menutab">
            <ul>
                <li><h1>HOME</h1></li>
                <li><h1>ABOUT</h1></li>
                <li><h1>SERVICES</h1></li>
                <li><h1>CONTACT</h1></li>
            </ul>
        </div>
    );
}

export default Menutab;