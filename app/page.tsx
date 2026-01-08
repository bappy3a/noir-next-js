export default function Home() {
    return (
        <>
            <section className="hero" id="home">
                <div className="hero-bg" />
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="hero-badge">New Collection 2025</div>
                        <h1 className="hero-title">
                            <span className="line">
                                <span>Redefine</span>
                            </span>
                            <span className="line">
                                <span>
                                    Your <span className="accent">Style</span>
                                </span>
                            </span>
                            <span className="line">
                                <span>Revolution</span>
                            </span>
                        </h1>
                        <p className="hero-description">Discover our avant-garde collection where high fashion meets street culture. Each piece tells a story of rebellion, elegance, and innovation.</p>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Exclusive Pieces</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">48H</span>
                                <span className="stat-label">Fast Delivery</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Sustainable</span>
                            </div>
                        </div>
                        <div className="cta-group">
                            <a href="#collections" className="cta-button primary">
                                Explore Collection
                            </a>
                            <a href="#featured" className="cta-button outline">
                                Watch Runway
                            </a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-image-wrapper">
                            <div className="hero-carousel">
                                <div className="carousel-slide active">
                                    <img src="images/noir-fashion-hero-01.avif" alt="Fashion Model 1" />
                                </div>
                                <div className="carousel-slide">
                                    <img src="images/noir-fashion-hero-02.avif" alt="Fashion Model 2" />
                                </div>
                                <div className="carousel-slide">
                                    <img src="images/noir-fashion-hero-03.avif" alt="Fashion Model 3" />
                                </div>
                                <div className="carousel-overlay" />
                                <div className="carousel-indicators">
                                    <span className="indicator active" data-slide={0} />
                                    <span className="indicator" data-slide={1} />
                                    <span className="indicator" data-slide={2} />
                                </div>
                            </div>
                            <div className="floating-tags">
                                <div className="tag">Limited Edition</div>
                                <div className="tag">Handcrafted</div>
                                <div className="tag">Premium Quality</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span />
                </div>
            </section>
        </>
    );
}
