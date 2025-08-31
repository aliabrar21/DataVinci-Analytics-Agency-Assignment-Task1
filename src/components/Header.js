import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="logo">NEW ZEALAND HONEY CO.</div>
            <nav className="nav">
                <a href="#">Shop</a>
                <a href="#">Explore</a>
                <a href="#">About</a>
                <a href="#">Rewards</a>
                <a href="#">Contact</a>
            </nav>
            <div className="icons">
                <span>🔍</span>
                <span>🛒</span>
            </div>
        </header>
    );
}

export default Header;
