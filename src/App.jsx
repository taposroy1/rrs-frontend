import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page'
import LoginPage from './pages/login-page'
import VerifyPage from './pages/verify-page'
import RegisterPage from './pages/register-page'
import Reservation from "./components/RestaurantOwner/Reservation.jsx";
import Owner from "./pages/owner.jsx";
import ProfileSetup from "./components/RestaurantOwner/ProfileSetup.jsx";
import Branch from "./components/RestaurantOwner/Branch.jsx";
import RestaurantDetails from "./components/Restaurant-details/RestaurantDetails.jsx";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify/:email" element={<VerifyPage />} />
        <Route path="/restaurantDetails" element={<RestaurantDetails />} />


        //RestaurantOwnerPage
        <Route path="/owner" element={<Owner/>} />

        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/profileSetup" element={<ProfileSetup/>} />
        <Route path="/branch" element={<Branch/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
