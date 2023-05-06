import React from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      {/* Add the arrow symbol or an icon here */}
      <span>&#8593;</span>
    </div>
  );
}

export default ScrollToTop;
