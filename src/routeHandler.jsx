import { createBrowserRouter } from "react-router-dom";

import Homepage from "./component/index"
import StoriesPage from "./component/storiesDetailedPage"
import ShopAll from './component/shopAll';
import AllStoriesPage from './component/allStoriesPage';
import AllBlogs from './component/allBlog';
import ContactUs from './component/contactus';
import TermsAndCondition from './component/termsAndCondition';
import RequestInterView from './component/requestInterview';

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


] );


export default routeHandler;