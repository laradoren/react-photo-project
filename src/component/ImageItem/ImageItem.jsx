import React from 'react';
import './ImageItem.css';

const ImageItem = (props) => { 
  return (   
    <> 
      <img src = {props.url} className="image"/>
    </>
  );
}

export default ImageItem;

