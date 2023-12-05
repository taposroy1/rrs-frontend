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
import Gallery from "./components/RestaurantOwner/Gallery.jsx";
import Dashboard from "./components/RestaurantOwner/Dashboard.jsx";
import Menus from "./components/RestaurantOwner/Menus.jsx";
import Reports from "./components/RestaurantOwner/Reports.jsx";
import SetupTable from "./components/RestaurantOwner/SetupTable.jsx";


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
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/menus" element={<Menus/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/profileSetup" element={<ProfileSetup/>} />
        <Route path="/branch" element={<Branch/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/setup Table" element={<SetupTable/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
