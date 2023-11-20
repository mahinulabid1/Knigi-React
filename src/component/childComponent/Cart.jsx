import {useState, useEffect} from "react";
import styles from "../../../public/css/cssComponent/cart.module.css";

const dataInCart = [
    { title : "Kingi Issue 4" , price: "$ 20 USD" },
    { title : "As You Like It ", price : "$ 15 USD"},
    { title : "Programming ", price : "$ 30 USD"}
]


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
            <div className= { styles.cart_holder + " " + displayCart } > 
                <div className="flex flex-s-b search-box">
                    <div className={styles.cartOverview}>Your Cart <span>$35 USD</span></div>
                    <div className={styles.cartCloseBtn} onClick={()=>{setDisplayCart("d-none")}}><img src="images/icons/close.png" alt="" height="20" width="20" /></div>
                </div>

                <div>
                    {/* cart items */}
                    { dataInCart.map( (cur, index ) => {
                        return(
                            <div className={styles.cartItem + " flex flex-align-center flex-s-b"} key={index.toString()}>
                                <div >{cur.title}</div>
                                <div>{cur.price}</div>
                                <div className="flex flex-align-center">
                                    <img src="images/icons/delete.png" alt="delete from the queue" height="20" width="20" />
                                </div>
                            </div>
                        )
                    }) }
                    
                </div>

                <div className="proceed-to-checkout"><a href="#">CHECKOUT</a></div>

            </div>
        </>
    )
}


export default Cart;