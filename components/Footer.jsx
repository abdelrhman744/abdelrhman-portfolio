const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-600">© {new Date().getFullYear()} Abdelrhman Hany. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;