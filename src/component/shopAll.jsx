import styles from "../../public/css/shopAll.module.css"
import Navigation from './childComponent/nav'


const ShopAll = ( ) => {
    return (
        <>  
            <Navigation />
            <header className={styles.header}>
                <div className = {"hero-text-container " + styles.heroTextContainer}>
                    <h1 className = "hero-header">future - past</h1>
                    <a className = "hero-link transition" href="./productDescription.php">CHECK IT OUT</a>
                </div>
                <div className = {styles.heroTextCorner + " " + styles.wholeSaleText} >WHOLE SALE AVAILABLE</div>
                <div className = {styles.heroTextCorner} >SHIPS WORLDWIDE</div>
            </header>

            <section className = {styles.booksContainer}>

                <div className = {styles.categoryNavigation + " flex flex-s-b"}>
                    <div className = "books-nav-item">WOVEN GOODS</div>
                    <div className = "books-nav-item">
                        <span className = "individual-btn category-activated">INDIVIDUAL</span> 
                        / 
                        <span className = "wholesale-btn">WHOLESALE</span></div>
                </div>

                <div className = "books-item-flex-container individual">

                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/individual/product1.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Woven Issue Four – Seconds Sale</p>
                            <p className = "product-price"><span className = "discounted-regular-price">$18 USD</span><span className = "discounted-price"> $9 USD</span> <span className = "regular-price"></span></p>
                        </div>
                    </a>

                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/individual/product2.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                        </div>
                    </a>

                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/individual/product3.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $14 USD</span></p>
                        </div>
                    </a>

                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/individual/product4.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price">$24 USD</span><span className = "discounted-price">$12 USD</span> <span className = "regular-price"> </span></p>
                        </div>
                    </a>

                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/individual/product5.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span> <span className = "discounted-price"></span><span className = "regular-price"> $44 USD</span></p>
                        </div>
                    </a>
                    
                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/individual/product6.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $22 USD</span></p>
                        </div>
                    </a>
                </div>


                <div className = "books-item-flex-container wholesale">
                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/wholesale/stack1.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                        </div>
                    </a>
                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/wholesale/stack2.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                        </div>
                    </a>
                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/wholesale/stack3.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                        </div>
                    </a>
                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/wholesale/stack4.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                        </div>
                    </a>
                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/wholesale/stack5.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                        </div>
                    </a>
                    <a href="./productDescription.php" className = "product-item">
                        <div className = "product-image-container">
                            <img className = "center-middle" src="./app/img/product/wholesale/stack6.jpg" alt=""/>
                        </div>
                        <div className = "product-text">
                            <p className = "product-name">Earl of East London – Strand</p>
                            <p className = "product-price"><span className = "discounted-regular-price"></span><span className = "discounted-price"></span> <span className = "regular-price"> $24 USD</span></p>
                        </div>
                    </a>
                </div>

            </section>
        </>
    )
}

export default ShopAll;