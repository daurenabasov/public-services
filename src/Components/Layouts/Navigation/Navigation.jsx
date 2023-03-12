import React from 'react';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/service"> Сервисы</Link>
                    </li>
                    <li>
                        <Link to="/about">О нас</Link>
                    </li>
                    <li>
                        <Link to="/form">Форма</Link>
                    </li>
                </ul>
                <div className={s.burger}>
                    <label htmlFor="check">
                        <input
                            type="checkbox"
                            id="check"
                            onClick={() => setShowNav(!showNav)}
                        />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;