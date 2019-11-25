import React from 'react';

export default ({value, title, color, icon}) => (
  <div className="indication">
    <div className="indication-value" style={{color}}>
      {value}
    </div>
    <div className="indication-name">
      {title}
    </div>
    <div className="indication-icon">
      <span className={`gc-font gc-font_${icon}`}></span>
    </div>
    <div className="indications-bar-color" style={{backgroundColor:color}}></div>
  </div>
);