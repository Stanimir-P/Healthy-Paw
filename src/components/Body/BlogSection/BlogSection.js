import { Link } from 'react-router-dom';

import './BlogSection.css';

const BlogSection = () => {
    return (
        <section className="blog-section">
            <div className="blog-section-wrapper">

                <div className="blog-section-article">
                    <div className="blog-section-article-image">
                        <img className="img-responsive" src="https://i.pinimg.com/originals/44/d9/8c/44d98cccb725fd3a80c0446b9b2e646d.jpg" alt="article" />
                    </div>

                    <title className="blog-section-article-title">
                        <h1>
                            Pet Relationships
                        </h1>
                    </title>

                    <div className="blog-section-article-text">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente nam itaque fugiat labore assumenda rerum perspiciatis. Eum, ullam impedit.
                        </p>
                    </div>

                    <Link to="#" className="read-more-btn-wrapper">
                        <div className="background-poly"></div>
                        <p className="read-more-btn">READ MORE</p>
                    </Link>
                </div>

                <div className="blog-section-article">
                    <div className="blog-section-article-image">
                        <img className="img-responsive" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="article" />
                    </div>

                    <title className="blog-section-article-title">
                        <h1>
                            Healthy Cats
                        </h1>
                    </title>

                    <div className="blog-section-article-text">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente nam itaque fugiat labore assumenda rerum perspiciatis. Eum, ullam impedit.
                        </p>
                    </div>

                    <Link to="#" className="read-more-btn-wrapper">
                        <div className="background-poly"></div>
                        <p className="read-more-btn">READ MORE</p>
                    </Link>
                </div>

                <div className="blog-section-article">
                    <div className="blog-section-article-image">
                        <img className="img-responsive" src="https://wallpaperaccess.com/full/90621.jpg" alt="article" />
                    </div>

                    <title className="blog-section-article-title">
                        <h1>
                            Healthy Dogs
                        </h1>
                    </title>

                    <div className="blog-section-article-text">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente nam itaque fugiat labore assumenda rerum perspiciatis. Eum, ullam impedit.
                        </p>
                    </div>

                    <Link to="#" className="read-more-btn-wrapper">
                        <div className="background-poly"></div>
                        <p className="read-more-btn">READ MORE</p>
                    </Link>
                </div>

                <aside className="blog-btn-wrapper">
                    <Link to="/Healthy-Paw/blog" className="blog-btn section-btn">
                        <div className="visit-blog-btn">VISIT BLOG</div>
                    </Link>
                </aside>
            </div>
        </section>
    )
}

export default BlogSection;