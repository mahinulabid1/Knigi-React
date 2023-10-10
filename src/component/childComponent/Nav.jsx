import HamNavigation from "./HamNavigation";
import ShopNavigation from "./shopNavigation"
import SearchBox from "./searchbox"
import Cart from "./Cart"

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="flex flex-align-center">
                    <div className="dekstop-ham-container">
                        <div className="dekstop-ham-relative">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                    <div className="shop-btn flex flex-align-center">SHOP <img src="images/icons/arrowdown.png" alt="" height="20" width="20"/></div>
                </div>

                <div>
                    <a title="Home Page" className="nav-logo" href="index.php">Knigi</a>
                </div>
                {/* ./app/img/icons/search.png */}
                <div className="flex flex-s-b flex-align-center">
                    {/* <!-- search icon className --> */}
                    <div className = "search-icon"><img src = "/images/icons/search.png" alt = "search anything" height = "20" width = "20"/></div>
                    <div className = "cart-btn cart-text-responsive" id ="cart-open">CART</div>
                    <div className = "cart-btn cart-icon" id = "cart-open"><img src = "/images/icons/cart.png" alt ="Shopping Cart" height ="20" width ="20"/></div>
                </div>
            </nav>


            <HamNavigation/>
            <ShopNavigation/>
            <SearchBox />
            <Cart />

        </>
    )
}

export default Navigation;