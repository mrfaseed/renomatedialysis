import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/">Renomate</Link>
            </div>
            <ul className="nav-links">
                <li><Link href="/" className="nav-link">Home</Link></li>
                <li><Link href="/about" className="nav-link">About Us</Link></li>
                <li><Link href="/products" className="nav-link">Products</Link></li>
                <li><Link href="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    );
}
