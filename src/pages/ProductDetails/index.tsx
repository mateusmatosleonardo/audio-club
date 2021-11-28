/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../../components/Header";
import style from '../../styles/productDetails.module.scss';
import Image from "next/image";
import Phones from '../../assets/images/phoness.svg';

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
                        <div>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;