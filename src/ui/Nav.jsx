import { useState } from "react"
import HamNavigation from "./HamNavigation"
import ShopNavigation from "./shopNavigation"
import SearchBox from "./searchbox"
import Cart from "./Cart"
import HamNavCloseBtn from "./module.ui/nav.hamCloseBtn"
import SearchCloseBtn from "./module.ui/nav.searchCloseBtn"
import ShopNavigationSwitch from "./module.ui/nav.shopCloseBtn"
import CartCloseBtn from "./module.ui/nav.cartCloseBtn";
import { 
    navigationSwitch,
    searchSwitch,
    shopNavigationSwitch,
    cartSwitch
} from "../data&functions/switch"


import style from "./css/nav.module.css";



const Navigation = () => {

    const [ hamDisplay, setHamDisplay ] = useState ( 'd-none' ); 
    const [ hamAnimation, setHamAnimation ] = useState( 'slideUp' );
    // const [ shopSwitch, setShopSwitch ] = useState ( 0 );
    // const [ cartSwitch, setCartSwitch ] = useState ( 0 );
    const [ searchDisplay, setSearchDisplay ] = useState( 'd-none' );
    const [ searchAnimation, setSearchAnimation ] = useState( 'slideUp' );
    const [ cartDisplay, setCartDisplay ] = useState("d-none");
    const [ cartAnimation, setCartAnimation ] = useState('slideUp');
    const [ shopDisplay, setShopDisplay ] = useState( 'd-none' ) ;
    const [ shopAnimation, setShopAnimation ] = useState ('slideUp')
    const [ shopCloseValidation, setShopCloseValidation ] = useState( 0 );  


    const hamStateObj = { hamDisplay, setHamDisplay, hamAnimation, setHamAnimation}; 
    const searchStateObj = { searchDisplay, setSearchDisplay, searchAnimation, setSearchAnimation };
    // const shopStateObj = { shopDisplay, setShopDisplay, shopAnimation, setShopAnimation, shopCloseValidatoin }
    // const cartStateObj = { cartDisplay, setCartDisplay}

    /*
    display={[shopDisplay, setShopDisplay]} 
    animation ={[shopAnimation, setShopAnimation]} 
    shopCloseValidation = {shopCloseValidatoin}
    */
    const shopProps = {
        display: [shopDisplay, setShopDisplay],
        animation : [shopAnimation, setShopAnimation],
        shopCloseValidation :shopCloseValidation
    }

    const hamNavProps = {
        display : [hamDisplay, setHamDisplay],
        animation : [hamAnimation, setHamAnimation]
    }
    
    const cartProps = {
        display : [cartDisplay, setCartDisplay],
        // animation : [cartAnimation, setCartAnimation]
    }

    const searchProps = {
        display : [searchDisplay, setSearchDisplay],
        animation : [searchAnimation, setSearchAnimation]
    }
    

    return (
        <>
            <nav className={"bound-navigation flex flex-s-b flex-align-center " + style.nav}>

                <div className = "flex" key={1}>

                    {/* Hambar icon */}
                    <img 
                        src="/images/hambar.png" 
                        alt="" height="30" 
                        width="30" 
                        className={"cursorPointer " + style.ham_button }
                        onClick = { () => { 
                            navigationSwitch( 
                                [ hamDisplay, setHamDisplay ],  
                                [ hamAnimation, setHamAnimation ] 
                            ) 
                        } } 
                    />

                    {/* shop button */}
                    <div onClick = { 
                        () => { 
                            shopNavigationSwitch( 
                                [ shopDisplay, setShopDisplay ], 
                                [ shopAnimation, setShopAnimation ] 
                            ) 
                            setShopCloseValidation(Date.now);
                        } 
                            
                        } 
                        className = "shop-btn flex cursorPointer" 
                    >
                        SHOP 
                        <img className={ style.shop_btn_image } src = "/images/icons/arrowdown.png" alt = "" height = "20" width = "20"/>
                    </div>

                </div>

                <div key={2}>
                    <a title = "Home Page" className = {style.navLogo} href = "/"> Knigi </a>
                </div>


                <div className = "flex flex-s-b" key={3}>
                    {/* user btn: click to see full user information */}
                    <div className={style.userBtn}>
                        <a href="/userDetails">Username</a>
                    </div>

                    {/* <!-- search icon  --> */}
                    <div className = {style.searchIcon + " cursorPointer"}>
                        <img 
                            src = "/images/icons/search.png" 
                            onClick = { 
                                () => { 
                                    searchSwitch( 
                                        [ searchDisplay, setSearchDisplay ],  
                                        [ searchAnimation, setSearchAnimation ] 
                                    ) 
                                }  
                            } 
                            alt = "search anything" 
                            height = "20" 
                            width = "20"
                        />
                    </div>

                    {/* <div className="cursorPointer" onClick = { () => { clickHandler ( cartSwitch , setCartSwitch ) }}>CART</div> */}
                    <div 
                        className = "cursorPointer" 
                        onClick = { ( ) => { 
                            cartSwitch( 
                                [ cartDisplay, setCartDisplay ],  
                                [ cartAnimation, setCartAnimation ] 
                                )  
                            }
                        }  
                    id = "cart-open">

                        <img className = {style.cartIcon} src = "/images/icons/cart.png" alt ="Shopping Cart" height ="20" width ="20"/>
                    </div>
                </div>
            </nav>

            {/* HIDDEN COMPONENTS, WILL BE RENDERED BASED ON CONDITION */}
            <HamNavigation hamNavPropsObj = {{hamNavProps}} />
            <ShopNavigation shopPropsObj = {{shopProps}} />
            <SearchBox searchPropsObj = { {searchProps} } />
            <Cart cartPropsObj={{cartProps}} />

        </>
    )
}

export default Navigation;