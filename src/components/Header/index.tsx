import React from "react";
import style from '../../styles/home.module.css';

const Header = () =>{
    return(
        <div className={style.header}>
            <h2 className={style.title}>AudioClub</h2>
        </div>
    );
};

export default Header;