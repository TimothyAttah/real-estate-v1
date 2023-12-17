import styled from 'styled-components';

export const NavMenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  a {
    font-size: 0.9rem;
    transition: ${({ theme }) => theme.transitions.transitionPrimary};

    :hover {
      color: ${({ theme }) => theme.colors.colorBackground2};
    }
  }
`;
