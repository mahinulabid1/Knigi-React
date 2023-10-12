import styles from "../../../public/css/cssComponent/footer.module.css"

const Footer = () => {
    return (
        <>
            <footer className={"bound-padding flex flex-s-a " + styles.footer }>
                <div><a href="./collaborate.php">Collaborate With Us</a> </div>
                <div><a href="./contactUs.php">Contact Us</a> </div>
                <div><a href="">Stay In Touch!</a> </div>
                <div><a href="./FAQ.php">FAQ</a> </div>
                <div><a href="./termsandCondition.php">Terms & Conditions</a> </div>
                <div className={styles.copyright_text}>© WOVEN 2021</div>
            </footer>
        </>
    )
}

export default Footer;