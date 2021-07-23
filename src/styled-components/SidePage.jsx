import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SidePage = styled.div`
  position: fixed;
  inset: 0;
  top: 4.8rem;
  right: .6rem;
  left: .6rem;
  bottom: 6.6rem;
  display: flex;
  transform: translateX(150%);
  transition: .8s cubic-bezier(0.65, 0.05, 0.36, 1);
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    > div:first-child {
      display: flex;
      flex-direction: row;
      div:first-child {
        border: 1px solid black;
        border-bottom: none;
        background: ${props => props.theme.main};
        aspect-ratio: 1;
        .closeSide {
          border: none;
          background: none;
          cursor: pointer;
          h2 {
            margin: auto;
            display: block;
            font-weight: 300;
            color: white;
            text-transform: uppercase;
          }
        }
      }
      div:last-child {
        border-bottom: 1px solid black;
        width: -webkit-fill-available;
      }
    }
    .content {
      border: 1px solid black;
      background: white;
      border-top: none;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      .pageTitle {
        position: sticky;
        top: 0;
        border-bottom: 1px solid black;
        background: ${props => props.theme.main};
        color: white;
        padding: .6rem 1.3rem;
        h2 {
          font-weight: 300;
          text-transform: uppercase;
        }
      }
      .info {
        box-sizing: border-box;
        padding: 1.3rem 1.2rem;
        color: black;
        h2 {
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        h3 {
          font-style: italic;
          margin-bottom: 1rem;
        }
        .goTo {
          display: flex;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid ${props => props.theme.main};
          a {
            color: ${props => props.theme.main};
            text-decoration: none;
            cursor: pointer;
            padding: .3rem 1.6rem;
            font-weight: 300;
            background: white;
            width: fit-content;
            text-transform: uppercase;
            border: 1px solid ${props => props.theme.main};
          }
        }
        .imgContainer {
          height: fit-content;
          margin-bottom: 1rem;
          img {
            display: block;
            object-fit: scale-down;
          }
        }
        p {
          margin: 0;
          color: black;
        }
      }
      .info_map {
        height: 100%;
        .map {
          height: 100%;
        }
      }
    }
    .content::-webkit-scrollbar {
      width: .8rem;
    }
    .content::-webkit-scrollbar-track {
      background: white;
      border-left: 1px solid black;
    }
    .content::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.main};
      border-left: 1px solid black;
    }
  }
  @media(hover: hover) {
    .closeSide:hover {
      background: white !important;
      h2 {
        color: black !important;
      }
    }
    .goTo a:hover {
      background: ${props => props.theme.main} !important;
      color: white !important;
    }
  }
  @media (min-width: 920px) {
    > div {
      width: 60vw !important;
      .info {
        .imgContainer {
          float: left !important;
          width: 50% !important;
          margin-right: 1rem !important;
        }
      }
    }
  }
`;


const SidePage1 = () => {
  function closeSide() {
    document.body.removeAttribute('style');
    document.getElementById('nosotros').getElementsByClassName('content')[0].scrollTop=0;
    document.getElementById('nosotros').removeAttribute('style');
  }

  return (
    <SidePage className='sidePage' id='nosotros'>
      <div>
        <div>
          <div>
            <button onClick={closeSide} className='closeSide'><h2>x</h2></button>
          </div>
          <div></div>
        </div>
        <div className='content'>
          <div className='pageTitle'>
            <h2>Nosotros</h2>
          </div>
          <div className='info'>
            <p>  
              El Centro Cultural Kirchner es un espacio multidisciplinar, abierto e inclusivo con una propuesta artística y educativa, federal, plural y al alcance de todos. Como institución cultural asumimos nuestro rol de agente político, la condición de espacio público y tomamos partido por esta transformación vital y comunitaria que el presente reclama.<br/>
              <br/>El Kirchner se postula como campo de inflexión para que el arte, el archivo, la memoria, la imaginación y las corporalidades puedan desarrollar hipótesis, rumbos, estrategias comunes y discusiones para habitar el presente, con un programa que incluye: conciertos de orquestas sinfónicas, recitales, grandes exhibiciones de artes visuales, eventos de literatura, poesía, baile, teatro y performance, artes electrónicas y nuevas tecnologías, programación específica para infancias, talleres, festivales, proyecciones, homenajes, ferias, ciclos de videoclips y más.
            </p>
          </div>
        </div>
      </div>
    </SidePage>
  );
}

const SidePage2 = () => {
  function closeSide() {
    document.body.removeAttribute('style');
    document.getElementById('dondeEstamos').removeAttribute('style');
  }

  return (
    <SidePage className='sidePage' id='dondeEstamos'>
      <div>
        <div>
          <div>
            <button onClick={closeSide} className='closeSide'><h2>x</h2></button>
          </div>
          <div></div>
        </div>
        <div className='content'>
          <div className='pageTitle'>
            <h2>donde estamos</h2>
          </div>
          <div className='info info_map'>
            <div className='map'>
              <iframe title='mapa' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.086939252718!2d-58.3697291!3d-34.6036119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff14e7edde2f5152!2sCentro%20Cultural%20Kirchner!5e0!3m2!1ses!2sar!4v1627051531042!5m2!1ses!2sar' width='100%' height='100%' style={{border:0}} allowfullscreen='' loading='lazy'></iframe>
            </div>
          </div>
        </div>
      </div>
    </SidePage>
  );
}

const Folder = ({info}) => {
  const [event, setEvent] = useState({});

  function closeSide() {
    document.body.removeAttribute('style');
    document.getElementById('folder').getElementsByClassName('content')[0].scrollTop=0;
    document.getElementById('folder').removeAttribute('style');
  }

  useEffect(() => {
    setEvent(info);
  }, [info]);

  return (
    <SidePage className='sidePage' id='folder'>
      <div>
        <div>
          <div>
            <button onClick={closeSide} className='closeSide'><h2>x</h2></button>
          </div>
          <div></div>
        </div>
        <div className='content'>
          <div className='info'>
            <h3>{event.schedule}</h3>
            <h2>{event.title}</h2>
            <div className='goTo'>
              <a href={event.route_title}>Ver ficha completa</a>
            </div>
            <div className='imgContainer'>
              <img width='100%' height='100%' src={event.img} alt={event.title}></img>
            </div>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </SidePage>
  );
}

export { SidePage1, SidePage2, Folder };