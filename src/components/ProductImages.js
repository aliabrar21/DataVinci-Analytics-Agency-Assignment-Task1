import React from "react";

function ProductImages() {
    return (
        <div className="product-images">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1539110136-manuka-health-honey-1539110125.jpg?crop=0.780xw:0.828xh;0.111xw,0.0867xh&resize=980:*" alt="main honey" className="main-img"/>
            <div className="thumbs">
                <img src="https://m.media-amazon.com/images/I/81ii9Ua6hML._AC_.jpg" alt="thumb1"/>
                <img src="https://i5.walmartimages.com/asr/bd869e33-0cf0-46cb-8c27-dc7026f5e4ec_1.accbb850c37801459ccf8972b68153e4.jpeg" alt="thumb2"/>
                <img src="https://m.media-amazon.com/images/I/716c2yr-AqL._SL1500_.jpg" alt="thumb3"/>
                <img src="https://cdn.sanity.io/images/yg2dvvx6/production/09ec0ee66d89826512444994f62afac3c7d41f3f-2000x1117.jpg" alt="thumb4"/>
            </div>
        </div>
    );
}

export default ProductImages;
