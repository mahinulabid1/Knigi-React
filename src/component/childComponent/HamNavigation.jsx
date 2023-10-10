import { useState, useEffect } from "react";


const HamNavigation = ( { hamClick } ) => {
    const [ display, setDisplay ] = useState ( "d-none" );
    const [ animation, setAnimation] = useState ( "slideUp" );

    useEffect( () => {
        if ( hamClick === 1 ) {
            setAnimation( "slideDown" );
            setDisplay( "" );
        }
    }, [ hamClick ]);



    const NavLinksInfo = [
        {link : "/allStories" , text : "STORIES"} ,
        {link : "/films" , text : "FILMS"} ,
        {link : "/shop" , text : "SHOP"} ,
        {link : "/blog" , text : "BLOG"} ,
        {link : "/about" , text : "ABOUT"} 
    ]

    return (
        <>
            {/* -- HAM NAVIGATION --*/}
            <div className = { display + " nav-in-ham " + animation } >
                < div className = "nav-in-ham-content-container" >
                
                    {
                        NavLinksInfo.map( (cur,index) => {
                            return(
                                <a href={cur.link} className="nav-in-ham-content" key={index}>{cur.text}</a>
                            )
                        })
                    }

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
                    className = "ham-close-btn" id = "close-nav-in-ham">

                        
                        <img src = "images/icons/close.png" alt = "" height = "20" width = "20" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default HamNavigation;