import './Footer.sass';
import {Link} from "react-router-dom";
import React from "react";

const Footer = () => (
    <footer className={"footer"}>
        <div className="container">
            <div className={"nav"}>
                <Link to={""}> Pokedex by AzizVindiza</Link>
                <a href="https://github.com/AzizVindiza/pokedex">Github Repo of this Project</a>
                <a href="https://t.me/AzizVindiza">My telegram</a>
            </div>
        </div>
    </footer>
);

export default Footer;
