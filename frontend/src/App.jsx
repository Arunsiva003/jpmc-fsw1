import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// import { useUser } from "./userContext"; // Import useUser hook
import React, { useState, createContext } from "react";
import useUserId from "./useUserId";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Programs from "./pages/Course/Course";
import NotFound from "./pages/notfound/NotFound";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ProgramDetails from "./pages/ProgramDetail/programdetail";
import VolunteerPage from "./pages/Volunteer/volunteer";
import DonationPage from "./pages/Donate/Donate";
import PaymentPage from "./pages/Donate/Payment";
import StoriesPage from "./Stories/Stories";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard"; // Assuming you have an AdminDashboard component
import Login from "./pages/Login/Login";
import Logout from "./pages/Login/Logout";
import NavigationButtons from "./pages/Admin/FirstPage";
import ProgramsDashboard from "./pages/Admin/Programs";
import VolunteerTable from "./pages/Admin/Volunteers";
import DonationDashboard from "./pages/Admin/Donations";

export const AuthContext = createContext();
const App = () => {
  
  const { userId, setStoredUserId, clearStoredUserId } = useUserId();


  const login = (userId) => {
    setStoredUserId(userId);
  };

  const logout = () => {
    clearStoredUserId(null);
  };
  console.log(userId ,"in App.jsx");
  return (
    <BrowserRouter>
    <AuthContext.Provider value={{ userId, login, logout }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="programs" element={<Programs/>}/>
        <Route path="programdetails" element={<ProgramDetails/>}/>
        <Route path="volunteer" element={<VolunteerPage/>}/>
        <Route path="donate" element={<DonationPage/>}/>
        <Route path="payment" element={<PaymentPage/>}/>
        <Route path="stories" element={<StoriesPage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="admin" element={userId? <NavigationButtons /> : <Navigate to='/login'/>}/>
        {/* <Route path="admin" element={user? <VolunteerPage/> : <Login/>}/> Check if user is authenticated */}
        {/* <Route path="admin/firstpage" element={user? <NavigationButtons /> : <Login/>}/> */}
        <Route path="admin/programs" element={userId != null ? <ProgramsDashboard/> : <Navigate to='/login'/>}/>
        <Route path="admin/volunteers" element={userId !=null ? <VolunteerTable/> :  <Navigate to='/login'/>}/>
        <Route path="admin/donations" element={userId? <DonationDashboard/> :<Navigate to='/login'/>}/>
        <Route path="admin/logout" element={userId? <Logout/> : <Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
