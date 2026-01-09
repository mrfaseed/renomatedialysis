export default function ProductsSection() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Our Solutions</h2>
                <p className="section-description" style={{ marginBottom: '3rem' }}>
                    Comprehensive renal care products designed for safety and efficiency.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    width: '100%'
                }}>
                    {['Dialyzers', 'Blood Tubing Sets', 'Fistula Needles'].map((item) => (
                        <div key={item} style={{
                            padding: '2rem',
                            border: '1px solid var(--border)',
                            borderRadius: '0.5rem',
                            backgroundColor: 'var(--background)'
                        }}>
                            <h3 style={{ marginBottom: '1rem' }}>{item}</h3>
                            <p style={{ color: 'var(--muted-foreground)' }}>
                                High-performance {item.toLowerCase()} meeting international safety standards.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
