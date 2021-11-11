import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function Post() {
  const params = useParams(); // Pegar parâmetros da URL
  const { search } = useLocation(); // Pegar queryParams da URL
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return <h1>Post page</h1>;
}