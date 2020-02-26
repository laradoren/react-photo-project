import React, { Component, Fragment } from 'react';
import './Gallery.css';
import imageUrl from './20130710231327350.jpg';
import ImageItem from './../ImageItem/ImageItem';
import ImageDescriber from '../ImageDescriber/ImageDescriber';

class Gallery extends Component {
  state = {
    isOpen: false,
    galleryItems : [
      {id: 1, url:  imageUrl},
      {id: 2, url:  imageUrl},
      {id: 3, url:  imageUrl},
      {id: 4, url:  imageUrl},
      {id: 5, url:  imageUrl},
      {id: 6, url:  imageUrl}
    ],
    id: null,
    url: null
  }
  openModal = (id, url) => {
    this.setState({ isOpen: true, id , url});
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false, id: null, url: null });
  }
   
  render() {     
      return (
          <Fragment>
            <div className = "gallery">
                <div className = "galleryItem">
                  {this.state.galleryItems.map( g => {
                      return <button key = {g.id} onClick = {() => {this.openModal(g.id, g.url)}} > 
                        <ImageItem url = {g.url}/>
                      </button>
                  })}
                </div>
            </div>
            <ImageDescriber
              url = {this.state.url}
              id = {this.state.id}
              isOpen={this.state.isOpen}
              onCancel={this.handleCancel}
            > </ImageDescriber>
          </Fragment>
      )
  }
}


export default Gallery;

