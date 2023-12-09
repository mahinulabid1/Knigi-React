import { shopNavigationSwitch } from "../../data&functions/switch";


const ShopNavigationSwitch = ( { state } ) => {
    const {
        shopDisplay,
        setShopDisplay,
        shopAnimation,
        setShopAnimation,
        shopCloseValidatoin
    } = state;

    return (
        <>
        <div
            style = {{ height: '100%', width: '100%' }}
            onMouseOver = {
                () => {
                    //preventing auto close
                    const timeCheck = Date.now() - shopCloseValidatoin;
                    if(timeCheck > 400 ) {
                        shopNavigationSwitch( 
                            [ shopDisplay, setShopDisplay ],  
                            [ shopAnimation, setShopAnimation ] 
                        )
                    }
                }
            }
        ></div>
        </>
    )
}

export default ShopNavigationSwitch;