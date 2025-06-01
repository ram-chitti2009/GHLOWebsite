import React from 'react';
function Footer() {
    return (
        <footer className="bg-gradient-to-r from-green-400 to-green-600 py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2025 Global Health Literacy Outreach (GHLO). All rights reserved.</p>
                <p className="text-sm">Website by IT @ GHLO</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 