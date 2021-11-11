import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import { LayoutContext } from '../../App';

export default function Header() {
  const history = useHistory();

  function handleNavigate() {
    history.push('/');
  }

  const { onToggleTheme, selectedTheme } = useContext(LayoutContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button onClick={handleNavigate} style={{ color: '#fff' }}>Voltar para Home</button>
    </Container>
  );
}