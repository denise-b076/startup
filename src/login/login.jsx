import React from 'react';

export function Login() {
  return (
    <main className="container-fluid text-center">
        <img className="picture_box" src="placeholder.png" alt="random_artwork" />
        <div className="login_form">
        <h2>Welcome to Tint-Hint!</h2>
        <form method="get" action="palette_maker.html">
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-secondary">Create</button>
        </form>
        </div>            
    </main>
  );
}