import React, { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from 'react-player'
import './stream.css';


const convertDate = (dateString) => {
  const hours = dateString.substring(8, 10);
  const minutes = dateString.substring(10, 12);

  return `${hours}:${minutes}`;
}

const Stream = ({stream}) => {

  const [streamData, setStreamData] = useState({
    data: null,
    isHls: false,
    isFrame: false,
  });
  const { data, isHls, isFrame } = streamData;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setStreamData(prevState => ({
          ...prevState,
          data: stream,
          isHls: stream.streamUrl?.endsWith("m3u8"),
          isFrame: stream.streamUrl && (stream.streamUrl.includes("elahmad") || stream.streamUrl.includes("aflam4you") || stream.streamUrl.includes("3rbcafee"))
        }));
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [stream])


  return (
    <>
      {data && (
        <div className='row '>
          <div className='col-lg-8 col-12'>

            {isHls ? (
              <ReactHlsPlayer
                src={data.streamUrl}
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
              />
            ) : isFrame ?
              (<iframe width="100%" style={{ height: '80vh', border: 'none' }} src={data.streamUrl} allowFullScreen allow="autoplay; fullscreen; picture-in-picture;  encrypted-media"></iframe>) :
              (<ReactPlayer url={data.streamUrl} playing={true} controls={true} width="100%" height="80vh" />
              )}
          </div>
          <div className='col'>
            <div className='d-flex'>
              <img src={data.imageUrl} className='img me-2' />
              <h3>{data.title}</h3>
            </div>
            <p>{data.description}</p>
            <h6>Programme</h6>
            <div className="program">
              <ul className="list-group">
                {data && data.program && data.program.length > 0 ? data.program.map((program, index) => (
                  <small key={index}>
                    <li className="list-group-item"><b>{program.title[0]._}</b>  {convertDate(program.$.start)}-{convertDate(program.$.stop)}</li>
                  </small>
                )) : (<p>Aucun Programme à afficher pour le moment</p>)}
              </ul>
            </div>
          </div>
        </div >
      )}
    </>
  );
}

export default Stream;
