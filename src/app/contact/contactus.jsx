import Footer from "../../ui/footer";
import Navigation from "../../ui/Nav";
import styles from "./contactUs.module.css"

const ContactUs = ( ) => {

    return (
        <>      
            <Navigation />
            <section>
                <h1 className={styles.section_header}>TELL US YOUR <br /> THOUGHTS</h1>

                <div className={styles.flex_container + " flex flex-wrap flex-s-a"}>
                    <div className={styles.flex_item}>
                        <h3>GENERAL QUESTIONS</h3>

                        <p className={styles.contactPara}>
                            For any questions, press inquiries, requests, or comments you may have please
                             contact: <span className={styles.contactHighLight}>HELLO@WOVENMAGAZINE.COM</span> 
                        </p>

                        <h3>JOIN OUR COMMUNITY</h3>

                        <p className={styles.contactPara}>
                            Show Woven some social love. 
                            Like us on <a href="facebook.com" className={styles.contactHighLight}>FACEBOOK</a> , 
                            tweet us on <a href="facebook.com" className={styles.contactHighLight}>TWITTER</a>, 
                            or follow us around on <a href="facebook.com" className={styles.contactHighLight}>INSTAGRAM</a>.
                        </p>
                    </div>


                    <div className={styles.flex_item}>

                        <h3 class="section-flex-h3">COLLABORATE WITH US</h3>
                        <p class={styles.contactPara}>
                            We also provide opportunities to collaborate on video, photography, and writing.
                        </p>
                        <a href="./collaborate" class={styles.buttonSideBar}>COLLABORATE</a>
                        <h3 class="section-flex-h3">REQUEST AN INTERVIEW</h3>
                        <p class={styles.contactPara}>
                            Have a story, tattoo, or dwelling, you’d like to share with us, then request an interview.
                        </p>
                        <a href="./collaborate" class={styles.buttonSideBar}>REQUEST AN INTERVIEW</a>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}


export default ContactUs;