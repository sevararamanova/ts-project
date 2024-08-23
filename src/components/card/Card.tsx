// components/CardComponent.jsx
import { useState } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Car } from '../../types/dataTypes';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom'; 
import './card.css'

const CardComponent = ({ car }: { car: Car }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate(); 

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleRentNow = () => {
    navigate(`/rent/${car._id}`); 
  };

  return (

  
        <div className='card'>
       <div className="card-header">
        <div className="carName">{car.name}</div>
        <div className="like-button" onClick={handleLike}>
          {liked ? <HeartFilled style={{ color: 'red', fontSize: '26px' }} /> : <HeartOutlined style={{ fontSize: '26px' }} />}
        </div>
      </div>


      <img className="card-cover" src={car.thumbnail} alt={car.name} />
     
      
      <div className="description-container">
        <div className="card-description">
          {parse(car.description)}
        </div>
      </div>


      <div className="card-footer">
        <div className="price">${car.price}</div>
        <Button type="primary" size="large" className="rent-button" onClick={handleRentNow}>Rent Now</Button>
      </div>
      </div>
  

  );
};

export default CardComponent;
