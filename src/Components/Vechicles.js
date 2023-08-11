import React from "react";

export default function Vechicles(){
    return(
        <>
        <h1>VECHICLES</h1>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/04/16/5ad4e8c370e68e282f66ed87_falcon.png.rend.hgtvcom.966.690.suffix/1573241270725.png" className="center" width={500} height={500} class="d-block w-100" alt="Millennium Falcon"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Millennium Falcon</h5>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/7/76/Atat.jpg" width={500} height={500} className="center" class="d-block w-100" alt="All Terrain Armored Transport"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>All Terrain Armored Transport</h5>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://www.metalearth.com/content/images/thumbs/0003320_premium-series-imperial-star-destroyer_1200.png" width={500} height={500}  class="d-block w-100" alt="Star Destroyer"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Star Destroyer</h5>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </>
    )
}