import React, { useState, useEffect } from 'react';
import Stream from '../stream/stream'
import './live.css'
const Live = () => {
  const [data, setData] = useState([]);
  const [stream, setStream] = useState(null);

  const streamLive = (channel) => {
    console.log(channel);
    setStream(channel);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await fetch(process.env.SERVER_URI + '/live');
        const jsonData = await response.json();
        setData(jsonData); // Assuming your API returns an array of objects similar to your sample data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="live">
      <div className="container-fluid">
        <div className='row'>
          <div className='col-lg-3 menu'>
            <h4 className="text-center">Tv Stream</h4>
            <ul className="list-group list-group-flush " >
              {data.map((channel, index) => (
                <li className="list-group-item" key={index} onClick={() => streamLive(channel)}>
                  <img src={channel.imageUrl} className='img-thumbnail me-3' />{channel.title}
                </li>
              ))}
            </ul>
          </div>
          <div className='col live'>
            {stream && <Stream stream={stream} />}
          </div>
        </div>
      </div>
    </div>
  );

}


export default Live;
