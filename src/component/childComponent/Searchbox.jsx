const SearchBox = () => {
    return (
        <>
            {/* <!--++++++++++++ SEARCH ENGINE(just kidding) ++++++++++++++++++++++  --> */}
            <div class="search-display d-none">

                {/* <!-- text container div --> */}
                <div>
                    <form action="">
                        <div class="flex flex-wrap flex-s-b">
                            <input type="text" placeholder="Search Woven + Hit Enter"/>
                                <button><img src="./app/img/icons/search.png" alt="search anything" height="20" width="20"/> </button>
                        </div>

                        <p>PRESS <span>[ESC]</span> TO CLOSE</p>
                    </form>
                </div>

                <div class="search-close-btn flex flex-align-center flex-s-a">
                    <img src="./app/img/icons/close.png" alt="" height="20" width="20"/>
                </div>
            </div>
        </>
    )
}


export default SearchBox;