"use client";
import React from "react";

const Navbar = () => { 
    const navLinks = [
        { name: 'Главная', path: '#hero' },
        { name: 'Услуги', path: '#services' },
        { name: 'Обо мне', path: '#about-me' },
        { name: 'Вузы', path: '#universities' },
        { name: 'Вопросы', path: '#faq' },
        { name: 'Отзывы', path: '#testimonial' },
        { name: 'Контакты', path: '#contact-block' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="font-[Montserrat]">
            <nav className={`fixed top-0 left-0 w-full flex items-center px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
            ${isScrolled 
                ? "bg-[#FCF9EA] shadow-md py-3 md:py-4" 
                : "bg-transparent py-4 md:py-6"
            }`}>             
    
                <div className="flex-1 flex justify-start">
                    <a href="/" className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-[#636024]">Logo</span>
                    </a>
                </div>      
                <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
                    {navLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.path} 
                            className="group relative text-[#636024] transition-colors duration-300 hover:text-[#5C0F07] whitespace-nowrap"
                        >
                            {link.name}                           
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#5C0F07] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>               
                
                <div className="flex-1 flex justify-end">
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#636024] text-2xl"
                        >
                            ☰
                        </button>
                    </div>
                </div>      
                <div className={`fixed top-0 left-0 w-full h-screen bg-[#FCF9EA] flex flex-col items-center justify-center gap-6 transition-all duration-500 z-[60]
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                        <button 
                            className="absolute top-4 right-4 text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ✕
                        </button>
                        {navLinks.map((link, i) => (
                            <a 
                                key={i} 
                                href={link.path} 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[#636024] text-lg hover:text-[#5C0F07] transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>

        </div>
    );
}

export default Navbar;