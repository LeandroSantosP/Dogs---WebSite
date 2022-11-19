import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Photo from './Components/Photo/Photo'

import Login from './Components/login/Login'
import User from './Components/User/User';
import{ UserStorege } from './UserContext'
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <UserStorege>
          <Header /> 
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route path='foto/:id' element={<Photo />} />
              <Route path="conta/*" element={<User /> } />
              <Route path="perfil/:user" element={<UserProfile /> } />
              <Route path="/*" element={<NotFound /> } />
            </Routes>
          </main>
          <Footer />
        </UserStorege>
      </BrowserRouter>
    </div>
  );
}

export default App;

