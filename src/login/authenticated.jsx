import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
      })
      .finally(() => {
        localStorage.removeItem('userName');
        localStorage.removeItem('firstVisit');
        localStorage.removeItem('colorOne');
        localStorage.removeItem('colorTwo');
        localStorage.removeItem('colorThree');
        localStorage.removeItem('colorFour');
        props.setColor(color => ({...color, firstVisit: true}));
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/palette_maker')}>
        Create
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
