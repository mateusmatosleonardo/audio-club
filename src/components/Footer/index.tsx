import React from "react";
import style from '../../styles/footer.module.css';

const Footer = () =>{
    return(
        <div className={style.container}>
            <div className={style.center}>
                <a href="#" className={style.title}>AudioClub</a>
                <div className={style.centerItems}>
                    <a href="#" className={style.items}>Home</a>
                    <a href="Headphones" className={style.items}>Headphones</a>
                    <a href="Speakers" className={style.items}>Speakers</a>
                    <a href="Earphones" className={style.items}>Earphones</a>
                </div>
            </div>
            <div className={style.centerBottom}>
                <div className={style.text}>
                    <p>Projeto desenvolvido para compor</p>
                    <p>portfolio</p>
                    <p>Colaboradores: Mateus, Lília, Júlia</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;