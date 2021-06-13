import React from "react";

const Burger = (props) => {

    const {toggleBurgerMenu} = props;

    return (
        <ul className="menu-burger" onClick={toggleBurgerMenu}>
            <li className="menu-burger__item"></li>
            <li className="menu-burger__item"></li>
            <li className="menu-burger__item"></li>
        </ul>
    );
};

export default Burger;