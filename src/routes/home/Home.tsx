import Cars from "../../components/cars/Cars";
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer'
import { useGetCarsQuery } from "../../redux/api/car-api"

const Home = () => {
  const { data, isLoading } = useGetCarsQuery();

  console.log(data?.payload)

  return (
    <div>
      <Nav />
      <Hero />
      <Cars data={data?.payload} isLoading={isLoading} title={"Popular cars"} />
      <Footer />
    </div>
  )
}

export default Home