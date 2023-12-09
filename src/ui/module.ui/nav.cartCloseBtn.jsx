import { cartSwitch } from "../../data&functions/switch";

const CartCloseBtn = ( {state} ) => {
    const { cartDisplay, setCartDisplay } = state;
    return (
        <>
            <img onClick={ ()=>{ cartSwitch( [cartDisplay, setCartDisplay] ) } } src="/images/icons/close.png" alt="" height="20" width="20" />
        </>
    )
} 

export default CartCloseBtn;