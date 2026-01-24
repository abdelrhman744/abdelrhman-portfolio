import Button from "./Button";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#hero" className="font-bold text-xl text-black">Abdelrhman Hany</a>

                <nav className="hidden md:flex space-x-8">
                    {['ABOUT ME', 'SERVICES', 'WORKS', 'CONNECT'].map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                            className="uppercase tracking-wider text-black hover:underline"
                        >
                            [ {item} ]
                        </a>
                    ))}
                </nav>

                <Button variant="ghost" size="sm">
                    Contact Me ↗
                </Button>
            </div>
        </header>
    );
};

export default Navbar;
