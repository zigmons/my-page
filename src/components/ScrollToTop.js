import React from 'react';
import './ScrollToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      {<FontAwesomeIcon icon={faCircleArrowUp} beat size='xl'/>}
      
    </div>
  );
}

export default ScrollToTop;
