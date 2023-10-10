const ShopNavigation = () => {
    return (
        <>
            {/* <!-- SHOP NAVIGATION MENU --> */}
            {/* <!-- START --> */}
            <div className = "book-shop-separate d-none slideUp">
                <div className = "bs-container flex flex-wrap flex-s-a">
                    <a href="./productDescription.php" className = "b-s-item">
                        <div className = "b-s-image-container">
                            <img className = "" src="./app/img/product/individual/product1.jpg" alt=""/>
                                <div>
                                    <p>Woven Issue Four</p>
                                    <p><span className = "discounted-regular-price">$18 USD</span><span className = "discounted-price"> $9 USD</span> <span className = "regular-price"></span></p>
                                </div>
                        </div>

                    </a>

                    <a href="./productDescription.php" className = "b-s-item">
                        <div className = "b-s-image-container">
                            <img className = "" src="./app/img/product/individual/product2.jpg" alt=""/>
                                <div>
                                    <p>Earl of East London</p>
                                    <p><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                                </div>
                        </div>

                    </a>

                    <a href="./productDescription.php" className = "b-s-item">
                        <div className = "b-s-image-container">
                            <img className = "" src="./app/img/product/individual/product3.jpg" alt=""/>
                                <div>
                                    <p>Earl of East London</p>
                                    <p><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $14 USD</span></p>
                                </div>
                        </div>

                    </a>

                    <a href="./productDescription.php" className = "b-s-item">
                        <div className = "b-s-image-container">
                            <img className = "" src="./app/img/product/individual/product4.jpg" alt=""/>
                                <div>
                                    <p>Earl of East London</p>
                                    <p><span className = "discounted-regular-price">$24 USD</span><span className = "discounted-price">$12 USD</span> <span className = "regular-price"> </span></p>
                                </div>
                        </div>

                    </a>

                </div>
                <a className = "shop-btn-shop-all-link transition" href="./shopall.php">SHOP ALL <i style={{paddingLeft : "20px;"}} className = "fas fa-chevron-right"></i></a>



                <div className = "empty-space-close">

                </div>
            </div>
            {/* <!-- SHOP NAVIGATION MENU END --> */}
        </>
    )
}

export default ShopNavigation;