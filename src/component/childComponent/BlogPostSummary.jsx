import styles from "../../../public/css/cssComponent/blogPostSummary.module.css";

const BlogPostSummaryData = [
    { 
        images: "images/stories/stories1.jpg",
        heading : "Making Art in the Middle of Nowhere", 
        para: " Exploring a West Texas must-see, firmly planted at the crossroads of Art and Myth."
    },

    { 
        images: "images/stories/stories2.jpg",
        heading : "Closer to Home", 
        para: "Bryce Ehrecke & Kelly Brown share how natural building could empower both a more beautiful and a more sustainable future."
    },

    { 
        images: "images/stories/stories3.jpg",
        heading : "Faculty Department", 
        para: "Photographer Justin Chung’s project Faculty Department is an ode to the inspiration found in his subjects."
    },

    { 
        images: "images/stories/stories4.jpg",
        heading : "Antelope Canyon", 
        para: "Worn by wind and sand, these centuries old slot canyons are a sculpted masterpiece, such that only nature could reveal."
    }
]

const BlogPostSummary = () => {
    return (
        <>
            <section className={styles.blogPost}>
                <h3>FEATURED BLOG POSTS</h3>
                <div className="flex flex-wrap flex-cen">
                    {
                        BlogPostSummaryData.map( ( cur ) => {
                            return(
                                <div className="blog-posts-item">
                                    <div><img src={cur.images} alt=""/></div>

                                    <div>
                                        <h4> {cur.heading} </h4>
                                        <p> {cur.para} </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    

                </div>
                <div className="visit-blog-btn"><a href="./allBlogs.php">Visit blog</a></div>
            </section>
        </>
    )
}


export default BlogPostSummary;