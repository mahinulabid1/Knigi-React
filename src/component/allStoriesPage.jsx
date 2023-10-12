import Navigation from './childComponent/nav'
import Stories from "./childComponent/stories"
import BlogPostSummary from "./childComponent/BlogPostSummary"
import Footer from "./childComponent/footer"
import styles from "../../public/css/allStoriesPage.module.css"

const AllStoriesPage = () => {
    return(
        <>
            <Navigation />
            <div className={styles.gapOne}></div>

            <Stories />
            <div className={styles.gapTwo}></div>
            
            <BlogPostSummary />
            <div className={styles.gapTwo}></div>
            <Footer />
        
        </>
    )
}

export default AllStoriesPage;