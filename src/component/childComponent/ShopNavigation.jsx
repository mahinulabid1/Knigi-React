import { useState, useEffect } from "react";
import { shopData, closeFunc } from  "./dataAndFunctions";

import styles from "../../../public/css/cssComponent/shopNavigation.module.css";

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


    return (
        <>
            {/* <!-- SHOP NAVIGATION MENU --> */}
            <div className={displayShop + " " + animation + " " + styles.book_shop_separate } >

                <div className={ "flex flex-wrap flex-s-a " + styles.container }>
                    {
                        shopData.map( ( cur ) => {
                            return (
                                <a href = {cur.link} className="b-s-item">

                                    <div className={styles.image_container}>

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

                <a className={"transition " + styles.shop_all_btn} href="./shopall.php">SHOP ALL <i style={{ paddingLeft: "20px;" }} className="fas fa-chevron-right"></i></a>


                <div
                    className={styles.closeOnHover}
                    onMouseOver={
                        () => {
                            //preventing auto close
                            let Now = Date.now();
                            let diff = Now - time;

                            if (diff > 1000) { //if hovering is not more than one second than do not close 
                                closeFunc( setDisplayShop, setAnimation );
                            }

                        }
                    }
                ></div>

            </div>

        </>
    )
}

export default ShopNavigation;