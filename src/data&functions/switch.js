const toggleFunc = (display, animation) =>{
    // destructing state operation
    const [ displayState, setDisplay ] = display;
    const [ animationState, setAnimation ] = animation;

    if(displayState === 'd-none') {
        setDisplay('')
        setAnimation('slideDown')
    } else {
        // slider animation duration : 400ms
        setAnimation('slideUp')
        setTimeout(() => {
            setDisplay('d-none');
        }, 390)
    }
}

const navigationSwitch = ( display, animation )  => {
    // each argument is an array, take state & functions as arguments
    toggleFunc(display, animation);
}


const searchSwitch = ( display, animation ) => {
    toggleFunc(display, animation);
}


const shopNavigationSwitch =  ( display, animation ) => {
    toggleFunc(display, animation);
}

export {
    navigationSwitch,
    searchSwitch,
    shopNavigationSwitch
};