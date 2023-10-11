import {useState, useEffect} from "react";

const Cart = ( { cartClick } ) => {
    const [ displayCart, setDisplayCart ] = useState("d-none");

    useEffect(() => {
        if ( cartClick === 1 ) {
            setDisplayCart ( "" );
        }
    }, [ cartClick ]);

    return (//"cart-holder d-none"
        <>
            {/*  CART HOLDER  */}
            {/*<!-- d-none className will be here -->*/}
            <div className= {"cart-holder " + displayCart } > 
                <div className="flex flex-s-b search-box">
                    <div>Your Cart <span>$35 USD</span></div>
                    <div id="cart-close" onClick={()=>{setDisplayCart("d-none")}}><img src="images/icons/close.png" alt="" height="20" width="20" /></div>
                </div>

                <div className="items-in-cart-container">
                    {/* <!-- first static item in the cart --> */}
                    <div>
                        <div>Woven Issue 4</div>
                        <div>$ 20 USD</div>
                        <div className="flex flex-align-center">
                            <img src="images/icons/delete.png" alt="delete from the queue" height="20" width="20" />
                        </div>
                    </div>

                    {/* <!-- second static item in the cart --> */}
                    <div>
                        <div>As you like it</div>
                        <div>$ 15 USD</div>
                        <div className="flex flex-align-center">
                            <img src="images/icons/delete.png" alt="delete from the queue" height="20" width="20" />
                        </div>
                    </div>

                </div>

                <div className="proceed-to-checkout"><a href="#">CHECKOUT</a></div>

            </div>
        </>
    )
}


export default Cart;