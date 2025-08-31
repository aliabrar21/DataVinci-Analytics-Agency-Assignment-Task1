import React, { useMemo, useState } from "react";
import "./ProductPage.css";

export default function ProductPage() {
    const [size, setSize] = useState("125g | 4.4oz");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("once");
    const [bundleQty, setBundleQty] = useState({ a: 1, b: 1 });
    const [showInfo, setShowInfo] = useState(false);

    const price = useMemo(() => 55.88, []);
    const subPrice = useMemo(() => 44.7, []);

    const sizes = [
        { label: "125g | 4.4oz", img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600" },
        { label: "250g | 8.8oz", img: "https://images.unsplash.com/photo-1505575972945-280f42b2ab9c?w=600" },
        { label: "500g | 17.6oz", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600" },
        { label: "Capsules", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600" },
        { label: "Gift Set", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600" }
    ];

    return (
        <div className="page">
            <Header />

            <main className="container">
                {/* LEFT – gallery */}
                <section className="gallery">
                    <Hero />
                    <ThumbGrid />
                </section>

                {/* RIGHT – details */}
                <section className="details">
                    <h1 className="title">Manuka Honey</h1>
                    <div className="metrics">
                        <div><span className="metricLabel">UMF</span> <span className="metricValue">24+</span></div>
                        <div><span className="metricLabel">MGO</span> <span className="metricValue">1122+</span></div>
                    </div>

                    <button className="infoPill" onClick={() => setShowInfo(true)}>
                        What is UMF and MGO?
                    </button>

                    <Badges />

                    <p className="blurb">
                        <strong>The Optimiser</strong><br />
                        For those times in life when quality comes first. This pure UMF® 24+ Manuka Honey is
                        powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and
                        great for almost all uses. It has a full, delicious flavour and your body will love you for it.
                    </p>

                    {/* Size selector */}
                    <div className="section">
                        <div className="sectionHead">
                            <span className="sectionTitle">SIZE (SELECT ONE)</span>
                            <span className="variant">Variant: {size}</span>
                        </div>
                        <div className="sizeRow">
                            {sizes.map((s) => (
                                <button
                                    key={s.label}
                                    className={"sizeCard" + (size === s.label ? " selected" : "")}
                                    onClick={() => setSize(s.label)}
                                    title={s.label}
                                >
                                    <div className="sizeImg" style={{ backgroundImage: `url(${s.img})` }} />
                                    <div className="sizeLabel">{s.label}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Payment options */}
                    <div className="section">
                        <div className="sectionTitle">PAYMENT OPTIONS (SELECT ONE)</div>
                        <div className="payRow">
                            <PayOption
                                active={payment === "once"}
                                onClick={() => setPayment("once")}
                                title="One-time purchase"
                                price={`$${price.toFixed(2)} USD`}
                            />
                            <PayOption
                                active={payment === "sub"}
                                onClick={() => setPayment("sub")}
                                title="Subscribe & save 20%"
                                price={`$${subPrice.toFixed(2)} USD`}
                            />
                        </div>
                        <div className="afterpay">
                            or 4 interest-free payments of ${(price/4).toFixed(2)} with <span className="brand">Afterpay</span>
                        </div>
                    </div>

                    {/* Quantity + ATC */}
                    <div className="addRow">
                        <Quantity value={quantity} onChange={setQuantity} />
                        <button className="cta">ADD TO CART</button>
                    </div>

                    {/* Bundle */}
                    <div className="bundle">
                        <div className="bundleHead">
                            <span>Beauty Bundle</span>
                            <span className="saveTag">
                <s>$478.75 USD</s> <b>$430.88 USD</b> <em>Save 10%</em>
              </span>
                        </div>
                        <div className="bundleItems">
                            <BundleItem title="UMF 20+" sub="250g" value={bundleQty.a}
                                        onChange={(v)=>setBundleQty(q=>({...q,a:v}))} />
                            <span className="plus">+</span>
                            <BundleItem title="UMF 24+" sub="250g" value={bundleQty.b}
                                        onChange={(v)=>setBundleQty(q=>({...q,b:v}))} />
                            <span className="plus">+</span>
                            <div className="wood">Wooden Spoon</div>
                        </div>
                        <button className="bundleCta">ADD BUNDLE TO CART</button>
                    </div>

                    <InfoRows />

                    <div className="scales">
                        <Scale title="UMF™ SCALE"
                               ticks={["10+","15+","20+","24+","26+","28+","30+"]} activeIndex={3} />
                        <Scale title="TASTE PROFILE"
                               ticks={["Clean & Intense","","","","","","Bold & Intense"]} activeIndex={5} isTaste />
                    </div>
                </section>
            </main>

            <Footer />

            {showInfo && <InfoModal onClose={()=>setShowInfo(false)} />}
        </div>
    );
}

/* Subcomponents */
function Header(){
    return (
        <header className="header">
            <button className="hamburger" aria-label="menu">☰</button>
            <div className="brand">NEW ZEALAND HONEY CO.</div>
            <nav className="nav">
                <a href="#">Shop</a>
                <a href="#">Explore</a>
                <a href="#">About</a>
                <a href="#">Rewards</a>
                <a href="#">Contact</a>
            </nav>
            <div className="actions">
                <button aria-label="search">🔍</button>
                <button aria-label="account">👤</button>
                <button aria-label="cart" className="cart">🛒<span className="dot">0</span></button>
            </div>
        </header>
    );
}

function Footer(){
    return (
        <footer className="footer">
            © {new Date().getFullYear()} New Zealand Honey Co. • Free delivery on orders over $30
        </footer>
    );
}

function Hero(){
    return (
        <div className="hero">
            <div className="swipe left">‹</div>
            <img
                alt="Manuka Honey Jar"
                className="heroImg"
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?w=1200"
            />
            <div className="swipe right">›</div>
        </div>
    );
}

function ThumbGrid(){
    const thumbs = [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600",
        "https://images.unsplash.com/photo-1496924810813-215a3a33a34c?w=600",
        "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600",
        "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600",
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600",
        "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=600",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600"
    ];
    return (
        <div className="thumbGrid">
            {thumbs.map((t, i) => (
                <div key={i} className="thumb" style={{ backgroundImage: `url(${t})` }} />
            ))}
        </div>
    );
}

function Badges(){
    return (
        <div className="badges">
            {["UMF Certified","Non-GMO","Tested & Tracked","Glyphosate Free","NZ Made","MGO Rated"]
                .map(b => <span key={b} className="badge">{b}</span>)}
        </div>
    );
}

function PayOption({ active, onClick, title, price }){
    return (
        <button className={"payCard" + (active ? " active" : "") } onClick={onClick}>
            <div className="payTitle">{title}</div>
            <div className="payPrice">{price}</div>
        </button>
    );
}

function Quantity({ value, onChange }){
    return (
        <div className="qty">
            <button onClick={()=>onChange(Math.max(1, value-1))}>−</button>
            <span>{value}</span>
            <button onClick={()=>onChange(value+1)}>+</button>
        </div>
    );
}

function BundleItem({ title, sub, value, onChange }){
    return (
        <div className="bundleItem">
            <div className="jar" />
            <div className="bundleMeta">
                <div className="bundleTitle">{title}</div>
                <div className="bundleSub">{sub}</div>
            </div>
            <div className="bundleQty">
                <button onClick={()=>onChange(Math.max(1, value-1))}>−</button>
                <span>{value}</span>
                <button onClick={()=>onChange(value+1)}>+</button>
            </div>
        </div>
    );
}

function InfoRows(){
    return (
        <div className="infoRows">
            <Row left="DELIVERY" right="FREE DELIVERY ON ORDERS OVER $30" />
            <Row left="ESTIMATED DELIVERY DATE" right="Jun 9 – Jun 13" />
            <Row left="AFTER PAY" right={<span>or 4 interest-free payments of $13.97 with <span className="brand">Afterpay</span></span>} />
        </div>
    );
}
function Row({ left, right }){
    return (
        <div className="row">
            <div className="left">{left}</div>
            <div className="right">{right}</div>
        </div>
    );
}

function Scale({ title, ticks, activeIndex, isTaste }){
    return (
        <div className="scale">
            <div className="scaleTitle">{title}</div>
            <div className={"bar" + (isTaste ? " taste" : "") }>
                {ticks.map((t, i) => (
                    <span key={i} className={"tick" + (i === activeIndex ? " active" : "")}>{t}</span>
                ))}
            </div>
        </div>
    );
}

function InfoModal({ onClose }) {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modalContent" onClick={(e)=>e.stopPropagation()}>
                <h3>What is UMF and MGO?</h3>
                <div className="modalBox">
                    <b>UMF</b> is the strength and purity rating of Manuka honey.
                    <div className="legend">
                        {["10+","15+","20+","24+","26+","28+","30+"].map((t,i)=>(
                            <span key={i}>{t}</span>
                        ))}
                    </div>
                    <small>The higher the number, the greater the potency and rarity.</small>
                </div>
                <div className="modalBox">
                    <b>MGO</b> is the key natural compound that gives Manuka honey its antibacterial strength.
                    <div className="legend">
                        {["263+","514+","829+","1122+","1282+","1450+","1620+"].map((t,i)=>(
                            <span key={i}>{t}</span>
                        ))}
                    </div>
                    <small>The higher the number, the higher the antibacterial properties.</small>
                </div>
                <button className="closeBtn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
