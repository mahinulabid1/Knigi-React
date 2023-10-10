import { useState, useEffect } from "react";
// import {hamSwitch, setHamSwitch} from "./nav"

const HamNavigation = ({ hamClick }) => {
    const [display, setDisplay] = useState("d-none");
    const [animation, setAnimation] = useState("slideUp");

    useEffect(() => {
        if (hamClick === 1) {
            setAnimation("slideDown");
            setDisplay("");
        }
    }, [hamClick]);

    return (
        <>
            {/* -- HAM NAVIGATION --*/}
            <div className={display + " nav-in-ham " + animation}>
                <div className="nav-in-ham-content-container">
                    <a href="./allStories.php" className="nav-in-ham-content">
                        STORIES
                    </a>
                    <a href="./films.php" className="nav-in-ham-content">
                        FILMS
                    </a>
                    <a href="./shopall.php" className="nav-in-ham-content">
                        SHOP
                    </a>
                    <a href="./allBlogs.php" className="nav-in-ham-content">
                        BLOG
                    </a>
                    <a href="./contactUs.php" className="nav-in-ham-content">
                        ABOUT
                    </a>
                    <a href="./contactUs.php" className="request-interview-btn">
                        REQUEST INTERVIEW
                    </a>
                    
                    <div onClick={

                        () => { 
                            setAnimation ( "slideUp" ); 

                            setTimeout ( () => {
                                setDisplay ( "d-none" );
                            }, 370 )

                            }
                        } 
                        
                        className="ham-close-btn" id="close-nav-in-ham">

                        
                        <img src="images/icons/close.png" alt="" height="20" width="20" />
                    </div>
                </div>
            </div>
            {/* -- HAM NAVIGATION END -*/}
        </>
    );
};

export default HamNavigation;