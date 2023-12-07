import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from "./shopAll.module.css"
import Navigation from '../../ui/Nav'
import Footer from '../../ui/footer'
import BlogPostSummary from '../../ui/BlogPostSummary'



const RegularPrice = ( data ) => {
    console.log(data);
    return (
        <>
            <span className = { styles.regular_price }> {"$" + data.regularPrice + " USD"} </span>
        </>
    )
}



const PriceWithDisount = ( {dataOne, dataTwo} ) => {

    return (
        <>
            <span className = { styles.regular_price_before_discount } > { "$" + dataOne + " USD" } </span>
            <span className = { styles.discounted_price } > { "$" + dataTwo + " USD" } </span> 
        </>
    )
}



const ShopItem = ( {data} ) => {
    /*
    Important Message for learning purpose
    =======================================
    -why did I create this seperate component?
    1. Sending request using AXIOS is asyncronous.
    2. Getting data from API takes time.
    3. If the component gets rendered before API-data-fetching completes,
       then it will thorw error since I'm trying to render a data that's undefined
    4. This component will only render if API-data-fetching process completes.
    */


    return (
        <>

            { data.map( ( cur,index ) => {

                return(
                    <a href = { "/shopItemDetails/" + cur._id } className = { styles.product_link } key = { index.toString() } >

                        < div className = { styles.image_grey_box } >
                            <img className = "center-middle" src = { cur.productImage } alt = "" />
                        </div>

                        <div className = { styles.product_text }>
                            <p className = { styles.product_name }> { cur.productTitle } </p>

                            <p className = { styles.product_price }>
                                { 
                                    cur.productPrice.discountedPrice === undefined ? 
                                    <RegularPrice data={cur.productPrice.regularPrice} /> 
                                    : 
                                    <PriceWithDisount dataOne = {cur.productPrice.regularPriceBeforeDiscount} dataTwo = { cur.productPrice.discountedPrice } />
                                }
                            </p>
                        </div>
                    </a>
                )

            }) } {/* Ending of { } */}


        </>
    ) 
}







const ShopAll = ( ) => {

    const [data, setData] = useState(undefined);
    useEffect( ( ) => {
        axios.get('http://localhost:8000/api/v1/shoplist?limit=20')
        .then((result) => {
            // result.data contains fetched information from Database
            console.log(result.data)
            setData(result.data);
           
        })
    }, [])

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

            <section className = {styles.booksSection}>

                <div className = {styles.categoryNavigation + " flex flex-s-b"}>
                    <div className = "books-nav-item">WOVEN GOODS</div>
                    <div className = "books-nav-item">
                        <span className = "individual-btn category-activated">INDIVIDUAL</span> 
                    </div>
                </div>

                <div className ={"flex flex-wrap flex-s-b bound-navigation " + styles.listContainer} >

                    { data !== undefined ? <ShopItem data={data}/> : console.log("Data hasn't arrived yet") }

                </div>

            </section>

            <BlogPostSummary />
            <Footer />
        </>
    )
}

export default ShopAll;