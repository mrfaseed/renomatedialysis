export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <h3>Renomate Dialysis Solutions</h3>
                <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)' }}>
                    Innovating dialysis care for a better tomorrow.
                </p>
                <div style={{ marginTop: '2rem', fontSize: '0.875rem', opacity: 0.7 }}>
                    &copy; {new Date().getFullYear()} Renomate. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
