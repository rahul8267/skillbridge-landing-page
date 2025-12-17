import "../../src/App.css";
import { useState } from "react";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            {/* Mobile Left Text (Home / Logo) */}
            <div className="mobile-logo">
                SkillBridge
            </div>
            {/* Desktop nav */}
            <nav className="desktop-nav">
                <ul className="nav-left">
                    <li><a href="#" className="logoD">SkillBridge</a></li>
                    <li><a href="#feature">Feature</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul className="nav-right">
                    <li><a href="#" className="btn-outline">Sign In</a></li>
                    <li><a href="#" className="btn-fill">Login</a></li>
                </ul>
            </nav>

            {/* Mobile hamburger button */}
            <button
                className="menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                ≡
            </button>
            {/* Mobile nav */}
            <nav className={`mobile-nav ${isOpen ? "active" : ""}`}>
                <a href="#" onClick={() => setIsOpen(false)}  >SkillBridge</a>
                <a href="#feature" onClick={() => setIsOpen(false)}  >Feature</a>
                <a href="#about" onClick={() => setIsOpen(false)}  >About</a>
                <a href="#" onClick={() => setIsOpen(false)}  >Contact</a>
                <a href="#" onClick={() => setIsOpen(false)} className="btn-outline">Sign In</a>
                <a href="#" onClick={() => setIsOpen(false)} className="btn-fill">Login</a>
            </nav>
        </header>
    );
}

export default Navbar;

