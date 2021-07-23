import styled from 'styled-components';

const Loading = styled.div `
  position: fixed;
  inset: 0;
  z-index: 10;
  background: ${props => props.theme.background};
  display: grid;
  place-items: center;
  h1 {
    font-size: 6rem;
    margin: auto;
    font-weight: 900;
    text-transform: uppercase;
    color: ${props => props.theme.main};
  }
`;

const LoadingView = () => {
  return (
    <Loading>
    <h1>CCK</h1>
    </Loading>
  );
}

export { LoadingView as Loading };