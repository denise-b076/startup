import React from 'react';
import Button from 'react-bootstrap/Button';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
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
        {authState !== AuthState.Unknown && <h2>Welcome to Tint-Hint!</h2>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
        </div>            
    </main>
  );
}