import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MyCarousel = () => {
  // Items to display in the carousel
  const carouselItems = [
    "I love how easy it is to check my balance and transfer funds with just a few taps. This app is a game-changer!",
    "The app is super quick and easy to use. I love how I can access everything I need in just a few taps",
    "The mobile check deposit feature is super convenient. I can deposit checks anytime without going to the bank!",
    "With this app, I can manage my finances on the go. It’s fast, reliable, and user-friendly.",
    "The spending tracker helps me stay on top of my budget. I’ve never been more organized with my finances!",
    "I can quickly send money to my friends and family, and the transfers are instant. No more waiting!",
    "The loan application process was so simple and fast. I got approved within minutes",
  ];

  // Responsive settings to show 7 items on large screens and 3 on smaller screens
  const responsive = {
    superLarge: {
      // screens greater than 4000px
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    large: {
      // screens between 1024px and 3000px
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    medium: {
      // screens between 768px and 1024px
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    small: {
      // screens less than 768px
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
  };

  return (
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={4000} infinite>
      {carouselItems.map((item, index) => (
        
        <div className='p-10 shadow-bar_shadow br-8px background-20px' key={index} style={{ textAlign: 'center'}}>
          <h3>{item}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;