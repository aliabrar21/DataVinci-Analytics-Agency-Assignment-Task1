import React from "react";

function PaymentOptions() {
    return (
        <section className="payment-options">
            <h3>Payment Options</h3>
            <div className="options">
                <button className="active">One-time Purchase $55.88</button>
                <button>Subscribe & Save 20% $44.70</button>
            </div>
            <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <button className="add-to-cart">ADD TO CART</button>
        </section>
    );
}

export default PaymentOptions;
