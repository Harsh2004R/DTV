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


import DarkWeb from '../Pages/DarkWeb';




function AllRoutes() {
  return (
    <>
      <Routes>
      
        <Route path="/ai" element={<AI />}></Route>
        <Route path="/article" element={<ArticleList />}></Route>
        <Route path="/audio" element={<AudioPlayer />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/scareOncard" element={<ScareOnCard />}></Route>
        <Route path="/scareOnclip" element={<ScareOnClip />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/nav" element={<Nav />}></Route>
        <Route path="/nav2" element={<Navbar2 />}></Route>
        <Route path="/VideoComponent" element={<VideoComponent />}></Route> 
        <Route path="/DarkWeb" element={<DarkWeb />}></Route> 
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}
        {/* <Route path="/footer" element={<Footer />}></Route>  */}



      </Routes>
    </>
  )
}

export default AllRoutes