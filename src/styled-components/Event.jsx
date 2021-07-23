import { useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';

const Card = styled.article`
  transition: .3s cubic-bezier(0.47, 0, 0.75, 0.72);
  opacity: 0;
  transform: rotateY(45deg);
  cursor: pointer;
  padding: 1.6rem .6rem;
  .imgContainer {
    overflow: hidden;
    img {
      transition: .3s cubic-bezier(0.47, 0, 0.75, 0.72);
      width: 100%;
      height: 100%;
      max-height: 400px;
      display: block;
      object-fit: cover;
    }
  }
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
    span {
      font-style: italic;
      margin-bottom: .3rem;
    }
    .eventTitle {
      font-size: 2rem;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const Event = ({openFolder, info}) => {
  const [event, setEvent] = useState({});
  const eventRef = useRef(null);

  function viewAnimation(isView) {
    if (isView) {
      eventRef.current.style.cssText='opacity: 1; transform: rotateY(0deg);';
    } else {
      eventRef.current.style.cssText='opacity: 0; transform: rotateY(45deg);';
    }
  }

  useEffect(() => {
    setEvent(info);
  }, [info]);

  return (
    <Card ref={eventRef} onClick={() => openFolder(event)}>
      <InView as='div' threshold={.1} onChange={(isView) => viewAnimation(isView)}> 
        <div className='imgContainer'>
          <img src={event.img} alt={event.title}></img>
        </div>
        <header>
          <span>{event.schedule}</span>
          <h2 className='eventTitle'>{event.title}</h2>
          {event.author && <h2>/{event.author}</h2>}
        </header>
      </InView>
    </Card>
  );
}

export { Event };