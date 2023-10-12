import styles from "../../../public/css/cssComponent/stories.module.css";


const StoriesData = [
    {   
        image: "images/stories/stories1.jpg",
        storiesLink: "/stories",
        title: "SHANTELL MARTIN ", 
        titleSpan: "| ART",
        linkText: "Well, ARE YOU?",
        para: "Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?",
        date : "10.05.19"
    },

    {   
        image: "images/stories/stories2.jpg",
        storiesLink: "/stories",
        title: "CRÉ NATURAL BUILDING", 
        titleSpan: "| ARCHITECTURE",
        linkText: "Closer to Home",
        para: "Bryce Ehrecke & Kelly Brown share how natural building could empower both a more beautiful and a more sustainable future.",
        date : "11.11.19"
    },

    {   
        image: "images/stories/stories3.jpg",
        storiesLink: "/stories",
        title: "ALISON CARROLL", 
        titleSpan: "| ENTREPRENEUR",
        linkText: "Wonder Valley",
        para: "Wonder Valley is a built around the essentials for cultivating a rich existence, with good food and good health for a good life.",
        date : "10.05.19"
    },

    {   
        image: "images/stories/stories4.jpg",
        storiesLink: "/stories",
        title: "JUSTIN CHUNG", 
        titleSpan: "| PHOTOGRAPHER",
        linkText: "Faculty Department",
        para: "Photographer Justin Chung’s project Faculty Department is an ode to the inspiration found in his subjects.",
        date : "10.05.19"
    },

    {   
        image: "images/stories/stories5.jpg",
        storiesLink: "/stories",
        title: "JOEKENNETH MUSEAU", 
        titleSpan: "| CERAMICS",
        linkText: "The Journey of Departure",
        para: "Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?",
        date : "10.05.19"
    },

    {   
        image: "images/stories/stories6.jpg",
        storiesLink: "/stories",
        title: "PAGE, AZ", 
        titleSpan: "| LANDSCAPE",
        linkText: "Antelope Canyon",
        para: "Worn by wind and sand, these centuries old slot canyons are a sculpted masterpiece, such that only nature could reveal.",
        date : "10.05.19"
    },


    {   
        image: "images/stories/stories7.jpg",
        storiesLink: "/stories",
        title: "CODY COBB", 
        titleSpan: "| PHOTOGRAPHER",
        linkText: "Eons of Earth",
        para: "As a photographer and solo traveler, Cody Cobb elevates the grandeur of the natural world beyond the boundary of civilization.",
        date : "10.05.19"
    },

    {   
        image: "images/stories/stories8.jpg",
        storiesLink: "/stories",
        title: "JULIANNE AHN ", 
        titleSpan: "| CERAMICS",
        linkText: "Object & Totem",
        para: "Ceramicist Julianne Ahn reflects on the meditative process of her work and how it taught her balance between seasons of life.",
        date : "10.05.19"
    }
] 


const Stories = () => {
    return (
        <>
            <section className={styles.their_stories}>
                <h4>THE STORIES</h4>
                <div className={"their-stories-menu-container bound-padding flex flex-s-b " + styles.menu_container}>
                    <div className="their-stories-menu">
                        {/* <!-- empty div --> */}
                    </div>

                    <div className="their-stories-menu flex flex-s-b">
                        <a href="./films.php" title="see films about these books">
                            SEE FILMS
                        </a>

                        <a href="./allStories.php" title="View all the stories">
                            SEE ALL STORIES
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap flex-s-b bound-padding">

                    {
                        StoriesData.map( (cur ) => {
                            return (
                                <div className={styles.contentCard}>
                                    <div className={styles.titleImageSection}>
                                        <img src={cur.image} alt="stories image"/>
                                            <div>
                                                <div className={styles.linkContainer}>
                                                    <a href={cur.storiesLink} className="s-t-link">Read more</a>
                                                </div>
                                            </div>
                                    </div>

                                    <div className={styles.contentText}>
                                        <h6>{cur.title} <span>{cur.titleSpan}</span></h6>
                                        <a href="./stories.php">{cur.linkText}</a>
                                        <p className="s-t-content-para">{cur.para} </p>
                                        <span className="s-t-content-date">{cur.date}</span>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </section>
        </>
    )
}



export default Stories;