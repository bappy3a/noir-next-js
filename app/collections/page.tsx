export const metadata = {
  title: "Collections | NOIR",
  description: "Discover our curated selection of collections",
};
export default function CollectionsPage() {
    return (
        <section className="collections" id="collections">
            <div className="section-header">
                <h2 className="section-title">Latest Collections</h2>
                <p className="section-subtitle">Discover our curated selection</p>
            </div>
            <div className="category-tabs">
                <button className="tab-btn active" data-category="all">
                    All
                </button>
                <button className="tab-btn" data-category="women">
                    Women
                </button>
                <button className="tab-btn" data-category="men">
                    Men
                </button>
                <button className="tab-btn" data-category="accessories">
                    Accessories
                </button>
                <button className="tab-btn" data-category="limited">
                    Limited Edition
                </button>
            </div>
            <div className="grid" id="collectionsGrid">
                <div className="collection-card" data-category="women">
                    <div className="collection-thumbnail">
                        <img src="images/urban-edge.avif" alt="Urban Edge Women's Collection" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">New Arrival</span>
                        <h3 className="card-title">Urban Edge</h3>
                        <p className="card-subtitle">Women's Collection</p>
                        <p className="card-price">From $299</p>
                    </div>
                </div>
                <div className="collection-card" data-category="limited">
                    <div className="collection-thumbnail">
                        <img src="images/midnight-luxe.avif" alt="Midnight Luxe Limited Edition" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">Limited</span>
                        <h3 className="card-title">Midnight Luxe</h3>
                        <p className="card-subtitle">Exclusive Drop</p>
                        <p className="card-price">From $899</p>
                    </div>
                </div>
                <div className="collection-card" data-category="men">
                    <div className="collection-thumbnail">
                        <img src="images/neo-classic.avif" alt="Neo Classic Men's Essentials" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">Bestseller</span>
                        <h3 className="card-title">Neo Classic</h3>
                        <p className="card-subtitle">Men's Essentials</p>
                        <p className="card-price">From $399</p>
                    </div>
                </div>
                <div className="collection-card" data-category="accessories">
                    <div className="collection-thumbnail">
                        <img src="images/accent-pieces.avif" alt="Accent Pieces Accessories" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">Trending</span>
                        <h3 className="card-title">Accent Pieces</h3>
                        <p className="card-subtitle">Accessories</p>
                        <p className="card-price">From $149</p>
                    </div>
                </div>
                <div className="collection-card" data-category="women">
                    <div className="collection-thumbnail">
                        <img src="images/spring-bloom.avif" alt="Spring Bloom Women's Spring" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">Pre-Order</span>
                        <h3 className="card-title">Spring Bloom</h3>
                        <p className="card-subtitle">Women's Spring</p>
                        <p className="card-price">From $249</p>
                    </div>
                </div>
                <div className="collection-card" data-category="men">
                    <div className="collection-thumbnail">
                        <img src="images/street-rebel.avif" alt="Street Rebel Men's Streetwear" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">Hot</span>
                        <h3 className="card-title">Street Rebel</h3>
                        <p className="card-subtitle">Men's Streetwear</p>
                        <p className="card-price">From $199</p>
                    </div>
                </div>
                <div className="collection-card" data-category="limited">
                    <div className="collection-thumbnail">
                        <img src="images/avant-garde.avif" alt="Avant Garde Art Meets Fashion" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">Exclusive</span>
                        <h3 className="card-title">Avant Garde</h3>
                        <p className="card-subtitle">Art Meets Fashion</p>
                        <p className="card-price">From $1,299</p>
                    </div>
                </div>
                <div className="collection-card" data-category="accessories">
                    <div className="collection-thumbnail">
                        <img src="images/minimal-chic.avif" alt="Minimal Chic Timeless Accessories" />
                    </div>
                    <div className="card-content">
                        <span className="card-badge">Essentials</span>
                        <h3 className="card-title">Minimal Chic</h3>
                        <p className="card-subtitle">Timeless Accessories</p>
                        <p className="card-price">From $89</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
