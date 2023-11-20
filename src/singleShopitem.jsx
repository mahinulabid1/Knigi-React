import Navigation from "./component/childComponent/nav"
import Footer from "./component/childComponent/footer"
import styles from "../public/css/singleShopItem.module.css"

const SingleShopItem = ( ) => {
    return (
        <>
            <Navigation />
            <div className = { "flex flex-wrap bound-navigation flex-s-b " + styles.itemContainer }>

                <div>  {/* flex item 1 */}
                    
                    <h2 className = { styles.content_header }>Woven Issue Four</h2>
                        
                    <p className = { styles.price_tag }>$18 USD</p>
                    <p className = { styles.product_content }>
                        Issue 4 explores the paradoxes at play in our world: death and rebirth, old and new, past and 
                        future. We take on a mindset of endless growth and the many catalysts we encounter in the 
                        creative process: setbacks, loss, imagination, and serendipity. From poetry to plants, this 
                        issue looks intently into the face of the immeasurable forces that propel us forward, and 
                        meditates on our role in designing the future. <br/> <br/> From Manly, Australia to Victoria, British 
                        Columbia, from Long Beach, California to Jersey City, New Jersey, we share the stories of
                        nine artists, designers, and entrepreneurs who are holding the tension between the past,
                        present, and future. You’ll meet modern day poet Joekenneth Museau who channelled the loss
                        of his mother to cancer into a guidebook for grief, Julianne Ahn who took up ceramics as
                        a meditation, and photographer Cody Cobb whose solo expeditions take us back in time.
                        We study the cosmology of city planning at Arcosanti, an experimental architecture 
                        site in the Arizona desert, and glimpse the mythical symbols of Antelope Canyon through 
                        the eyes of Navajo guides.
                    </p>

                    <div className = { styles.cart_option }>
                        <p className = { styles.cart_note }>*US orders only</p>
                        <div className="cart-function">
                            <a className = { styles.add_cartBtn + " transition" } href="#">ADD TO CART</a>
                            <div className = { styles.numberFunction }><span className = { styles.plus }>+</span> <span className = { styles.minus }>1</span>  <span className = { styles.minus }>-</span></div>
                        </div>
                    </div>

                    
                </div>

                <div>       {/* flex item 2*/}
                    <div className = { styles.grey_box }>
                        <img src="images/book1.jpg" /> 
                    </div>
                    
                </div>

            </div>

            <section>
                <div className={ styles.specs_of_books + ' flex flex-wrap flex-s-b bound-navigation' }>

                    <div className = { styles.specs_item }>
                        <h3 className = { styles.specs_item_header }>SPECS</h3>
                        <p className = { styles.specs_content }>144 pages, offset-printed and perfect bound, full color on uncoated and coated paper. Printed in Germany.</p>
                        <p className = { styles.specs_content }>Dimensions: 8.5 x 11.3 in</p>
                    </div>
                    <div className={ styles.specs_item }>
                        <h3 className={ styles.specs_item_header }>SHIPPING &amp; HANDLING</h3>
                        <p className={ styles.specs_content }>Shipping &amp; handling is added at checkout. For more information please visit our <a href="./FAQ.php" className={ styles.info_link }>FAQ</a> and <a href="./termsandCondition.php" className={ styles.info_link }>Terms &amp; Conditions.</a></p>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default SingleShopItem;