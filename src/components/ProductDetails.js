import React, { useState } from "react";

function ProductDetails() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <section className="product-details">
            <h1>Manuka Honey</h1>
            <p className="umf">UMF™ <b>24+</b></p>
            <p className="mgo">MGO <b>1122+</b></p>

            <button
                className="info-btn"
                onClick={() => setShowInfo(!showInfo)}
            >
                What is UMF and MGO?
            </button>

            {showInfo && (
                <div className="info-popup">
                    <p><b>UMF</b> is the strength and purity rating of Manuka honey.</p>
                    <p>The higher the number, the greater the potency and rarity.</p>
                    <p><b>MGO</b> is the key antibacterial compound in Manuka honey.</p>
                    <p>The higher the number, the stronger the antibacterial strength.</p>
                </div>
            )}

            <p className="description">
                For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey
                is powerfully active, sourced from wild and rugged locations around New Zealand
                and great for almost all uses. It has a full, delicious flavour and your body will love you for it.
            </p>
        </section>
    );
}

export default ProductDetails;
