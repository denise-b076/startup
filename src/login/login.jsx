import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange, color, setColor }) {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 100);
    fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=1&page=${random}&fields=id,title,image_id`)
      .then((response) => response.json())
      .then((responseData) => {
        const apiUrl = `${responseData.config.iiif_url}/${responseData.data[0].image_id}/full/843,/0/default.jpg`
        setImageUrl(apiUrl);
      })
      .catch();
  }, []);
  
  return (
    <main className="container-fluid text-center">
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='random image' />
        </div>
        <div className="login_form">
        {authState !== AuthState.Unknown && <h2>Welcome to Tint-Hint!</h2>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} color={color} setColor={setColor}onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
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