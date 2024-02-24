import React, { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import XMLParser from 'react-xml-parser';
import './stream.css';


const convertDate = (dateString) => {
  const hours = dateString.substring(8, 10);
  const minutes = dateString.substring(10, 12);

  return `${hours}:${minutes}`;
}

const Stream = (streamUrl) => {
  const { id } = useParams();

  const [streamData, setStreamData] = useState({
    data: null,
    isHls: false,
  });
  const { data, isHls  } = streamData;
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetch(`http://localhost:8080/live/${id}`);
          const jsonData = await response.json();
          setStreamData(prevState => ({
            ...prevState,
            data: jsonData,
            isHls: jsonData.streamUrl?.endsWith("m3u8"),
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id])


  return (
    <>
      {data && (
        <div className='row '>
          <div className='col-8'>
            {isHls ? (
              <ReactHlsPlayer
                src={data.streamUrl}
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
              />
            ) : (
              <ReactPlayer url={data.streamUrl} playing={true}  width="100%" height="80vh" />
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
                {data && data.program && data.program.length>0 ? data.program.map((program, index) => (
                  <small key={index}>
                    <li className="list-group-item"><b>{program.title[0]._}</b>  {convertDate(program.$.start)}-{convertDate(program.$.stop)}</li>
                  </small>
                )) : (<p>Aucun Programme à afficher pour le moment</p>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Stream;
