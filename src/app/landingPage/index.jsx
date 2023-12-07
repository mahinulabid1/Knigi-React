import { useState, useEffect} from "react"
import axios from "axios"
import Navigation from "../../ui/Nav"
import Stories from "../stories/stories"
import BlogPostSummary from "../../ui/BlogPostSummary"
import Footer from "../../ui/footer"

import styles from "./index.module.css"




export default function Homepage () {



    return (
        <>  
            < Navigation />


            < header >
                < div className={ styles.header_image_container + " flex flex-cen" } >
                    < img src = "images/headerImg1.jpg" alt = "books" />
                    < img src = "images/headerImg2.jpg" alt = "books" />
                    < img src = "images/headerImg3.jpg" alt = "books" />
                </ div >
        
                < div className = { styles.hero_text_container } >
                    < h1 > Buy Books, Anywhere </ h1 >
                    < a href = "/shopall"> Shop Now </ a >
                </ div >

            </ header >

            < section className = { "flex flex-wrap " } >
                < div className = { styles.about_us_item } >
                    < h1 > design < span > and </ span > travel </ h1 >
                </ div >

                < div className = { styles.about_us_item } >
                    < h4 > ABOUT US </ h4 >
                    < p class = "about-us-p" > 
                        Woven Magazine celebrates artists, designers, and entrepreneurs while exploring the history of design through travel.
                    </ p >
                </ div >

            </ section >


            < Stories />
            < BlogPostSummary />
            < Footer />

            <div>
                {/* {data} */}
            </div>

        </>
    )
}


