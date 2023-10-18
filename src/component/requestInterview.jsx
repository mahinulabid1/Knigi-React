import styles from "../../public/css/requestInterview.module.css"
import Footer from "./childComponent/footer";
import Navigation from "./childComponent/nav";

const RequestInterView = ( ) => {

    return (
        <>
            <Navigation />
            <section>
                <h1 className={styles.header}>SHARE YOUR <br/> PASSION </h1>

                <div className="flex flex-wrap flex-s-a">
                    <div className={styles.flexItem}>
                        <h3 className="section-flex-h3">HEY CREATIVES</h3>
                        <p className="section-flex-item-p">
                            Here at Woven we understand and gladly acknowledge that we can’t do everything ourselves. We welcome the opportunity to work with fellow creatives, photographers, and film makers. As a result, many of the articles and videos here rely heavily on the skills of fellow collaborators. If you have an interest in working together or a skill you’d like to offer, please reach out to us.
                        </p>
                        <h3 className="section-flex-h3">GET FAMILIAR</h3>
                        <p className="section-flex-item-p">
                            Take some time to familiarize yourself with the editorial tone and visual aesthetic of Woven to see if it relates with your own. We would relish the opportunity to establish a relationship with you, look at your work, and perhaps collaborate on an article or creative experiment of sorts.
                        </p>
                    </div>
                    <div className={styles.flexItem}>
                        <h3 className="section-flex-h3">Tell us a bit about yourself</h3>
                        <form action="">
                            <input className={styles.input} type="text" placeholder="FIRST + LAST NAME" />
                            <input className={styles.input} type="text" placeholder="LOCATION(CITY + STATE/ COUNTRY)" />
                            <input className={styles.input} type="text" placeholder="WEBSITE (OPTIONAL)" />
                            <input className={styles.input} type="email" placeholder="YOUR EMAIL" />
                            <textarea className={styles.textHolder} placeholder="DESCRIBE YOURSELF"></textarea>
                            <input className={styles.submitBtn} type="submit" value="REQUEST AN INTERVIEW" />
                        </form>
                    </div>
                </div>
            </section>

            <div className={styles.whiteSpace}></div>

            <Footer />
        </>
    )
}


export default RequestInterView;