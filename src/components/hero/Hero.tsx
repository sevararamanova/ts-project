import React, { useEffect, useState } from 'react';
import icons from '../../images/icons.png';
import { Carousel } from 'antd';
import axios from 'axios';
import './hero.css';

const BASE_URL = 'http://13.51.206.62:8000/api';

interface Car {
  _id: string;
  name: string;
  images: string[];
  description: string;
  price?: number;
  discount?: number;
}

const Hero: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<{ payload: Car[] }>(`${BASE_URL}/cars`);
        setCars(response.data.payload);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error fetching cars:', error.message);
          setError('Failed to load cars. Please check the console for more details.');
        } else {
          console.error('Unexpected error:', error);
          setError('An unexpected error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className='hero__content'>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <Carousel arrows dotPosition="bottom" infinite={false} className="hero-carousel">
            {cars.flatMap(car =>
              car.images.map((image, index) => (
                <div key={car._id + '-' + index} className="carousel-item">
                  <img src={image} alt={`Car ${car.name}`} className="carousel-image" />
                  <div className="overlay">
                    <span className="car-name">{car.name}</span>
                  </div>
                </div>
              ))
            )}
          </Carousel>
        )}
        <div className='hero__icons'>
            <img src={icons} width={40}/>
        </div>
         </div>
      </div>
      
    </div>
  );
};

export default Hero;
