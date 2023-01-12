import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Routines from './components/Routines';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';
import UserRoutines from './components/UserRoutines';
import Logout from './components/Logout';
import CreateRoutine from './components/CreateRoutine';
import Activities from './components/Activities';
import CreateActivity from './components/CreateActivity';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userToken = localStorage.getItem('userToken');

  useEffect(() => {
    async function fetchData() {
      if (userToken)
        setIsLoggedIn(true);
    }
    fetchData();
  }, []);

  return (
    <div id="container">
      <BrowserRouter>
        <div id="top">
          <header>
            Fitness Tracker
          </header>
          <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Routines />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/activities" element={<Activities isLoggedIn={isLoggedIn} />} />
            <Route path="/user-routines" element={<UserRoutines isLoggedIn={isLoggedIn} />} />
            <Route path="/create-routine" element={<CreateRoutine />} />
            <Route path="/create-activity" element={<CreateActivity />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
