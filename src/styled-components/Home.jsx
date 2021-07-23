import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Event } from './Event';
import { Navbar } from './Navbar';
import { Loading } from './Loading';
import media from '../info';

const HomeWrapper = styled.div`
  padding-bottom: 4rem;
  #content {
    display: grid;
    grid-template-columns: repeat(1, auto);
    transition: 1s cubic-bezier(0.47, 0, 0.75, 0.72);
    padding: 1.3rem .6rem;
  }
  @media (min-width: 920px) {
    #content {
      grid-template-columns: repeat(4, 25%);
      > article:nth-child(3n+1) {
        grid-column: span 2;
        grid-row: span 2;
      }
    }
  }
`;

const Home = () => {
  const [events, setEvents] = useState([]);
  const [singleEvent, setSingleEvent] = useState({});
  const [loading, setLoading] = useState(true);

  function openFolder(event) {
    setSingleEvent(event);
    document.body.style.overflow='hidden';
    let sidePages = document.getElementsByClassName('sidePage');
    for (let i = 0; i < sidePages.length; i++) {
      const element = sidePages[i];
      element.removeAttribute('style');
    }
    document.getElementById('folder').style.transform='translateX(0)';
  }

  useEffect(() => {
    setEvents(media);
    document.body.style.overflow='hidden';
    setTimeout(() => {
      document.body.removeAttribute('style');
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <HomeWrapper>
        <Navbar singleEvent={singleEvent}/>
        <div id='content'>
          {events.map(e => <Event openFolder={openFolder} info={e}/>)}
        </div>
      </HomeWrapper>
    </>
  );
}

export { Home };
