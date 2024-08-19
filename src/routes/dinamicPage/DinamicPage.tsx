import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Car } from '../../types/dataTypes';
import './dinamicPage.css'; 

const DinamicPage: React.FC = () => {
  const { carId } = useParams<{ carId: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        if (!carId) {
          throw new Error('Car ID is missing');
        }

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/cars/${carId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        if (data.payload && typeof data.payload === 'object') {
          setCar(data.payload as Car);
        } else {
          console.error('Unexpected payload format:', data.payload);
        }
      } catch (error) {
        console.error('Car data fetching error:', error);
      }
    };

    fetchCarDetails();
  }, [carId]);

  const handleLike = () => {
    setLiked(!liked);
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rent-page">
      <img className="rent-page-cover" src={car.thumbnail} alt={car.name} />
      <div className="rent-page-header">
        <div className="carName">{car.name}</div>
        <div className="like-button" onClick={handleLike}>
          {liked ? <HeartFilled style={{ color: 'red', fontSize: '20px' }} /> : <HeartOutlined style={{ fontSize: '20px' }} />}
        </div>
      </div>
      <div className="rent-page-description">
        <p>{car.description}</p>
      </div>
      <div className="rent-page-footer">
        <div className="price">${car.price}</div>
        <Button type="primary" size="large" className="rent-button">Rent Now</Button>
      </div>
    </div>
  );
};

export default DinamicPage;
