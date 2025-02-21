import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Gallery } from './gallery/gallery';
import { Palette } from './palette_maker/palette_maker';
import { Inspire } from './inspire/inspire';

export default function App() {
    const [color, setColor] = React.useState({
        colorOne: "red",
        colorTwo: "red",
        colorThree: "red",
        colorFour: "red"
    }
    );

  return (
    <BrowserRouter>
        <div className='body bg-dark text-light'>
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <div className="navbar-brand" href="#">Tint-Hint</div>
                <menu className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" to="">Login</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="palette_maker">Make Palettes</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="gallery">Gallery</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="inspire">Inspire</NavLink></li>
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact/>
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/palette_maker' element={<Palette 
            color={color}
            setColor={setColor}
            />} />
            <Route path='/inspire' element={<Inspire />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
            <div className="container-fluid">
                <span className="text-reset">Denise Braithwaite</span>
                <a className="text-reset" href="https://github.com/denise-b076/startup/tree/main">GitHub Repo</a>
            </div>
        </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }