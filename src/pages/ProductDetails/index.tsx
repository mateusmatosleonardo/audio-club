/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../../components/Header";
import style from '../../styles/productDetails.module.scss';
import Image from "next/image";
import Phones from '../../assets/images/phoness.svg';
import RecOne from '../../assets/images/recOne.svg';
import RecTwo from '../../assets/images/recTwo.svg';
import RecMain from '../../assets/images/recMain.svg';
import RoundButton from "../../components/RoundButton";

const ProductDetails = () =>{

    const price = 1.499;

    return(
        <>
            <Header/>
            <div className={style.container}>
                <a href="#">Go back</a>
                <div className={style.center}>
                    <Image 
                        src={Phones}
                        width={370}
                        height={390}
                    />
                    <div className={style.information}>
                        <h3>RELEASE</h3>
                        <h2>CLUB JX88</h2>
                        <h2>HEADHONES</h2>
                        <p>Wireless over-ear earphone with noisy noise</p>
                        <h1>${price}</h1>
                        <div className={style.addContainer}>
                            <p>Nada aqui</p>
                            <RoundButton title="ADD TO CART"/>
                        </div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style.center}>
                        <div className={style.box}>
                            <h3>FEATURES</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique.
                                Proin quis bibendum diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique.
                                Proin quis bibendum diam. </p>
                        </div>
                        <div className={style.boxTwo}>
                            <h3>IN THE BOX</h3>
                            <div className={style.alignOptions}>
                                <p>1x </p>
                                <span>lorem ipsum dolor sit</span>
                            </div>
                            <div className={style.alignOptions}>
                                <p>1x </p>
                                <span>lorem ipsum dolor sit</span>
                            </div>
                            <div className={style.alignOptions}>
                                <p>1x </p>
                                <span>lorem ipsum dolor sit</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.sectionImages}>
                    <div className={style.center}>
                        <div className={style.boxImageOne}>
                            <Image 
                                src={RecOne}
                                width={370}
                                height={210}
                            />
                            <Image 
                                src={RecTwo}
                                width={370}
                                height={210}
                            />
                        </div>
                        <div className={style.boxImageTwo}>
                            <Image 
                                src={RecMain}
                                width={570}
                                height={502}
                            />
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;