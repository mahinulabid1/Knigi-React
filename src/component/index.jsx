import React from 'react'
import "../../public/scss/dist/style.css"
import Navigation from './childComponent/nav'
import Stories from "./childComponent/stories"
import BlogPostSummary from "./childComponent/BlogPostSummary"
import Footer from "./childComponent/footer"



export default function Homepage () {

    return (
        <>  
            <Navigation/>


            <header>
                <div class="header-image-container">
                    <img src="images/headerImg1.jpg" alt="books"/>
                    <img src="images/headerImg2.jpg" alt="books"/>
                    <img src="images/headerImg3.jpg" alt="books"/>
                </div>
        
                <div class="hero-text-container">
                    <h1>Buy Books, Anywhere</h1>
                    <a href="./shopall.php">Shop Now</a>
                </div>

            </header>

            <section class="flex flex-wrap about-us-section">
                <div class="about-u-s-item">
                    <h1>design <span class="design-span">and</span> travel</h1>
                </div>
                <div class="about-u-s-item">
                    <h4>ABOUT US</h4>
                    <p class="about-us-p">Woven Magazine celebrates artists, designers, and entrepreneurs while exploring the history of design through travel.</p>
                </div>
            </section>

            <Stories />
            <BlogPostSummary />
            <Footer />

        </>
    )
}


// export default Demo;