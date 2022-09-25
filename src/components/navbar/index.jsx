import React from "react";
import { Link } from "react-router-dom";

import "./index.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <ul className="lists">
                    <li className="item">
                        <Link className="link" to="/">Blog</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/about">Sobre</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/description">Descricao</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}