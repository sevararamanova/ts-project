import { Car } from "../../types/dataTypes";
import { Typography } from "antd";
import Card from "../card/Card";
import './cars.css'

const {Title} = Typography

type Props = {
    title: string,
    data: Car[] | undefined,
    isLoading: boolean
}

const Cars = ({data, title, isLoading} : Props) => {
  return (
    <div className="cars">
    <div className="container">
        <Title level={2}>{title}</Title>

        {
            isLoading ? <div>Loading</div> 
                : 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
            {
                data?.map(car => 
                    <Card key={car._id} car={car}/>
                )
            }
            </div>
        }
    </div>
    </div>
  )
}

export default Cars