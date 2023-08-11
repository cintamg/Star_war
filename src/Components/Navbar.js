import React from "react";
// import Link from "react-router-dom";

export default function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg bg-info">
            <div class="container-fluid">
                <a class="navbar-brand" href="/</div>">{props.title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/planets">Planets</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/spaceships">Spaceships</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/people">People</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/vechicles">Vechicles</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}