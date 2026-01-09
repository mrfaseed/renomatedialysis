export default function HeroSection() {
    return (
        <section className="section" style={{ padding: '8rem 2rem' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Advanced Dialysis Solutions <br /> For Modern Healthcare
                </h1>
                <p className="section-description" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>
                    Providing state-of-the-art renal care technology to hospitals and clinics worldwide.
                    Experience reliability, precision, and care.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="/products" className="btn btn-primary">Explore Products</a>
                    <a href="/contact" className="btn btn-outline">Contact Sales</a>
                </div>
            </div>
        </section>
    );
}
