// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios'
import React, { useState, useEffect } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

// import for adding comment 
import AddComment from "./pages/AddComment/AddComment";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";


function App(props) {

  const [searchResults, setSearchResults] = useState([]); // let videos = []
  // const [filteredVideo, filterVideos] = useState(' '); //let filteredVideo = 'stand up comedy'
  const [currentVideoId, setCurrentVideoId] = useState([]);
  const [currentVideoTitle, setCurrentVideoTitle] = useState([]);
  const [currentVideoDescription, setCurrentVideoDescription] = useState([]);

  useEffect(() => {
    getSearchResults()
  }, [])

  async function getSearchResults(searchTerm="bob ross"){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyDwR9sq_J_2coyq7I-XMRCCi6sg_PwPhF0&part=snippet`)
    console.log(response.data.items)
    console.log(`${searchTerm}`)
    setSearchResults(response.data.items)
    // setVideos(response.data.results)
  }

  


  return (
    <div>
      
      <Navbar />
    
      <SearchBar getSearchResults={getSearchResults} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <VideoPlayer/>
              <HomePage 
              searchResults={searchResults}
              setCurrentVideoDescription={setCurrentVideoDescription}
              setCurrentVideoId={setCurrentVideoId}
              setCurrentVideoTitle={setCurrentVideoTitle}
              />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/addcomment" element={<PrivateRoute><AddComment /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
