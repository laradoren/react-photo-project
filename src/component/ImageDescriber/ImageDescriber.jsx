import React from 'react';
import Portal from './Portal';
import './ImageDescriber.css';
import Comments from './Comments/Comments';

const Modal = ({ isOpen, onCancel, url, id }) => {
  let comments = [
    { date: '22.10.2020', text: 'Nice'},
    { date: '21.10.2020', text: 'Beautiful'},
    { date: '20.10.2020', text: 'Ugly'}    
  ];
  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
            <div name="times" onClick={onCancel} className = "close"> Close </div>
              <div className = "modalWindowContent">
                  <div className = "content"> 
                    <div>
                        <img src = {url}/>
                    </div>
                    <div>
                        <input/>
                    </div>
                    <div>
                        <input/>
                    </div>
                    <div>
                        <button>Send comment</button>
                    </div>
                  </div>
                  <div className = "comments">
                    {comments.map( c => <Comments date = {c.date} text = {c.text} />)}           
                  </div>
                  </div>
              
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

export default Modal;
