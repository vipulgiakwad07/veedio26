import React,{useState} from 'react'
import {FiRotateCcw,FiRotateCw} from 'react-icons/fi'
import {RxScissors,RxCopy} from 'react-icons/rx'
import {GrSplit} from 'react-icons/gr'
import {ImPaste} from 'react-icons/im'
import {FiZoomOut,FiZoomIn} from 'react-icons/fi'
import './toolbar.css'

 export function Toolbar() {
  return (
    <div style={{display:'flex',flexDirection:'row',marginTop:'30px',marginLeft:'50px'}}>
        <button className='toolBarButton'><FiRotateCcw/></button>
        <button className='toolBarButton'><FiRotateCw/></button>
        <button className='toolBarButton'><RxScissors/></button>
        <button className='toolBarButton'><RxCopy/></button>
        <button className='toolBarButton'><ImPaste/></button>
        <button className='toolBarButton'><GrSplit/></button>
        <SeekBar/>
    </div>
  )
}


function SeekBar() {
    const [zoomLevel, setZoomLevel] = useState(1);
  
    const handleZoomIn = () => {
      setZoomLevel(Math.min(zoomLevel + 0.1, 2));
    };
  
    const handleZoomOut = () => {
      if (zoomLevel > 0.1) {
        setZoomLevel(Math.max(zoomLevel - 0.1, 0.1));
      } else {
        setZoomLevel(0);
      }
    };
  
    const handleSeekBarChange = (event) => {
      // Handle seek bar change
    };
  
    const max = zoomLevel === 0 ? 1 : 100 / zoomLevel;
    const value = zoomLevel === 0 ? 0 : 50;
  
    return (
      <div>
        <button className='toolBarButton' onClick={handleZoomOut}><FiZoomOut/></button>
        <input
          type="range"
          min="0"
          max={max}
          value={value}
          onChange={handleSeekBarChange}
          style={{
            width: '200px',
            height: '6px',
            background: 'gray',
            borderRadius: '5px',
            appearance: 'none',
            outline: 'none',
            margin: '0 10px',
          }}
        />
        <button className='toolBarButton' onClick={handleZoomIn}><FiZoomIn/></button>
      </div>
    );
  }

 
    
