import React, { useState, useEffect } from 'react';
import Stream from '../stream/stream'
import { Link } from 'react-router-dom';
import './live.css'


if (!process.env.REACT_APP_SERVER_URI) {
  console.error("Please add SERVER_URI env var in your file")
}

const Live = () => {
  const [data, setData] = useState([]);
  const [stream, setStream] = useState(null);

  const streamLive = (channel) => {
    setStream(channel);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await fetch(process.env.REACT_APP_SERVER_URI + '/live');
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
        <div className='row '>
          <div className='col-lg-3 menu '>
            <h4 className="text-center"><img src="../logo.jpg" width="75" /></h4>
            <ul className="list-group list-group-flush">
              {data.map((channel, index) => (
                <li className="list-group-item" key={index} onClick={() => streamLive(channel)}>
                  {window.innerWidth >= 600 ? (
                    <>
                      <img src={channel.imageUrl} className='img-thumbnail me-3' alt={channel.title} />
                      {channel.title}
                    </>
                  ) : (
                    <Link to={`/live/${channel._id}`} className="link">
                      <img src={channel.imageUrl} className='img-thumbnail me-3' alt={channel.title} />
                      {channel.title}
                    </Link>
                  )}

                </li>
              ))}

            </ul>
          </div>
          <div className='col live d-none d-lg-block'>
            {stream ? ( <Stream stream={stream} />) :(
              <div className='row mt-5'>
                <h3>Welcome to Flooka TV</h3>
                <p className="text-muted">Watch free live TV channels online in your browser.</p>
                <p className="text-muted" dir="rtl">تحية طيبة، ندعوكم جميعًا لدعم فلسطين في هذه الأوقات الصعبة. تحتاج فلسطين إلى دعمنا وتضامننا لمواجهة التحديات التي تواجهها. دعونا نقف معًا في وجه الظلم ونساند الشعب الفلسطيني في نضاله من أجل العدالة والسلام. #SupportPalestine <img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQKAOsOQla26GPzlUjZQh_OGjvd_DNwPY2wHPgipKmn7Lw9NIFzCkPPEiLjJz4zFZg2" width="50" alt="palestine flag" /></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  );

}


export default Live;
