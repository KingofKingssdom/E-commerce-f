import React from 'react';
import ViewTvDetail from "./ViewTvDetail";
import "../productDetail.css"
function ProductDetail() {
    return(
        <div className="container-productDetail">
            <div className="SpecificationLaptop">

                <div>
                    <ViewTvDetail/>
                </div>
            </div>


        </div>
    )
}

export default ProductDetail;