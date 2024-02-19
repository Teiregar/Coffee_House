import S from './App.module.css';
import {Home} from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes, Navigate} from "react-router-dom";
import Coffee from "./Components/Menu/Coffee/Coffee";
import Tea from "./Components/Menu/Tea/Tea";
import Dessert from "./Components/Menu/Dessert/Dessert";
import {Buffer} from "node:buffer";
import Burger from "./Components/Footer/Burger/Burger";

function App() {
  return (
    <div className={S.App}>
      <div className={S.AppWidth}>

        <Header/>
        <Routes>
          <Route path='/Coffee_House/' element={<Home/>}/>
          <Route path='/Coffee_House/menu/' element={<Coffee/>}/>
          <Route path='/Coffee_House/menu/tea' element={<Tea/>}/>
          <Route path='/Coffee_House/menu/dessert' element={<Dessert/>}/>
          {/*<Route path='/Coffee_House/404' element={<h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>*/}
          {/*<Route path='*' element={<Navigate to='/404'/>}/>*/}
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
