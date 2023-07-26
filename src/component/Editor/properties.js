import React, { useState } from 'react';
import {ImUpload3} from 'react-icons/im'
import {FiRotateCw} from 'react-icons/fi'
import './properties.css'

export default function Properties() {

  const [sValue, setSValue] = useState(50);
  const [sValue2, setSValue2] = useState(50);

  const handleSliderChange = (event) => {
    setSValue(event.target.value);
  };
  const handleSliderChange2 = (event) => {
    setSValue2(event.target.value);
  };
  return (
    <div style={{height:'60vh'}}>
      <div className='top-btns'>
      <button className='upload-btn'><ImUpload3/></button>
      <button className='export-btn'>Export</button>
      </div>
      <h3 style={{textAlign:'center',marginTop:'30px'}}>Properties</h3>
      <div className='slider-btns'>
   
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <label for="slider1"style={{fontWeight:500}}>Scale</label>
      <input
        type="range"
        min="0"
        max="100"
        value={sValue}
        onChange={handleSliderChange}
        id='scale'
        style={{marginLeft:'20px'}}
      />
      
      <input
        type="number"
        min="0"
        max="100"
        value={sValue}
        onChange={handleSliderChange}
        className='slider-val'
        
      />
    </div>

    
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <label for="opacity"style={{fontWeight:500}}>Opacity</label>
      <input
        type="range"
        min="0"
        max="100"
        value={sValue2}
        onChange={handleSliderChange2}
        id='opacity'
        
      />
      <input
        type="number"
        min="0"
        max="100"
        value={sValue2}
        onChange={handleSliderChange2}
        className='slider-val'
      />
    </div>

      </div>
      <div style={{textAlign:'center',marginTop:'30px'}}>
        <span style={{fontWeight:500,marginRight:'32px'}}>Rotation</span>
        <button className='rotate-btn'><FiRotateCw/></button>
        <span style={{marginLeft:'4px',fontWeight:500,marginRight:'16px'}}>Z</span>
        <input className='rotate-val' type='number'value='0.0'/>
        <button className='rotate-btn1'><FiRotateCw/></button>
        <span style={{marginLeft:'4px',fontWeight:500,marginRight:'16px'}}>Y</span>
        <input className='rotate-val' type='number' value='0.0'/>
        <button className='rotate-btn1'><FiRotateCw/></button>
        <span style={{marginLeft:'4px',fontWeight:500,marginRight:'16px'}}>X</span>
        <input className='rotate-val' type='number'value='0.0'/>
      </div>
      <div style={{textAlign:'center',marginTop:'30px'}}>
        <div style={{display:'flex'}}>
      <span style={{fontWeight:500,marginLeft:'30px'}}>Position</span>
      <section className='position'>
        <span style={{marginLeft:'4px',fontWeight:500,marginRight:'16px'}}>X</span>
        <input className='position-val' type='number'value='0.0'/>
        </section>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'end'}}>
        <section className='position1'>
        <span style={{marginLeft:'4px',fontWeight:500,marginRight:'16px'}}>Y</span>
        <input className='position-val' type='number'value='0.0'/>
        </section>
        <section className='position1'>
        <span style={{marginLeft:'4px',fontWeight:500,marginRight:'16px'}}>Z</span>
        <input className='position-val' type='number'value='0.0'/>
        </section>
        </div>
      </div>
     
    </div>
  )
}