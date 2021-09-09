import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="#000000 black">
                <div className="nav-wrapper">
                    <div className="container"> 
                        <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Ecoomerce</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                            <li><a href="badges.html"><i className="material-icons">shopping_cart</i></a></li>
                            <li><a href="collapsible.html"><i className="material-icons">vpn_key</i></a></li>
                            <li><a href="mobile.html"><i className="material-icons">settings</i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
