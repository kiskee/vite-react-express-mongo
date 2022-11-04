import React from "react";
import style from "../css/Day.module.css";

const DayContainer = ({ day , number}) => {


    let Img = `../../public/Day_${number+1}.png`



    return (
        <div className={style.card}>
            <center>
                <h4>
                    <b>{day}</b>
                </h4>
            </center>
            <img src={Img} className={style.img}/>
            <div className={style.container}>
                <p>Architect & Engineer</p>
            </div>
        </div>
    );
};

export default DayContainer;
