import React from 'react';
import preloader from "../../../assets/img/Double Ring-1.3s-200px.svg";

const Preloader = () => {
    return (
        <div  style={{backgroundColor: 'transparent'}}>
            <img src={preloader} alt={'loading'} />
        </div>
    );
};

export default Preloader;