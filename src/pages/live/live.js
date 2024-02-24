import React , { useState, useEffect }from 'react';
import Card from '../../components/card/card';

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
      <div className="container">
        <h3>Live</h3>
        <div className='row d-flex justify-content-center'>
          {data.map((card, index) => (
            <div className='col-3' key={index}>
              <Card imageUrl={card.imageUrl} title={card.title} text={card.description} _id={card._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}


export default Live;
