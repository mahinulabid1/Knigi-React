import { useState, useEffect } from "react";


const ShopNavigation = ({ shopClick }) => {

    const [displayShop, setDisplayShop] = useState("d-none");
    const [animation, setAnimation] = useState('slideUp');


    // auto close prevent on hover
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (shopClick === 1) {
            setAnimation("slideDown");
            setDisplayShop("");
            setTime(Date.now());
        }
    }, [shopClick]);


    const shopData = [
        {   
            link: "./productDescription",
            image: "images/product/individual/product1.jpg",
            title: "Knigi Issue Four",
            discountedRegularPrice: "$18 USD",
            discountedPrice: "$9 USD",
            regularPrice: ""
        },

        {
            link: "./productDescription",
            image: "images/product/individual/product2.jpg",
            title: "Earl of East London",
            discountedRegularPrice: "",
            discountedPrice: "",
            regularPrice: "$24 USD"
        },

        {
            link: "./productDescription",
            image: "images/product/individual/product3.jpg",
            title: "Earl of East London",
            discountedRegularPrice: "",
            discountedPrice: "",
            regularPrice: "$14 USD"
        },

        {
            link: "./productDescription",
            image: "images/product/individual/product3.jpg",
            title: "Earl of East London",
            discountedRegularPrice: "$24 USD",
            discountedPrice: "$12 USD",
            regularPrice: ""
        },
    ]






    return (
        <>
            {/* <!-- SHOP NAVIGATION MENU --> */}
            <div className={displayShop + " book-shop-separate " + animation} >

                <div className="bs-container flex flex-wrap flex-s-a">
                    {
                        shopData.map( ( cur ) => {
                            return (
                                <a href = {cur.link} className="b-s-item">

                                    <div className="b-s-image-container">

                                        <img className="" src={cur.image} alt="" />

                                        <div>
                                            <p>{cur.title}</p>
                                            <p>
                                                <span className = "discounted-regular-price" > { cur.discountedRegularPrice } </span>
                                                <span className = "discounted-price" > { cur.discountedPrice } </span> 
                                                <span className = "regular-price" > { cur.regularPrice } </span>
                                            </p>
                                        </div>

                                    </div>
                                </a>

                            )
                        })
                    }

                </div>

                <a className="shop-btn-shop-all-link transition" href="./shopall.php">SHOP ALL <i style={{ paddingLeft: "20px;" }} className="fas fa-chevron-right"></i></a>


                <div
                    className="empty-space-close"
                    onMouseOver={
                        () => {
                            //preventing auto close
                            let Now = Date.now();
                            let diff = Now - time;

                            if (diff > 1000) { //if hovering is not more than one second than do not close 
                                setTimeout(() => {
                                    setDisplayShop("d-none");
                                }, 370);

                                setAnimation("slideUp");
                            }

                        }
                    }
                ></div>

            </div>

        </>
    )
}

export default ShopNavigation;