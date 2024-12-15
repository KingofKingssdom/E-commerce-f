import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Slider(){
    return(
        <div>
            <div className="block-sliding-home">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="image/sliding-top-home1.png" className="d-block " alt="sliding-1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/sliding-top-home2.png" className="d-block " alt="sliding-2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/sliding-top-home3.png" className="d-block " alt="sliding-3"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/sliding-top-home4.png" className="d-block " alt="sliding-4"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/sliding-top-home5.png" className="d-block " alt="sliding-5"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/sliding-top-home6.png" className="d-block " alt="sliding-6"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/sliding-top-home7.png" className="d-block " alt="sliding-7"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Slider;