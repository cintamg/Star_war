import React from "react";

export default function People(){
    return(
        <>
        <h1>CAST AND CREW</h1>
            <div className="container mb-3">
                <div class="card" style={{width: '18rem',  padding: 30 }}>
                    <img src="https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg" width={250} height={250} class="card-img-top" alt="Anakin Skywalker"/>
                    <div class="card-body">
                        <h5 class="card-title">Anakin Skywalker</h5>
                        <p class="card-text">Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever...</p>
                        <a href="https://www.starwars.com/databank/anakin-skywalker" class="btn btn-primary">More</a>
                    </div>
                </div>
            {/* </div> */}

            {/* <div className="container my-3"> */}
                <div class="card" style={{width: '18rem',  padding: 30 }}>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Frevenge-of-the-sith-2000.jpg&q=60" width={250} height={250} class="card-img-top" alt="Obi-Wan Kenobi"/>
                    <div class="card-body">
                        <h5 class="card-title">Obi-Wan Kenobi</h5>
                        <p class="card-text">Darth Vader, Obi-Wan Kenobi, Boba Fett and pop culture phenomenon Grogu—or as he has been dubbed,...</p>
                        <a href="https://en.wikipedia.org/wiki/Obi-Wan_Kenobi_(TV_series)" class="btn btn-primary">More</a>
                    </div>
                </div>
            {/* </div> */}
            
            {/* <div className="container my-3"> */}
                <div class="card" style={{width: '18rem',  padding: 30 }}>
                    <img src="https://nationaltoday.com/wp-content/uploads/2022/08/Mark-Hamill-Birthday.jpg" width={250} height={250} class="card-img-top" alt="Mark Hamill"/>
                    <div class="card-body">
                        <h5 class="card-title">Mark Hamill</h5>
                        <p class="card-text">Mark Richard Hamill (born September 25, 1951) is an American actor, voice artist, and writer. </p>
                        <a href="https://en.wikipedia.org/wiki/Mark_Hamill" class="btn btn-primary">More</a>
                    </div>
                </div>
            {/* </div> */}

            {/* <div className="container my-3"> */}
                <div class="card" style={{width: '18rem',  padding: 30 }}>
                    <img src="https://cdn.britannica.com/74/200574-050-CBF1BF4B/George-Lucas-2017.jpg" width={250} height={250} class="card-img-top" alt="George Lucas"/>
                    <div class="card-body">
                        <h5 class="card-title">George Lucas</h5>
                        <p class="card-text">George Walton Lucas Jr.(born May 14, 1944) is an American filmmaker. Lucas is best known for creating the Star Wars...</p>
                        <a href="https://en.wikipedia.org/wiki/George_Lucas" class="btn btn-primary">More</a>
                    </div>
                </div>
            {/* </div> */}

            {/* <div className="container my-3"> */}
                <div class="card" style={{width: '18rem',  padding: 30 }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/GaryKurtz2012.jpg" class="card-img-top" alt="Gary Kurtz" width={250} height={250} />
                    <div class="card-body">
                        <h5 class="card-title">Gary Kurtz</h5>
                        <p class="card-text">Gary Douglas Kurtz (July 27, 1940 – September 23, 2018) was an American film producer whose list of credits includes American Graffiti (1973)...</p>
                        <a href="https://en.wikipedia.org/wiki/Gary_Kurtz" class="btn btn-primary">More</a>
                    </div>
                </div>
            </div>
        </>
    )
}