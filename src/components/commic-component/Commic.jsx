import React from 'react';
import "./commic.scss"
import Score from "../score-component/ScoreComponent"
import notFound from "../../assets/404.png"
const Commic = ({ data }) => {
    const image = (data.img === null) ? notFound : data.img

    return (
        <div className="commic">
            <h1 className="commic-title">{data.title}</h1>
            <div className="commic-container">
                <div className="commic-image">
                    <img src={image} alt={data.alt} width={300} height={216} />
                </div>
                <div className="commic-info">
                    <p>{data.alt}</p>
                </div>
                <Score />
            </div>
        </div>
    );
};

export default Commic;