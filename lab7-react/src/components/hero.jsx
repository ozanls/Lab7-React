export default function Hero() {
    return (
        <section id="hero">
            {/* Background image courtesy of Wendy Aros-Routman (via Unsplash) */}
            {/* https://unsplash.com/photos/green-grass-OmQ9a7ayw98 */}
            <h1 className="hero__title">Your yard is our business</h1>
            <p className="hero__subtitle">At <b>Lush Landscaping</b>, we're committed to transforming your outdoor space into a beautiful oasis. With expert care and creative design, we make your landscaping dreams come true.</p>
            <a href="#main">
                <div className="button">
                    Book a Consultation
                </div>
            </a>
        </section>
    )
}