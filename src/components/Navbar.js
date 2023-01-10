import React from "react";
import "../App.css"

function Navbar() {
    const menu = () => {
        document.getElementById("menutab").classList.toggle("menutab-open");
        document.getElementById("menutab").classList.toggle("menutab-close");
    }
    return (

        <div className="nav">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
            <div className="logo">ELEVEN MEDIA</div>
            <label for="burger" class="burger">
  <input id="burger" type="checkbox" onClick={menu}/>
  <span></span>
  <span></span>
  <span></span>
</label>
        </div>
    );
}

export default Navbar;