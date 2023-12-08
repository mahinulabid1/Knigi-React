import { useState, useEffect } from "react";
import { closeFunc } from "../data&functions/dataAndFunctions"
import styles from "./css/searchBox.module.css";

const SearchBox = ( { display, animation, closeButon } ) => {
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
                                <button><img src="/images/icons/search.png" alt="search anything" height="20" width="20"/> </button>
                        </div>

                        <p className={styles.escBtn}>PRESS <span>[ESC]</span> TO CLOSE</p>
                    </form>
                </div>

                {/* close button */}
                {closeButon}
            </div>
        </>
    )
}


export default SearchBox;