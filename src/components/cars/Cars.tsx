import { Typography } from 'antd';
import { Car } from '../../types/dataTypes';
import CardComponent from '../../components/card/Card';
import './cars.css';

const { Title } = Typography;

interface CarsProps {
    title: string;
    data: Car[] | undefined;
    isLoading: boolean;
}

const Cars = ({ data, title, isLoading }: CarsProps) => {
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="cars">
            <div className="container">
                <Title level={1}>{title}</Title>
                {data && data.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
                        {data.map(car => (
                            <CardComponent key={car._id} car={car} />
                        ))}
                    </div>
                ) : (
                    <div>No cars available</div>
                )}
            </div>
        </div>
    );
};

export default Cars;
