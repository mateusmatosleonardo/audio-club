import React from "react";
import style from '../../styles/home.module.css';

const Header = () =>{
    return(
        <div className={style.header}>
            <div className={style.childHeader}>
                <a href="#" className={style.title}>AudioClub</a>
            </div>
        </div>
    );
};

export default Header;