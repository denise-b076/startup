import React from 'react';
import Button from 'react-bootstrap/Button';

export function Login() {
  return (
    <main className="container-fluid text-center">
        <img className="picture_box" src="placeholder.png" alt="random_artwork" />
        <div className="login_form">
        <h2>Welcome to Tint-Hint!</h2>
        <form method="get">
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" placeholder="password" />
            </div>
            <Button href="/palette_maker">Login</Button>
            <Button className="btn btn-secondary" href="/palette_maker">Create</Button>
        </form>
        </div>            
    </main>
  );
}