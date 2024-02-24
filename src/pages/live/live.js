import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './live.css'
const Live = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await fetch('http://localhost:8080/live');
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
      <div className="container ">
        <div className='row'>
          <div className='col-lg-6 mx-auto'>
            <h3>Live</h3>
            <ul class="list-group list-group-flush">
              {data.map((card, index) => (
                <li class="list-group-item" key={index}>
                  <Link to={`/stream/${card._id}`} className="link"><img src={card.imageUrl} className='img-thumbnail me-3' />{card.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}


export default Live;
