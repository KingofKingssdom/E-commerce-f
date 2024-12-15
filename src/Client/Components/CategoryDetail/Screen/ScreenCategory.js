import React, { useState } from "react";
import "../CategoryDetail.css";
import SliderDetail from "../SliderDetail";
import ListBrand from "../ListBrand";
import ViewScreen from "./ViewScreen";

function ScreenCategory() {
    const [selectedBrandId, setSelectedBrandId] = useState(null);


    const handleBrandClick = (brandId) => {
        setSelectedBrandId(brandId);
    };

    return (
        <div>
            <div className="container-category">
                <SliderDetail />
                <ListBrand
                    logoBrand1="./image/AppleBrandLogo.png"
                    logoBrand2="./image/SamsungBrandLogo.png"
                    logoBrand3="./image/OppoBrandLogo.png"
                    logoBrand4="./image/XiaomiBrandLogo.png"
                    logoBrand5="./image/VivoBrandLogo.png"
                    logoBrand6="./image/RealmeBrandLogo.png"
                    logoBrand7="./image/AsusBrandLogo.png"
                    logoBrand8="./image/SonyBrandLogo.png"
                    onBrandClick={handleBrandClick}
                />
                <ViewScreen brandId={selectedBrandId} />
            </div>
        </div>
    );
}

export default ScreenCategory;