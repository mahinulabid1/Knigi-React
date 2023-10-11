// data from shopNavigation.jsx
const shopData = [
    {   
        link: "./productDescription",
        image: "images/product/individual/product1.jpg",
        title: "Knigi Issue Four",
        discountedRegularPrice: "$18 USD",
        discountedPrice: "$9 USD",
        regularPrice: ""
    },

    {
        link: "./productDescription",
        image: "images/product/individual/product2.jpg",
        title: "Earl of East London",
        discountedRegularPrice: "",
        discountedPrice: "",
        regularPrice: "$24 USD"
    },

    {
        link: "./productDescription",
        image: "images/product/individual/product3.jpg",
        title: "Earl of East London",
        discountedRegularPrice: "",
        discountedPrice: "",
        regularPrice: "$14 USD"
    },

    {
        link: "./productDescription",
        image: "images/product/individual/product3.jpg",
        title: "Earl of East London",
        discountedRegularPrice: "$24 USD",
        discountedPrice: "$12 USD",
        regularPrice: ""
    },
]

// the data from HamNavigation.jsx
const NavLinksInfo = [
    {link : "/allStories" , text : "STORIES"} ,
    {link : "/films" , text : "FILMS"} ,
    {link : "/shop" , text : "SHOP"} ,
    {link : "/blog" , text : "BLOG"} ,
    {link : "/about" , text : "ABOUT"} 
]


// close function for all navigation section
const closeFunc = (display, animation) => {
    if ( display !== undefined && animation !== undefined ) {
        animation( "slideUp" );

        setTimeout ( () => {
            display ( "d-none" );
        }, 370 )
    }

    else if ( animation === undefined ) {
        display ( "d-none " );
    } 
}

export { shopData, NavLinksInfo, closeFunc };