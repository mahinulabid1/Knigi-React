const BlogPostSummary = () => {
    return (
        <>
            <section className="blog-posts">
                <h3>FEATURED BLOG POSTS</h3>
                <div className="flex flex-wrap flex-cen">
                    <div className="blog-posts-item">
                        <div><img src="images/stories/stories4.jpg" alt=""/></div>

                        <div>
                            <h4>Making Art in the Middle of Nowhere</h4>
                            <p>Exploring a West Texas must-see, firmly
                                planted at the crossroads of Art and Myth.
                            </p>
                        </div>
                    </div>

                    <div className="blog-posts-item">
                        <div><img src="images/stories/stories2.jpg" alt=""/></div>
                        <div>
                            <h4>Making Art in the Middle of Nowhere</h4>
                            <p>Exploring a West Texas must-see, firmly
                                planted at the crossroads of Art and Myth.
                            </p>
                        </div>
                    </div>

                    <div className="blog-posts-item">
                        <div><img src="images/stories/stories6.jpg" alt=""/></div>
                        <div>
                            <h4>Making Art in the Middle of Nowhere</h4>
                            <p>Exploring a West Texas must-see, firmly
                                planted at the crossroads of Art and Myth.
                            </p>
                        </div>
                    </div>

                    <div className="blog-posts-item">
                        <div><img src="images/stories/stories5.jpg" alt=""/></div>
                        <div>
                            <h4>Making Art in the Middle of Nowhere</h4>
                            <p>Exploring a West Texas must-see, firmly
                                planted at the crossroads of Art and Myth.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="visit-blog-btn"><a href="./allBlogs.php">Visit blog</a></div>
            </section>
        </>
    )
}


export default BlogPostSummary;