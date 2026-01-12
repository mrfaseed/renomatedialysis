'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Menu, X, Search, ArrowRight, FileText } from 'lucide-react';
import { products, pages } from '../data/searchData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    const mobileSearchRef = useRef(null);

    // Close search when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                // Only close if not clicking into the mobile search (if separate) or results
                setIsSearchOpen(false);
                setSearchQuery('');
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Search Handler
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();

        const filteredPages = pages.filter(page =>
            page.title.toLowerCase().includes(lowerQuery)
        );

        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(lowerQuery)
        );

        setSearchResults([...filteredPages, ...filteredProducts]);
    };

    const handleResultClick = () => {
        setSearchQuery('');
        setSearchResults([]);
        setIsSearchOpen(false);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <>
            <nav className={`${styles.navbar} ${isOpen ? styles.hiddenNavbar : ''}`}>
                {/* Logo Section */}
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        src="/image7.png"
                        alt="Renomate"
                        width={180}
                        height={60}
                        quality={100}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Navigation & Actions Wrapper - Grouped to Right */}
                <div className={styles.rightSection}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/" className={styles.navLink}>Home</Link></li>
                        <li><Link href="/about" className={styles.navLink}>About</Link></li>
                        <li><Link href="/products" className={styles.navLink}>Products</Link></li>
                        <li><Link href="/gallery" className={styles.navLink}>Gallery</Link></li>
                        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                    </ul>

                    {/* Actions: Search, WhatsApp, Mobile Menu */}
                    <div className={styles.navActions}>
                        {/* Search Icon & Input */}
                        <div
                            className={`${styles.searchContainer} ${isSearchOpen ? styles.searchActive : ''}`}
                            ref={searchRef}
                        >
                            <div className={styles.searchInputWrapper}>
                                <input
                                    type="text"
                                    placeholder="Search products or pages..."
                                    className={styles.searchInput}
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <button
                                className={styles.searchBtn}
                                onClick={() => {
                                    setIsSearchOpen(!isSearchOpen);
                                    // Focus input if opening? 
                                }}
                                aria-label="Toggle search"
                            >
                                <Search size={20} color="#334155" />
                            </button>

                            {/* Search Results Dropdown */}
                            {isSearchOpen && searchQuery && (
                                <div className={styles.searchResultsDropdown}>
                                    {searchResults.length > 0 ? (
                                        searchResults.map((result, index) => (
                                            <Link
                                                key={index}
                                                href={result.link}
                                                className={styles.searchResultItem}
                                                onClick={handleResultClick}
                                            >
                                                <div className={styles.resultIconWrapper}>
                                                    {result.category === 'Product' ? (
                                                        <div className={styles.productThumb}>
                                                            <Image
                                                                src={result.image}
                                                                alt={result.title}
                                                                width={40}
                                                                height={40}
                                                                style={{ objectFit: 'contain' }}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <FileText size={20} className="text-slate-400" />
                                                    )}
                                                </div>
                                                <div className={styles.resultInfo}>
                                                    <span className={styles.resultTitle}>{result.title}</span>
                                                    <span className={styles.resultCategory}>{result.category}</span>
                                                </div>
                                                <ArrowRight size={14} className={styles.resultArrow} />
                                            </Link>
                                        ))
                                    ) : (
                                        <div className={styles.noResults}>
                                            <p>No results found for "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* WhatsApp Button */}
                        <Link
                            href="https://wa.me/919876543210"
                            target="_blank"
                            className={styles.whatsappBtn}
                            aria-label="Contact on WhatsApp"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </Link>

                        {/* Mobile Menu Button - Sleek & Simple */}
                        {!isOpen && (
                            <button
                                className={styles.mobileMenuBtn}
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                <Menu size={26} color="#334155" />
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <Link href="/" className={styles.mobileLogoContainer} onClick={toggleMenu}>
                        <Image
                            src="/image7.png"
                            alt="Renomate"
                            width={140}
                            height={50}
                            quality={100}
                            className={styles.mobileLogoImage}
                        />
                    </Link>
                    <button
                        className={styles.closeMenuBtn}
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    >
                        <X size={32} color="#334155" />
                    </button>
                </div>

                {/* Mobile Search - Positioned at top of content area */}
                <div className={styles.mobileSearchContainer} ref={mobileSearchRef}>
                    <input
                        type="text"
                        placeholder="Search products or pages..."
                        className={styles.mobileSearchInput}
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <button className={styles.mobileSearchBtn}>
                        <Search size={20} color="#64748b" />
                    </button>

                    {/* Mobile Search Results */}
                    {searchQuery && (
                        <div className={styles.mobileSearchResults}>
                            {searchResults.length > 0 ? (
                                searchResults.map((result, index) => (
                                    <Link
                                        key={index}
                                        href={result.link}
                                        className={styles.searchResultItem}
                                        onClick={handleResultClick}
                                    >
                                        <div className={styles.resultIconWrapper}>
                                            {result.category === 'Product' ? (
                                                <div className={styles.productThumb}>
                                                    <Image
                                                        src={result.image}
                                                        alt={result.title}
                                                        width={36}
                                                        height={36}
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                </div>
                                            ) : (
                                                <FileText size={18} className="text-slate-400" />
                                            )}
                                        </div>
                                        <div className={styles.resultInfo}>
                                            <span className={styles.resultTitle}>{result.title}</span>
                                            <span className={styles.resultCategory}>{result.category}</span>
                                        </div>
                                        <ArrowRight size={14} className={styles.resultArrow} />
                                    </Link>
                                ))
                            ) : (
                                <div className={styles.noResults}>
                                    <p>No results found for "{searchQuery}"</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Centered Navigation */}
                <ul className={styles.mobileNavList}>
                    <li><Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About</Link></li>
                    <li><Link href="/products" className={styles.mobileNavLink} onClick={toggleMenu}>Products</Link></li>
                    <li><Link href="/gallery" className={styles.mobileNavLink} onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link></li>
                </ul>

                {/* Mobile WhatsApp Button */}
                <Link
                    href="https://wa.me/919876543210"
                    target="_blank"
                    className={styles.mobileWhatsappBtn}
                    aria-label="Contact on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </Link>
            </div>
        </>
    );
}
