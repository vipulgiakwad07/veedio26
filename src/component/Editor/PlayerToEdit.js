
/* New correcttion 1/07/2023 */ 
import React, { useRef, useState, useEffect } from "react";
import {Toolbar} from "./Toolbar";
import ReactPlayer from "react-player";
import Form from './form';
import "../PlayerComponent.css";
 import './PlayerToEdit.css'
 import {BsFillStopFill} from 'react-icons/bs'
 import {FaPlay} from 'react-icons/fa';
 import imagesmain from '../images/images main.jpg'
 import image1 from '../images/images (1).jpg'
 import image2 from '../images/images (2).jpg'
 import image3 from '../images/images (3).jpg'
 import image4 from '../images/images (4).jpg'
 import image7 from '../images/images (7).jpg'
 import image8 from '../images/images (8).jpg'
 import image9 from '../images/images (9).jpg'

import Properties from "./properties";

  export function PlayerToEdit (){

    const [selectedFile, setSelectedFile] = useState(null);
  
  const videoRef = useRef(null);


const handleTimeUpdate = (event) => {
  setCurrentTime(event.target.currentTime);
  setDuration(event.target.duration);
};
const timeLeft = duration - currentTime;
const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

 
  const handleSeek = (event) => {
  const video = videoRef.current;
  const seekTime = parseFloat(event.target.value);
  video.currentTime = seekTime;
  setCurrentTime(seekTime);
};
    
      const playerRef = useRef(null);
      
      const [seeking, setSeeking] = useState(false);
    
      const [scaleMarkers, setScaleMarkers] = useState([]);
    
      useEffect(() => {
        if (playerRef.current) {
          setDuration(playerRef.current.getDuration());
          const markerInterval = duration < 60 ? 5 : 10; // Set a suitable marker interval based on duration
          const markers = [];
          for (let i = 0; i <= duration; i += markerInterval) {
            markers.push(i);
          }
          setScaleMarkers(markers);
        }
      }, [duration]);
    
      const handleReady = () => {
        setDuration(playerRef.current.getDuration());
      };
    
      const handlePlay = () => {
        setSeeking(false);
      };
    
      const handlePause = () => {
        setSeeking(false);
      };
    
      const handleSeekMouseDown = () => {
        setSeeking(true);
      };
    
      const handleSeekChange = (e) => {
        const seekTime = parseFloat(e.target.value);
        setCurrentTime(seekTime);
      };
    
      const handleSeekMouseUp = () => {
        setSeeking(false);
        playerRef.current.seekTo(currentTime);
      };
    
      const handleProgress = (progress) => {
        if (!seeking) {
          setCurrentTime(progress.playedSeconds);
        }
      };
      useEffect(() => {
        if (playerRef.current) {
          setDuration(playerRef.current.getDuration());
          const markerInterval = duration < 60 ? 5 : 10; // Set a suitable marker interval based on duration
          const markers = [];
          for (let i = 0; i <= duration; i += markerInterval) {
            markers.push(i);
          }
          setScaleMarkers(markers);
        }
      }, [duration]);
    
    

      

      return (
        <div className="player">
         
          <div className='New-editorpage'>
         
         <div>
      <input type="file" onChange={handleFileChange} accept="audio/*, video/*" />
      <div>
        {selectedFile ? (
          <>
            <video ref={videoRef} onTimeUpdate={handleTimeUpdate} style={{width:"750px",height:"450px"}}>
              <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
            </video>
            <div>  
              <div className="properties">
                     <Properties /> </div>
              <button onClick={handlePlayPause} 
              style={{backgroundColor:"rgb(109, 220, 240)", fontSize:"1.6em" , marginBottom:"10px"}} 
              className="playbtn">{isPlaying ? 'Pause' : 'Play'}</button>
              </div>
              <div>
              

            </div>
          <span style={{marginRight:'16px',marginLeft:'16px',fontWeight:500}}>{formatTime(currentTime)}</span>
          <span>/</span>
          <span style={{marginLeft:'16px',fontWeight:500}}>{formatTime(timeLeft)}</span>
          </>
        ) : (
          <p>No file selected</p>
        )}
      </div>
      
    </div>
      </div>
      
           
          
          <div className="form-div"><Form /></div>
     
         
          <div className="grid-container">
          <div><img src={image1} alt="" width="500" height="600" className="grid-item">
          </img>
          <h3>Project 1</h3>
          </div> 
          <div><img src={image2}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 2</h3>
          </div>
          <div><img src={image3} alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 3</h3>
          </div>  
          <div><img src={image4}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 4</h3>
          </div>
          <div><img src={image9}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 5</h3>
          </div>
          <div><img src={image1}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 6</h3>
          </div>
          <div><img src={image7}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 7</h3>
          </div>
          <div><img src={image8}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
         </img>
         <h3>Project 8</h3>
         </div>
         <div><img src={image9}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
         </img>
         <h3>Project 9</h3></div>
         </div>

        </div>
      );
    };
    
  