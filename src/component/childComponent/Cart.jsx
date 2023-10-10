const Cart = () => {
    return (
        <>
            {/* <!-- +++++++ CART HOLDER  ++++++++++++++++++--> */}
            <div className="cart-holder d-none"> {/*<!-- d-none className will be here -->*/}
                <div className="flex flex-s-b search-box">
                    <div>Your Cart <span>$35 USD</span></div>
                    <div id="cart-close"><img src="images/icons/close.png" alt="" height="20" width="20" /></div>
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