/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from '../../styles/home.module.css';
import Car from '../../assets/images/car.png';
import Image from 'next/image';

const Header = () =>{
    return(
        <div className={style.header}>
            <div className={style.center}>
                <a href="#" className={style.title}>AudioClub</a>
                <div className={style.centerItems}>
                    <a href="#" className={style.items}>Home</a>
                    <a href="Headphones" className={style.items}>Headphones</a>
                    <a href="#" className={style.items}>Speakers</a>
                    <a href="#" className={style.items}>Earphones</a>
                    <Image
                        src={Car}
                        width={35}
                        height={35}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;