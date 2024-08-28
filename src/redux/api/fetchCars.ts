import { Car } from '../../types/dataTypes';

export const fetchCars = async (): Promise<Car[]> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/cars`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Data:', data); 
        return Array.isArray(data.payload) ? data.payload : [];
    } catch (error) {
        console.error('Failed to fetch cars:', error);
        return [];
    }
};
