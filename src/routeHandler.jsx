import { createBrowserRouter } from "react-router-dom";

import Homepage from "./app/landingPage/index"
import StoriesPage from "./app/stories/storiesDetailedPage"
import ShopAll from './app/shop/shopAll';
import AllStoriesPage from './app/stories/allStoriesPage';
import AllBlogs from './app/Blogs/allBlog';
import ContactUs from './app/contact/contactus';
import TermsAndCondition from './app/terms&condition/termsAndCondition';
import RequestInterView from './app/requestInterview/requestInterview';
import SingleShopItem from "./app/shop/singleShopitem";
import FormComponent from "./app/signIn&CreateAccount/signIn";

const routeHandler = createBrowserRouter ( [
    {
        path : "/",
        element : < Homepage />,
    },

    {
        path : "/allStories",
        element : < AllStoriesPage />
    },

    {
        path : "/shopall",
        element : < ShopAll />
    },

    {
        path : "/storiesDetail",
        element : < StoriesPage />
    },

    {
        path : "/blog",
        element : < AllBlogs />
    },

    {
        path : "/contactus",
        element : < ContactUs />
    },

    {
        path : "/termsandcondition",
        element : < TermsAndCondition />
    },

    {
        path : "/requestinterview",
        element : < RequestInterView />
    },
    {
        path : "/shopItemDetails/:id",
        element : <SingleShopItem />
    },
    {
        path : "/login",
        element : <FormComponent/>
    },

] );


export default routeHandler;