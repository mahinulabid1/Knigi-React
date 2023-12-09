import { searchSwitch } from "../../data&functions/switch";

const SearchCloseBtn = ( { state } ) => {
    const {
        searchDisplay,
        setSearchDisplay,
        searchAnimation,
        setSearchAnimation
    } = state;

    console.log(searchDisplay)

    return(
        <>
        <div 
            className="search-close-btn flex flex-align-center flex-s-a" 
            onClick = { ( ) => { 
                searchSwitch( 
                    [ searchDisplay, setSearchDisplay ],  
                    [ searchAnimation, setSearchAnimation ] 
                )
            } }
        >
            <img src="/images/icons/close.png" alt="" height="20" width="20"/>
        </div>
        </>
    )
}

export default SearchCloseBtn;