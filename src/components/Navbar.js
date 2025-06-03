import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/experience', label: 'Experience' },
    ];

    return (
        <nav className="bg-white shadow fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
                    MyPortfolio
                </Link>
                <button 
                    className="sm:hidden text-gray-800 focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className={`sm:flex space-x-6 items-center ${isOpen ? 'block' : 'hidden'}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="block mt-2 sm:mt-0 text-gray-800 hover:text-blue-500 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;