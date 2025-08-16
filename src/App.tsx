import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contato', label: 'Contato' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      {/* Menu de Navegação */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#inicio" onClick={() => setActiveSection('inicio')}>
              AlexFeitoza
            </a>
          </div>
          
          {/* Botão do menu mobile */}
          <button 
            className={`menu-btn ${menuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Itens do menu */}
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main>
        <section id="inicio" className="section">
          <h1>Bem-vindo ao Meu Portfólio</h1>
          <p>Desenvolvedor Web Full Stack</p>
        </section>

        <section id="sobre" className="section">
          <h2>Sobre Mim</h2>
          <p>Conteúdo sobre você e sua experiência profissional.</p>
        </section>

        <section id="projetos" className="section">
          <h2>Meus Projetos</h2>
          <p>Alguns dos meus trabalhos recentes.</p>
        </section>

        <section id="habilidades" className="section">
          <h2>Habilidades</h2>
          <p>Minhas habilidades técnicas.</p>
        </section>

        <section id="contato" className="section">
          <h2>Entre em Contato</h2>
          <p>Como me encontrar.</p>
        </section>
      </main>
    </div>
  )
}

export default App
