import { navigationSwitch } from "../../data&functions/switch";

const HamNavCloseBtn = ( { state } ) => {
    const { 
    hamDisplay, 
    setHamDisplay, 
    hamAnimation, 
    setHamAnimation 
    }  = state;

    return (
        <>
        <div 
        onClick={ 
            () => { 
                navigationSwitch ( 
                    [ hamDisplay, setHamDisplay ], 
                    [ hamAnimation, setHamAnimation ]
                ) 
            } 
        } 
        >     
            <img src = "/images/icons/close.png" alt = "" height = "20" width = "20" />
        </div>
        </>
    )
}

export default HamNavCloseBtn;