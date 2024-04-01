
import { useState,useEffect } from 'react'
import './style/Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Use setMenuOpen para atualizar o estado
    }

    const handleScroll = () => {
        const shouldBeVisible = window.scrollY > 20;
        if (shouldBeVisible !== isVisible) {
            setIsVisible(shouldBeVisible);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen, isVisible]);

    return (
        <>
             <header className={`${isVisible ? 'visible' : ''}`}>
                <div className="header">
                    <img src="public\image\LogoTransptech.png" alt="Logo da empresa" />

                    <div  className={`headerItens ${menuOpen ? 'on' : ''}`}>
                        <div onClick={toggleMenu} className="menuBurger">
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                        <nav>
                            <ul>
                                <a href="">Sobre Nós</a>
                                <a href="">O que falam sobre nós</a>
                                <a href="">Preços</a>
                                <a href="">Contato</a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Fim do header */}
        </>
    )
}

export default Header;