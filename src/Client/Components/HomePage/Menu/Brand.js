import React from "react";

function Brand(props){
    return(
        <div>
            <div className="container-brand">
                <h5>{props.title}</h5>
                <p><a href="">{props.brand1}</a></p>
                <p><a href="">{props.brand2}</a></p>
                <p><a href="">{props.brand3}</a></p>
                <p><a href="">{props.brand4}</a></p>
                <p><a href="">{props.brand5}</a></p>
                <p><a href="">{props.brand6}</a></p>
            </div>
        </div>
    )
}
export default Brand;