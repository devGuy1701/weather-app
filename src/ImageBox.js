import React from 'react';

const IMG_URL = "http://openweathermap.org/img/wn/"

const ImageBox = ({icon, stl}) => {
  return (
      icon.length > 0 ? 
       <img src={IMG_URL+`${icon}@4x.png`} 
       width={stl ? 48 : 'inherith'} 
       style={{width: stl?.width, height: stl?.height}}/> 
       : ''
  );
};

export default ImageBox;
