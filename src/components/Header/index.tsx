/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from '../../styles/home.module.scss';
import Car from '../../assets/images/car.png';
import Image from 'next/image';

const Header = () =>{
    return(
        <div className={style.header}>
            <div className={style.center}>
                <a href="#" className={style.title}>AudioClub</a>
                <div className={style.centerItems}>
                    <a href="#">Home</a>
                    <a href="Headphones">Headphones</a>
                    <a href="Speakers">Speakers</a>
                    <a href="Earphones">Earphones</a>
                    <a href="ProductDetails">
                        <Image
                            src={Car}
                            width={35}
                            height={35}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;