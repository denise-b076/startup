import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-dark text-light'>
    <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
            <a className="navbar-brand" href="#">Tint-Hint</a>
            <menu className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="index.html">Login</a></li>
                <li className="nav-item"><a className="nav-link" href="palette_maker.html">Make Palettes</a></li>
                <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                <li className="nav-item"><a className="nav-link" href="inspire.html">Inspire</a></li>
            </menu>
        </nav>
    </header>

    <main>
        App components go here           
    </main>

    <footer className="bg-dark text-white-50">
        <div className="container-fluid">
            <span className="text-reset">Denise Braithwaite</span>
            <a className="text-reset" href="https://github.com/denise-b076/startup/tree/main">GitHub Repo</a>
        </div>
    </footer>
  </div>
  );
}