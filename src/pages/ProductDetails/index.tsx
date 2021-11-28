/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../../components/Header";
import style from '../../styles/productDetails.module.scss';
import Image from "next/image";
import Phones from '../../assets/images/phoness.svg';

const ProductDetails = () =>{
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
                        <p>RELEASE</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;