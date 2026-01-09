import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">About Renomate</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--muted-foreground)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        At Renomate Dialysis, our mission is simple: to provide the highest quality renal care products to healthcare providers around the globe.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Founded in [Year], we have grown from a small manufacturing unit to a global supplier, trusted by top hospitals and dialysis centers. We believe in technology that cares.
                    </p>
                    <p>
                        Our manufacturing facilities follow the strictest GMP guidelines, ensuring every product that leaves our warehouse is safe, sterile, and effective.
                    </p>
                </div>
            </div>
        </div>
    );
}
