import styles from "./stories.module.css";
import { StoriesData } from "../../data&functions/dataAndFunctions";




const Stories = () => {
    return (
        <>
            <section className={styles.their_stories}>
                <h4>THE STORIES</h4>
                <div key={1} className={"their-stories-menu-container bound-padding flex flex-s-b " + styles.menu_container}>
                    <div className="their-stories-menu">
                        {/* <!-- empty div --> */}
                    </div>

                    <div className="their-stories-menu flex flex-s-b">
                        <a href="./films.php" title="see films about these books">
                            SEE FILMS
                        </a>

                        <a href="./allStories.php" title="View all the stories">
                            SEE ALL STORIES
                        </a>
                    </div>
                </div>

                <div key={2} className="flex flex-wrap flex-s-b bound-padding">

                    {
                        StoriesData.map( (cur, index ) => {
                            return (
                                <div className={styles.contentCard} key={index}>
                                    <div className={styles.titleImageSection}>
                                        <img src={cur.image} alt="stories image"/>
                                            <div>
                                                <div className={styles.linkContainer}>
                                                    <a href={cur.storiesLink} className="s-t-link">Read more</a>
                                                </div>
                                            </div>
                                    </div>

                                    <div className={styles.contentText}>
                                        <h6>{cur.title} <span>{cur.titleSpan}</span></h6>
                                        <a href="./stories.php">{cur.linkText}</a>
                                        <p className="s-t-content-para">{cur.para} </p>
                                        <span className="s-t-content-date">{cur.date}</span>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </section>
        </>
    )
}



export default Stories;