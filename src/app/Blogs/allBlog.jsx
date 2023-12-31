import styles from "./AllBlogs.module.css"
// import React from 'react'
import Navigation from '../../ui/Nav'
import Footer from "../../ui/footer"
import Sidebar from "../../ui/sideBar"
import AllBlogsPartOne from "./module/blogsList"
// import AllBlogsPart2 from "./allBlogsPart2"

import Template from "../../template/template"

const AllBlogs = ( ) => {
    return( 
        <>      
            <Navigation />
            <section className = {styles.blogSection}>

                <h3 className = {"text-center " + styles.blogSectionHeading}>THE BLOG</h3>
                <Template 
                    elements={[
                        <AllBlogsPartOne/>,
                        <Sidebar />
                    ]}
                />

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