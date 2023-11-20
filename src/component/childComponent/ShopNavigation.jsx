import { useState, useEffect } from "react";
import { shopData, closeFunc } from  "./dataAndFunctions";
import axios from "axios"
import styles from "../../../public/css/cssComponent/shopNavigation.module.css";
import { useParams } from "react-router-dom";

const ShopNavigation = ({ shopClick }) => {

    const [displayShop, setDisplayShop] = useState("d-none");
    const [animation, setAnimation] = useState('slideUp');

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/v1/shoplist?limit=4')
        .then( ( res ) => {
            setData(res.data);
        })
    }, [])          // [] if it is empty, it will execute the firsttime it mounts


    // auto close prevent on hover
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (shopClick === 1) {
            setAnimation("slideDown");
            setDisplayShop("");
            setTime(Date.now());
        }
    }, [shopClick]);    // when shopClick component changes it will call useEffect()
    
    


    return (
        <>
            {/* <!-- SHOP NAVIGATION MENU --> */}
            <div className={displayShop + " " + animation + " " + styles.book_shop_separate } >

                <div className={ "flex flex-wrap flex-s-a " + styles.container }>
                    {
                        data.map( ( cur, index ) => {
                            return (
                                <a href ={'/shopItemDetails/' + cur._id} className="b-s-item" key={index.toString()}>

                                    <div className={styles.image_container}>

                                        <img className="" src={cur.productImage} alt="" />

                                        <div>
                                            <p>{cur.productTitle}</p>
                                            <p>
                                                <span className = "discounted-regular-price" ><s> {cur.productPrice.regularPriceBeforeDiscount !== undefined ? "$" + cur.productPrice.regularPriceBeforeDiscount : ""  } </s></span>
                                                <span className = "discounted-price" > {cur.productPrice.discountedPrice !== undefined ? "$" + cur.productPrice.discountedPrice : ""} </span> 
                                                <span className = "regular-price" > {cur.productPrice.regularPrice !== undefined ? "$" + cur.productPrice.regularPrice : ""} </span>
                                            </p>
                                        </div>

                                    </div>
                                </a>

                            )
                        })
                    }

                </div>

                <a className={"transition " + styles.shop_all_btn} href="./shopall.php">SHOP ALL <i style={{ paddingLeft: "20px" }} className="fas fa-chevron-right"></i></a>


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