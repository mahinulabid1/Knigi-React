import { useState, useEffect } from "react";

const SearchBox = ( { searchClick } ) => {
    const [ display , setDisplay ] = useState("d-none");
    const [ animation, setAnimation ] = useState("slideUp")


    useEffect( () => {
        if ( searchClick === 1 ) {
            setAnimation( "slideDown" );
            setDisplay( "" );
        }
    }, [ searchClick ]);

    const closeFunc = () => {
        setAnimation ( "slideUp" ); 

        setTimeout ( () => {
            setDisplay ( "d-none" );
        }, 370 )
    }


    // when user press esc it will close the search box
    const pressESC = () => {
        
    }

    return (
        <>
            {/* <!--++++++++++++ SEARCH ENGINE(just kidding) ++++++++++++++++++++++  --> */}
            {/* < div className = "search-display d-none slideUp" > */}
            < div className = { animation + " search-display " + display }> 

                {/* <!-- text container div --> */}
                <div>
                    <form action="">
                        <div className="flex flex-wrap flex-s-b">
                            <input type="text" placeholder="Search Woven + Hit Enter"/>
                                <button><img src="images/icons/search.png" alt="search anything" height="20" width="20"/> </button>
                        </div>

                        <p>PRESS <span>[ESC]</span> TO CLOSE</p>
                    </form>
                </div>

                <div className="search-close-btn flex flex-align-center flex-s-a" onClick = {closeFunc}>
                    <img src="images/icons/close.png" alt="" height="20" width="20"/>
                </div>
            </div>
        </>
    )
}


export default SearchBox;