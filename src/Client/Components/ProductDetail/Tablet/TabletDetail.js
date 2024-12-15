import React from 'react';
import ViewTabletDetail from "./ViewTabletDetail";
import "../productDetail.css"
function ProductDetail() {
    return(
        <div className="container-productDetail">
            <div className="SpecificationLaptop">

                <div>
                    <ViewTabletDetail/>
                </div>
            </div>


        </div>
    )
}

export default ProductDetail;