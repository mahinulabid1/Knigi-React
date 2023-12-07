import { useState, useEffect } from "react";
import { closeFunc } from  "./dataAndFunctions";
import styles from "../../../public/css/cssComponent/hamNav.module.css";    //css module


const NavLinksInfo = [  // Minimizing Code: Ham-navigation Links information
    {link : "/allStories" , text : "STORIES"} ,
    {link : "/films" , text : "FILMS"} ,
    {link : "/shopall" , text : "SHOP"} ,
    {link : "/blog" , text : "BLOG"} ,
    {link : "/contactus" , text : "CONTACT US"},
    {link : "/login", text: "LOGIN/CREATE ACCOUNT" }
]

const HamNavigation = ( { hamClick } ) => {
    const [ display, setDisplay ] = useState ( "d-none" );
    const [ animation, setAnimation] = useState ( "slideUp" );

    // a simple react hook 
    useEffect( () => {
        if ( hamClick === 1 ) {
            setAnimation( "slideDown" );
            setDisplay( "" );
        }
    }, [ hamClick ]); // each time hamClick is changed, it will change the className


    return (
        <>
        
        <div className = { display + " " +styles.nav_in_ham + " " + animation } >

            {/* -- HAM NAVIGATION Container --*/}
            < div className = {styles.nav_in_ham_content_container} >

                {/* List of Links in Navigation Bar, [ code minimization ] */}
                { NavLinksInfo.map( (cur,index) => {
                    return(
                        <a href={cur.link} className={styles.ham_link} key={index}>{cur.text} </a>
                        // this is accessing an Array, each index contains an Object with Link's information.
                    )
                }) }

                <a href="./contactUs.php" className={styles.request_interview_btn}>
                    REQUEST INTERVIEW
                </a>
                
                {/* Button for CLOSING hamNavigation */}
                <div onClick={ () => { closeFunc ( setDisplay, setAnimation ); } } className = {styles.ham_close_btn} id = "close-nav-in-ham">
                    <img src = "/images/icons/close.png" alt = "" height = "20" width = "20" />
                </div>
                
            </div>
        </div>
        </>
    );
};

export default HamNavigation;