import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Car } from '../../types/dataTypes';
import parse from 'html-react-parser';
import { RootState, AppDispatch } from '../../redux/store';
import { toggleLike } from '../../redux/slices/likedSlices';
import './card.css';

interface CardComponentProps {
    car: Car;
}

const CardComponent = ({ car }: CardComponentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); 
  const likedCards = useSelector((state: RootState) => state.likedCards.likedCards);
  const isLiked = likedCards.includes(car._id);

  const handleLike = () => {
      dispatch(toggleLike(car._id));
  };

  const handleRentNow = () => {
      navigate(`/rent/${car._id}`); 
  };

  return (
      <div className='card'>
        
          <div className="card-header">
              <div className="carName">{car.name}</div>
              <div className="like-button" onClick={handleLike}>
                  {isLiked ? <HeartFilled style={{ color: 'red', fontSize: '30px' }} /> : <HeartOutlined style={{ fontSize: '30px' }} />}
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
              <button type="button" className="rent-button" onClick={handleRentNow}>Rent Now</button>
          </div>
       
      </div>
  );
};


export default CardComponent;
