import { useState, useContext } from 'react';
import { ThemeCont } from '../context/ThemeContext';
import styled from 'styled-components';
import { Folder, SidePage1, SidePage2 } from './SidePage';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  .button {
    cursor: pointer;
    border: 1px solid black;
    padding: .3rem 1.6rem;
    font-weight: 300;
    background: white;
    width: fit-content;
    text-transform: uppercase;
  }
  #navWrapper {
    display: flex;
    flex-direction: row;
    padding: .6rem;
    position: relative;
    #openMenu {
      display: flex;
      background: transparent !important;
      cursor: pointer;
      z-index: 2;
      position: fixed;
      bottom: 1.3rem;
      left: .6rem;
      color: ${props => props.theme.main};
      border-color: ${props => props.theme.main};
      span {
      font-size: 2.5rem;
    }
    }
    #titleApp {
      font-size: 6rem;
      margin: auto;
      font-weight: 900;
      text-transform: uppercase;
      color: ${props => props.theme.main};
      text-decoration: none;
    }
  }
  #hamburger {
    z-index: 1;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    transform: translateX(-100%);
    transition: .3s cubic-bezier(0.47, 0, 0.75, 0.72);
    > div { 
      margin-bottom: 7rem;
      height: 100%;
      ul {
        margin: 0;
        padding-left: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        .hamburgerOption {
          margin-bottom: 1.6rem;
          padding-right: .1rem;
          display: flex;
          transition: .8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          .link {
            font-size: 2.5rem;
            margin-left: .6rem;
            color: black;
            text-decoration: none;
            display: flex;
          }
          #theme {
            margin-left: .6rem;
            border-color: black;
            background: ${props => props.theme.text} !important;
            width: 2.5rem;
            height: 2.5rem;
            > div {
              border-radius: 50%;
              width: 100%;
              height: 100%;
              background: ${props => props.theme.background};
            }
          }
        }
        .hamburgerOption:nth-child(2) {
          transition-delay: .2s;
        }
        .hamburgerOption:nth-child(3) {
          transition-delay: .3s;
        }
        .hamburgerOption:last-child {
          margin-bottom: 0;
          transition-delay: .4s;
        }
      }
    }
  }
  @media (hover: hover) {
    .link.button:hover {
      color: white !important;
      background-color: ${props => props.theme.main};
    }
  }
  @media (min-width: 920px) {
    #openMenu {
      display: none !important;
    }
    #hamburger {
      transform: translateX(0);
      > div {
        margin-bottom: 1.3rem;
        ul {
          flex-direction: row;
          .hamburgerOption {
            margin-bottom: 0;
            transform: translateX(0) !important;
            .link {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
`;

const Navbar = ({singleEvent}) => {
  const {setTheme} = useContext(ThemeCont);
  const [menu, setMenu] = useState(false);
  function openMenu() {
    if (!menu) {
      document.getElementById('openMenu').style.cssText='background-color: black !important; color: white !important; border-color: black !important;';
      let menuOptions = document.getElementsByClassName('hamburgerOption');
      for (let i = 0; i < menuOptions.length; i++) {
        const element = menuOptions[i];
        element.style.transform='translateX(100%)';
      }
      setMenu(true);
    } else {
      let menuOptions = document.getElementsByClassName('hamburgerOption');
      document.getElementById('openMenu').removeAttribute('style');
      for (let i = 0; i < menuOptions.length; i++) {
        const element = menuOptions[i];
        element.removeAttribute('style');
      }
      setMenu(false);
    }
  }

  function openSidePage(id) {
    let menuOptions = document.getElementsByClassName('hamburgerOption');
    document.getElementById('openMenu').removeAttribute('style');
    for (let i = 0; i < menuOptions.length; i++) {
      const element = menuOptions[i];
      element.removeAttribute('style');
    }
    document.body.style.overflow='hidden';
    let sidePages = document.getElementsByClassName('sidePage');
    for (let i = 0; i < sidePages.length; i++) {
      const element = sidePages[i];
      element.removeAttribute('style');
    }
    document.getElementsByClassName('sidePage')[id].style.transform='translateX(0)';
    setMenu(false);
  }

  return (
    <Nav>
      <div id='navWrapper'>
        <div id='openMenu' className='button' onClick={openMenu}>
          <span>{menu ? 'close' : 'menu'}</span>
        </div>
        <h1 id='titleApp'>cck</h1>
      </div>
      <div id='hamburger'>
        <div>
          <ul>
            <li onClick={setTheme} className='hamburgerOption'><div id='theme' className='button'><div></div></div></li>
            <li className='hamburgerOption'><a className='link button' href='https://www.instagram.com/elcckirchner/'>instagram</a></li>
            <li className='hamburgerOption'><span onClick={() => openSidePage(0)} className='link button'>Nosotros</span></li>
            <li className='hamburgerOption'><span onClick={() => openSidePage(1)} className='link button'>Donde estamos</span></li>
          </ul>
        </div>
      </div>
      <SidePage1 />
      <SidePage2 />
      <Folder info={singleEvent} />
    </Nav>
  );
}

export { Navbar };