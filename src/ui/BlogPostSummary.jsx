import styles from "../../../public/css/cssComponent/blogPostSummary.module.css";
import { BlogPostSummaryData } from "../data&functions/dataAndFunctions";

const BlogPostSummary = () => {
    return (
        <>
            <section className={styles.blogPost}>
                <h3 className="text-center">FEATURED BLOG POSTS</h3>
                <div className="flex flex-wrap flex-cen">
                    {
                        BlogPostSummaryData.map( ( cur ) => {
                            return(
                                <div className={styles.blogPostItems}>
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
                <div className={styles.visitBlogBtn}><a href="./allBlogs.php">Visit blog</a></div>
            </section>
        </>
    )
}


export default BlogPostSummary;