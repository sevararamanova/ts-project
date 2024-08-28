import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { fetchCars } from '../../redux/api/fetchCars';
import { Car } from '../../types/dataTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Footer from '../../components/footer/Footer'
import './likedPage.css';

const LikedPage = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const likedCards = useSelector((state: RootState) => state.likedCards.likedCards);

    useEffect(() => {
        const getCars = async () => {
            try {
                const allCars = await fetchCars();
                console.log('All Cars:', allCars);
                const filteredCars = allCars.filter(car => likedCards.includes(car._id));
                setCars(filteredCars);
            } catch (error) {
                console.error('Error fetching cars:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getCars();
    }, [likedCards]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='liked'>
            <div className='container'>
                <div className="liked-page">
                    <h2>Liked Cars</h2>
                    {cars.length ? (
                        <div className="cars-grid">
                            {cars.map(car => (
                                <div key={car._id} className="car-card">
                                    <img src={car.thumbnail} alt={car.name} />
                                    <h3>{car.name}</h3>
                                    <p>{parse(car.description)}</p>
                                    <div className="price">${car.price}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>No cars available</div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LikedPage;
