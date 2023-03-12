import React from 'react';
import s from "./Nav.module.scss"
import { Link } from "react-router-dom"

const Navigation = ({ styleLink }) => {
    return (
        <div>
            <nav>
                <ul className={s.navigation} >
                    <li>
                        <Link to="/" style={styleLink}>Домой</Link>
                    </li>
                    <li>
                        <Link to="/service" style={styleLink}> Сервисы</Link>
                    </li>
                    <li>
                        <Link to="/about" style={styleLink}>О нас</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;