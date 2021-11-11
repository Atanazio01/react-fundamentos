import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  margin-top: ${({theme}) => theme.spacing.medium};
  padding: ${({theme}) => theme.spacing.medium};
  border-radius: 4px;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: ${({theme}) => theme.spacing.medium};
    }
  }
`;