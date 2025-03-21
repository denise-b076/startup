import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Gallery } from './gallery/gallery';
import { Palette } from './palette_maker/palette_maker';
import { Inspire } from './inspire/inspire';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    const [color, setColor] = React.useState({
        colorOne: localStorage.getItem('colorOne') || "red",
        colorTwo: localStorage.getItem('colorTwo') || "red",
        colorThree: localStorage.getItem('colorThree') || "red",
        colorFour: localStorage.getItem('colorFour') || "red",
        fromTable: false,
        firstVisit: true
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
                    {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink className="nav-link" to="palette_maker">Make Palettes</NavLink></li>)}
                    {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink className="nav-link" to="gallery">Gallery</NavLink></li>)}
                    {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink className="nav-link" to="inspire">Inspire</NavLink></li>)}
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path='/' element=
            {<Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
                color={color}
                setColor={setColor}
            />} exact/>
            <Route path='/gallery' element={<Gallery 
            color={color}
            setColor={setColor}
            />} />
            <Route path='/palette_maker' element={<Palette 
            color={color}
            setColor={setColor}
            userName={userName}
            />} />
            <Route path='/inspire' element={<Inspire 
            color={color}
            setColor={setColor}
            />} />
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