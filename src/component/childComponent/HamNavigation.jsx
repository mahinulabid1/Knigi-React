import { useState, useEffect } from "react";
import { shopData, NavLinksInfo, closeFunc } from  "./dataAndFunctions";

//css module
import styles from "../../../public/css/cssComponent/hamNav.module.css";


const HamNavigation = ( { hamClick } ) => {
    const [ display, setDisplay ] = useState ( "d-none" );
    const [ animation, setAnimation] = useState ( "slideUp" );

    useEffect( () => {
        if ( hamClick === 1 ) {
            setAnimation( "slideDown" );
            setDisplay( "" );
        }
    }, [ hamClick ]);


    return (
        <>
            {/* -- HAM NAVIGATION --*/}
            <div className = { display + " " +styles.nav_in_ham + " " + animation } >
                < div className = {styles.nav_in_ham_content_container} >
                
                    {
                        NavLinksInfo.map( (cur,index) => {
                            return(
                                <a href={cur.link} className={styles.ham_link} key={index}>{cur.text}</a>
                            )
                        })
                    }

                    <a href="./contactUs.php" className={styles.request_interview_btn}>
                        REQUEST INTERVIEW
                    </a>
                    
                    <div onClick={ () => { closeFunc ( setDisplay, setAnimation ); } } className = {styles.ham_close_btn} id = "close-nav-in-ham">
                        
                        <img src = "/images/icons/close.png" alt = "" height = "20" width = "20" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default HamNavigation;