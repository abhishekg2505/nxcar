import React, { useState, useEffect } from 'react';
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';
import Frame4 from '../assets/Frame4.png';
import Frame5 from '../assets/Frame5.png';
import Frame6 from '../assets/Frame6.png';
import Frame7 from '../assets/Frame7.png';
// ... rest of the imports for frames

const About = () => {
  const [items, setItems] = useState([]);
  const [radiusLength, setRadiusLength] = useState(200);
  const sectionDeg = 360 / items.length;
  const radianSectionDeg = (sectionDeg * Math.PI * 2) / 360;

  useEffect(() => {
    const htmlCollection = document.getElementsByClassName('item');
    const itemsId = Array.from(htmlCollection);
    setItems(itemsId);
  }, []);

  useEffect(() => {
    makeATurn();
  }, [items]);

  function makeATurn() {
    items.forEach((item, i) => {
      item.style.top = `${radiusLength * Math.sin(radianSectionDeg * i - 1.5708)}px`;
      item.style.left = `${radiusLength * Math.cos(radianSectionDeg * i - 1.5708)}px`;
    });
  }

  const handleButtonClick = () => {
    const newItems = [...items];
    const holder = newItems.pop();
    newItems.unshift(holder);
    setItems(newItems);
  };

  return (
    <>
    <div className='home-section'>
      <div className="wrapper">
        <div className="item"><img src={Frame1} alt="Image 1" /></div>
        <div className="item"><img src={Frame2} alt="Image 2" /></div>
        <div className="item"><img src={Frame3} alt="Image 2" /></div>
        <div className="item"><img src={Frame4} alt="Image 2" /></div>
        <div className="item"><img src={Frame5} alt="Image 2" /></div>
        <div className="item"><img src={Frame6} alt="Image 2" /></div>
        <div className="item"><img src={Frame7} alt="Image 2" /></div>
      <div className="right selection-off" onClick={handleButtonClick}>Get Started</div>
      </div>
      </div>
    </>
  );
};

export default About;
