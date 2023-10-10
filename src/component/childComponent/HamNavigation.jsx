const HamNavigation = () => {
    return (
        <>
            {/* -- HAM NAVIGATION --*/}
            <div className = "nav-in-ham d-none slideUp">
                <div className = "nav-in-ham-content-container">
                    <a href = "./allStories.php" className = "nav-in-ham-content">STORIES</a>
                    <a href = "./films.php" className = "nav-in-ham-content">FILMS</a>
                    <a href = "./shopall.php" className = "nav-in-ham-content">SHOP</a>
                    <a href = "./allBlogs.php" className = "nav-in-ham-content">BLOG</a>
                    <a href = "./contactUs.php" className = "nav-in-ham-content">ABOUT</a>
                    <a href = "./contactUs.php" className = "request-interview-btn">REQUEST INTERVIEW</a>
                    <div className = "ham-close-btn" id="close-nav-in-ham">
                        <img src="./app/img/icons/close.png" alt="" height="20" width="20"/>
                    </div>
                </div>
            </div>
            {/* -- HAM NAVIGATION END -*/}
        </>
    )
}

export default HamNavigation;