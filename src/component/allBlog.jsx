import styles from "../../public/css/AllBlogs.module.css"
import React from 'react'
import Navigation from './childComponent/nav'
import Stories from "./childComponent/stories"
import BlogPostSummary from "./childComponent/BlogPostSummary"
import Footer from "./childComponent/footer"
import AllBlogsPartOne from "./childComponent/allBlogsPart1"
import AllBlogsPart2 from "./childComponent/allBlogsPart2"

const AllBlogs = ( ) => {
    return( 
        <>      
            <Navigation />
            <section className = {styles.blogSection}>

                <h3 className = {"text-center " + styles.blogSectionHeading}>THE BLOG</h3>

                <div className = "flex flex-wrap flex-s-b"> 

                    <AllBlogsPartOne />

                    <AllBlogsPart2 />
                </div>

                <div className = "page-counter-all-blogs">
                    <div className = "page-counter-center-container center-horizontally">
                        <div className = "page-counter-total-pages"> PAGE 1 OF 1</div>
                        <div className = "current-page-page-counter">1</div>
                    </div>
                    
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AllBlogs;