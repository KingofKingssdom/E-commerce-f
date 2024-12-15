import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function SliderDetail () {
    return(
        <div>
            <div id="carouselExampleRide" className="carousel slide container-cal" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./image/SlideDetail1.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./image/SlideDetail2.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./image/SlideDetail3.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default SliderDetail;