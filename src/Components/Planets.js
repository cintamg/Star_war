import React from "react";

export default function Planets(){
    return(
        <>
            <h1><b>PLANETS</b></h1>
            <div className="d-flex flex-nowrap">
            <div className="order-3 p-2"><a href="https://www.starwars.com/databank/tatooine"><img src="https://www.syfy.com/sites/syfy/files/starwars_tattooine_binary_sunset.jpg" alt="Tatooine" height={500} width={500}></img></a></div>
            <div className="order-2 p-2"><a href="https://www.starwars.com/databank/coruscant"><img src="https://cdn.jwplayer.com/v2/media/HhYvseJN/poster.jpg?width=720" alt="Coruscant" height={500} width={500}></img></a></div>
            <div className="order-1 p-2"><a href="https://www.starwars.com/databank/hoth"><img src="https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675" alt="Hoth" height={500} width={500}></img></a></div>
            </div>
        </>
    )
}