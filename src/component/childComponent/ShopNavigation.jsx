import { useState , useEffect } from "react";


const ShopNavigation = ( { shopClick } ) => {

    const [ displayShop, setDisplayShop ] = useState ("d-none");
    const [ animation, setAnimation ] = useState ('slideUp');  
    
    // auto close prevent on hover
    const [ time, setTime ] = useState (0);


    useEffect( () => {
        if ( shopClick === 1 ) {
            setAnimation( "slideDown" );
            setDisplayShop( "" );
            setTime(Date.now());
        }
    }, [ shopClick ]);

    return (
        <>
            {/* <!-- SHOP NAVIGATION MENU --> */}
            {/* <!-- START --> */}
            <div className = { displayShop + " book-shop-separate " + animation } >

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



                <div 
                    className = "empty-space-close" 
                    onMouseOver = {
                            ( ) => { 
                                //preventing auto close
                                let Now = Date.now();
                                let diff = Now - time;

                                if( diff > 1000 ) { //if hovering is not more than one second than do not close 
                                    setTimeout( ( ) => {
                                        setDisplayShop ( "d-none" ); 
                                    }, 370 );
                                    
                                    setAnimation("slideUp"); 
                                }

                                
                            }
                        } 
                >
                

                </div>
            </div>
            {/* <!-- SHOP NAVIGATION MENU END --> */}
        </>
    )
}

export default ShopNavigation;