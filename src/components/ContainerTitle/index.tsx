import React from "react";
import style from '../../styles/containerTitle.module.css';

interface ContainerTitleProps{
    title: string;
}

const ContainerTitle = ({title}: ContainerTitleProps) =>{
    return(
        <div className={style.container}>
            <h2 className={style.title}>{title}</h2>
        </div>
    )
}

export default ContainerTitle;