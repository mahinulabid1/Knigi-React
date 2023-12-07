import { useState } from "react"
import HamNavigation from "./HamNavigation"
import ShopNavigation from "./shopNavigation"
import SearchBox from "./searchbox"
import Cart from "./Cart"


import style from "./css/nav.module.css";


const Navigation = () => {

    const [ hamSwitch, setHamSwitch ] = useState ( 0 ); //0 = close navigation , 1 = open ham navigation
    const [ shopSwitch, setShopSwitch ] = useState ( 0 );
    const [ cartSwitch, setCartSwitch ] = useState ( 0 );
    const [ searchSwitch, setSearchSwitch ] = useState( 0 );

    const [ cartDisplay, setCartDisplay ] = useState("d-none");
    const [ cartAnimation, setCartAnimation ] = useState('slideUp');

    const clickHandler = ( target , setResponse) => {
        /*
            Description:
            =============
            This click handler sends a small response to another component 
            named: "HamNavigation" in another file: "HamNavigation.jsx"

            It simply says button clicked by setting value to 1 
            and then reset its value so that it can send the same signal again.
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
            <nav className={"bound-navigation flex flex-s-b flex-align-center " + style.nav}>

                <div className = "flex" key={1}>

                    {/* Hambar image/icon */}
                    <img 
                        src="/images/hambar.png" 
                        alt="" height="30" 
                        width="30" 
                        className={"cursorPointer " + style.ham_button }
                        onClick = { () => { clickHandler ( hamSwitch , setHamSwitch ) } }
                    />

                    <div onClick = { () => { clickHandler ( shopSwitch, setShopSwitch ) } } className = "shop-btn flex cursorPointer" >
                        SHOP 
                        <img className={ style.shop_btn_image } src = "/images/icons/arrowdown.png" alt = "" height = "20" width = "20"/>
                    </div>

                </div>

                <div key={2}>
                    <a title = "Home Page" className = {style.navLogo} href = "/"> Knigi </a>
                </div>

                {/* ./app/img/icons/search.png */}
                <div className = "flex flex-s-b" key={3}>
                    {/* user btn: click to see full user information */}
                    <div className={style.userBtn}>
                        <a href="/userDetails">Username</a>
                    </div>

                    {/* <!-- search icon  --> */}
                    <div className = {style.searchIcon + " cursorPointer"}>
                        <img src = "/images/icons/search.png" onClick = { () => { clickHandler ( searchSwitch , setSearchSwitch ) }} alt = "search anything" height = "20" width = "20"/>
                    </div>

                    {/* <div className="cursorPointer" onClick = { () => { clickHandler ( cartSwitch , setCartSwitch ) }}>CART</div> */}
                    <div className="cursorPointer" onClick = { () => { clickHandler ( cartSwitch , setCartSwitch ) }}  id = "cart-open"><img className = {style.cartIcon} src = "/images/icons/cart.png" alt ="Shopping Cart" height ="20" width ="20"/></div>
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