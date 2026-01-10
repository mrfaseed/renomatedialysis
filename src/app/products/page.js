export default function ProductsPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">Our Products</h1>
                <p className="section-description" style={{ marginBottom: '3rem' }}>
                    Explore our wide range of dialysis consumables and equipment.
                </p>

                <div className="contact-info-grid">
                    {['Dialyzers', 'Blood Tubing Sets', 'AV Fistula Needles', 'Dialysis Catheters', 'Accessories'].map((category) => (
                        <div key={category} style={{
                            padding: '2.5rem',
                            border: '1px solid var(--border)',
                            borderRadius: '1rem',
                            backgroundColor: 'var(--background-alt)'
                        }}>
                            <h2 style={{ marginBottom: '1rem' }}>{category}</h2>
                            <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="btn btn-outline">View Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
