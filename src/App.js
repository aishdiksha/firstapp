import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Routes , Navigator, Navigate} from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';



function App() {
  return (
    <div>
       {/* <h1> My First React App !nice</h1>  */}
         {/* <Home>Home</Home>    */}
       

       <BrowserRouter>
            <Header />
                <Routes>
                    <Route element={<Home>Home</Home>} path="home" />
                    <Route element={<Login/>} path="Login" />
                    <Route element={<NotFound/>} path="notfound" />


                    <Route element={<Navigate to="/home" />} path="/" />
                    <Route element={<Navigate to="/login" />} path="/a" />
                    <Route element={<Navigate to="/notfound" />} path="*" />

                  </Routes>
                  

       </BrowserRouter>
    </div>
  );
}

export default App;
