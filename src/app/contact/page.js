export default function ContactPage() {
    return (
        <div className="section">
            <div className="container" style={{ maxWidth: '600px' }}>
                <h1 className="section-title">Contact Us</h1>
                <p className="section-description" style={{ marginBottom: '3rem' }}>
                    We love to hear from you. Fill out the form below and we’ll get back to you shortly.
                </p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                        <input type="text" placeholder="Your Name" style={{
                            width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '1rem'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                        <input type="email" placeholder="you@company.com" style={{
                            width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '1rem'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                        <textarea rows={5} placeholder="How can we help?" style={{
                            width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit'
                        }} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
                </form>
            </div>
        </div>
    );
}
