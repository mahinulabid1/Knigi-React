import { useState, useEffect } from "react";
import { closeFunc } from "./dataAndFunctions"
import styles from "../../../public/css/cssComponent/searchBox.module.css";

const SearchBox = ( { searchClick } ) => {
    const [ display , setDisplay ] = useState("d-none");
    const [ animation, setAnimation ] = useState("slideUp")


    useEffect( () => {
        if ( searchClick === 1 ) {
            setAnimation( "slideDown" );
            setDisplay( "" );
        }
    }, [ searchClick ]);

    // when user press esc it will close the search box
    const pressESC = () => {
        // IDLE FOR NOW     
    }

    return (
        <>
            {/*  SEARCH ENGINE(just kidding)  */}
            < div className = { animation + " " + display + " " + styles.search_display} >  

                {/* <!-- text container div --> */}
                < div >
                    < form action = "" >
                        <div className="flex flex-wrap flex-s-b">
                            <input type="text" placeholder="Search Woven + Hit Enter"/>
                                <button><img src="images/icons/search.png" alt="search anything" height="20" width="20"/> </button>
                        </div>

                        <p className={styles.escBtn}>PRESS <span>[ESC]</span> TO CLOSE</p>
                    </form>
                </div>

                <div className="search-close-btn flex flex-align-center flex-s-a" onClick = { ( ) => { closeFunc ( setDisplay, setAnimation ) } }>
                    <img src="images/icons/close.png" alt="" height="20" width="20"/>
                </div>
            </div>
        </>
    )
}


export default SearchBox;