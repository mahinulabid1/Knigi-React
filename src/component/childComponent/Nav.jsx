import {useState} from "react"

import HamNavigation from "./HamNavigation"
import ShopNavigation from "./shopNavigation"
import SearchBox from "./searchbox"
import Cart from "./Cart"



const Navigation = () => {

    const [ hamSwitch, setHamSwitch ] = useState ( 0 ); //0 = close navigation , 1 = open ham navigation
    const [ shopSwitch, setShopSwitch ] = useState ( 0 );
    const [ cartSwitch, setCartSwitch ] = useState ( 0 );
    const [ searchSwitch, setSearchSwitch ] = useState( 0 );

    const clickHandler = ( target , setResponse) => {
        // alert("handler working")
        /*
            Description:
            =============
            This click handler sends a small response to another component 
            named: "HamNavigation" in another file: "HamNavigation.jsx"

            It simply says button clicked and then reset its value so that
            it can send the same signal again.
        */
        if ( target === 0 ) {
            setResponse( 1 );

            setTimeout ( () => {
                setResponse ( 0 );
            } , 300 )
            
        }
    }

    return (
        <>
            <nav>

                <div className = "flex flex-align-center">

                    <div className = "dekstop-ham-container">
                        <button onClick = { () => { clickHandler ( hamSwitch , setHamSwitch ) } } className = "dekstop-ham-relative" style = { { background : "none", border : "none", cursor : "pointer" } } >
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </div>

                    <div onClick = { () => { clickHandler ( shopSwitch, setShopSwitch ) } } className = "shop-btn flex flex-align-center" >
                        SHOP 
                        <img src = "images/icons/arrowdown.png" alt = "" height = "20" width = "20"/>
                    </div>

                </div>

                <div>
                    <a title = "Home Page" className = "nav-logo" href = "index.php"> Knigi </a>
                </div>

                {/* ./app/img/icons/search.png */}
                <div className = "flex flex-s-b flex-align-center" >
                    {/* <!-- search icon className --> */}
                    <div className = "search-icon">
                        <img src = "/images/icons/search.png" onClick = { () => { clickHandler ( searchSwitch , setSearchSwitch ) }} alt = "search anything" height = "20" width = "20"/>
                    </div>

                    <div className = "cart-btn cart-text-responsive" id ="cart-open" onClick = { () => { clickHandler ( cartSwitch , setCartSwitch ) }}>CART</div>
                    <div className = "cart-btn cart-icon" id = "cart-open"><img src = "/images/icons/cart.png" alt ="Shopping Cart" height ="20" width ="20"/></div>
                </div>
            </nav>


            <HamNavigation hamClick = { hamSwitch } />
            <ShopNavigation shopClick = { shopSwitch } />
            <SearchBox searchClick = {searchSwitch}/>
            <Cart cartClick = { cartSwitch } />

        </>
    )
}

export default Navigation;