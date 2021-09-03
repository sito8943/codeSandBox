
import React, {useState} from 'react';

import './ToTop.css'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const ToTop = () => {
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <div className='scrollButton' style={{display: visible ? 'inline' : 'none'}}>
       <ArrowUpwardIcon onClick={scrollToTop} 
        style={{paddingBottom: '40px'}} />
      </div>
    );
  }
    
  export default ToTop;