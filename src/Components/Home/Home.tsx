import Enjoy from "./Body/Enjoy/Enjoy";
import S from './Home.module.css'
import {Slider} from "./Body/Favorite-coffee/Favorite-coffee";
import About from "./Body/About/About";
import MobileApp from "./Body/MobileApp/MobileApp";


export const Home = () => {
  return (
    <div className = {S.homePage}>
      <Enjoy/>
      <Slider/>
      <About/>
      <MobileApp/>
    </div>
  )
}