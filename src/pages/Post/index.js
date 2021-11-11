import React, { useMemo } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

export default function Post() {
  const history = useHistory();

  function handleNavigate() {
    history.push('/posts');
  }

  const params = useParams(); // Pegar parâmetros da URL
  const { search } = useLocation(); // Pegar queryParams da URL
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <>
      <button onClick={handleNavigate} style={{ color: '#222' }}>Ir para a lista de posts</button>
      <h1>Post page</h1>
    </>
  );
}