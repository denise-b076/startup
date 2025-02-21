import React from 'react';
import Button from 'react-bootstrap/Button';

export function Login() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');

  React.useEffect(() => {
    setImageUrl(`placeholder.png`);
  }, []);
  
  return (
    <main className="container-fluid text-center">
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='random image' />
        </div>
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