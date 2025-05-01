import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from 'react-icons/fi';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="p-3 focus:outline-none"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <FiX className="w-6 h-6 text-gray-800" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          ></div>
          
          <div className="relative w-64 bg-white h-full shadow-xl">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 focus:outline-none"
              aria-label="Fechar menu"
            >
              <FiX className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="pt-16 px-4 space-y-2">
              <div className='border-b border-gray-200'></div>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block px-3 py-3 text-lg text-gray-800 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Formulário de Contato
              </Link>
              <div className='border-b border-gray-200'></div>
              <Link
                to="/contacts"
                onClick={toggleMenu}
                className="block px-3 py-3 text-lg text-gray-800 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Lista de Contatos
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
