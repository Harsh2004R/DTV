import React from 'react'
import { Routes, Route } from "react-router-dom";

import VideoComponent from '../Components/VideoComponent ';
import Nav from '../Components/Nav';
import Navbar2 from '../Components/Navbar2';
import Footer from "../Components/Footer";
import AI from "../Components/AI";
import ArticleList from '../Components/ArticleList';
import AudioPlayer from '../Components/AudioPlayer';
import Media from '../Components/Media';
import ScareOnCard from '../Components/ScareOnCard';
import ScareOnClip from "../Components/ScareOnClip";

import PrivateRoutes from './PrivateRoutes.jsx';
import DarkWeb from '../Pages/DarkWeb';
import DarkWebPay from '../Pages/DarkWebPay';
import DeathCause from '../Pages/DeathCause';
import DeathDate from '../Pages/DeathDate';
import Login from '../Pages/Login';
import Podcast from '../Pages/Podcast';
import React3DView from '../Pages/React3DView';
import ScareOn from '../Pages/ScareOn';
import ScareOnAdmin from '../Pages/ScareOnAdmin';
import SignUp from '../Pages/SignUp';
import Videos from '../Pages/Videos';
import Welcome from '../Pages/Welcome';
import Device from "../Components/Device";
import NotAllow from '../Components/NotAllow';
import DummyScareOnCard from '../Templates/DummyScareOnCard';
import DummyScareOnClip from '../Templates/DummyScareOnClip';
import Home from '../Pages/Home';
import Otp from "../Pages/Otp";
import Profile from '../Pages/Profile';
import SocialMedia from '../Pages/SocialMedia';
import PhotosPost from '../Components/PhotosPost';
import Reels from '../Components/Reels';
import ComingSoon from '../Pages/ComingSoon';
import Comments from '../Components/Comments';


import Topper from "../Components/Topper.jsx"
import Dashboard from "../Admin/Dashboard.jsx"
import Test from '../Pages/Test.jsx';
import UploadMedia from '../Pages/UploadMedia.jsx';
import UploadForm from '../Pages/UploadForm.jsx';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/ai" element={<AI />}></Route> */}
        {/* <Route path="/article" element={<ArticleList />}></Route> */}
        {/* <Route path="/audio" element={<AudioPlayer />}></Route> */}
        {/* <Route path="/media" element={<Media />}></Route> */}
        {/* <Route path="/scareOncard" element={<ScareOnCard />}></Route> */}
        {/* <Route path="/scareOnclip" element={<ScareOnClip />}></Route> */}
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/nav" element={<Nav />}></Route>
        <Route path="/nav2" element={<Navbar2 />}></Route>
        {/* <Route path="/VideoComponent" element={<VideoComponent />}></Route> */}
        <Route path="/DarkWeb" element={<DarkWeb />}></Route>
        <Route path="/pay" element={<DarkWebPay />}></Route>
        <Route path="/cause" element={<DeathCause />}></Route>
        <Route path="/date" element={<DeathDate />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Podcast" element={<Podcast />}></Route>
        <Route path="/tour" element={<React3DView />}></Route>
        <Route path="/ScareOn" element={<ScareOn />}></Route>
        <Route path="/ScareOnAdmin" element={<ScareOnAdmin />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Videos" element={<Videos />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/Device" element={<Device />}></Route>
        <Route path="/NotAllow" element={<NotAllow />}></Route>
        {/* <Route path="/DummyScareOnCard" element={<DummyScareOnCard />}></Route> */}
        {/* <Route path="/DummyScareOnClip" element={<DummyScareOnClip />}></Route> */}
        <Route path="/Otp" element={<Otp />}></Route>
        <Route path="/social" element={<SocialMedia />}></Route>
        {/* <Route path="/post" element={<PhotosPost />}></Route> */}
        <Route path="/reels" element={<Reels />}></Route>
        <Route path="/soon" element={<ComingSoon />}></Route>
        {/* <Route path="/comments" element={<Comments />}></Route> */}
        {/* <Route path="/top" element={<Topper />}></Route> */}
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/upload/media" element={<UploadMedia />}></Route>
        <Route path="/upload" element={<UploadForm />}></Route> 
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}

        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default AllRoutes