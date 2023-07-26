import React from 'react';
import './projectsetting.css';
import { ColorFactory } from 'antd/es/color-picker/color';

export function ProjectSettings(){
    // const container={width:300,
    // }

  return (
    <div className="container"  /*style={container}*/  >
      <div>
        <h1>Project Setting</h1>
      </div>
      <div >
        <h2>Size</h2>
        <button style={{ border: '1px solid #ccc' ,padding:'20px 40%'}}>Original</button>
      </div>
      <div /*style={{ border: '1px solid #ccc' }}*/ style={{alignItems:'vertical'}}>
        <h2>Background</h2>
        <li className='bgr' style={{padding:'8px' , border:'solid black 1px'}}>
          <input type="radio" name="backgroundType" value="color" /> Color
        </li>
        <li className='bgr' style={{padding:'8px' , border:'solid black 1px'}}>
          <input type="radio" name="backgroundType" value="image" /> Image
        </li>
      </div>
      <div >
        <h2>Audio</h2>
        <button style={{ border: '1px solid #ccc' , padding:'20px 108px'}}>Clean Audio</button>
      </div>
    </div>
  );
};

