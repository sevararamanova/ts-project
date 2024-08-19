// components/CardComponent.jsx
import { useState } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Car } from '../../types/dataTypes';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom'; // useNavigate import qilish
import './card.css'

const CardComponent = ({ car }: { car: Car }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate(); // useNavigate hookini ishlatish

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleRentNow = () => {
    navigate(`/rent/${car._id}`); // Car ID bilan dinamik sahifaga o'tish
  };

  return (
    <div className="card">
      <img className="card-cover" src={car.thumbnail} alt={car.name} />
      <div className="card-header">
        <div className="carName">{car.name}</div>
        <div className="like-button" onClick={handleLike}>
          {liked ? <HeartFilled style={{ color: 'red', fontSize: '20px' }} /> : <HeartOutlined style={{ fontSize: '20px' }} />}
        </div>
      </div>
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
