import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import axios from 'axios';
const data=[
    {name:"Abhishek Raj",rating:4,image:'https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg',description:"Alice is a software engineer with a passion for developing scalable web applications. She enjoys working with modern JavaScript frameworks and has a knack for solving complex algorithmic problems."},
    {name:"Abhishek Raj",rating:4,image:'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg',description:"Alice is a software engineer with a passion for developing scalable web applications. She enjoys working with modern JavaScript frameworks and has a knack for solving complex algorithmic problems."},
    {name:"Abhishek Raj",rating:4,image:'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',description:"Alice is a software engineer with a passion for developing scalable web applications. She enjoys working with modern JavaScript frameworks and has a knack for solving complex algorithmic problems."},
    {name:"Abhishek Raj",rating:4,image:'https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg',description:"Alice is a software engineer with a passion for developing scalable web applications. She enjoys working with modern JavaScript frameworks and has a knack for solving complex algorithmic problems."},
    {name:"Abhishek Raj",rating:4,image:'https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg',description:"Alice is a software engineer with a passion for developing scalable web applications. She enjoys working with modern JavaScript frameworks and has a knack for solving complex algorithmic problems."},
]
const ReviewSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/getAllReview");
        console.log('response data:', response.data.data);
        if (response.data.success === true) {
          setReviewData(response.data.data); // Update state with the fetched data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    afterChange: (current) => setCurrentIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-orange-400" />);
    }
    for (let i = Math.floor(rating); i < 5; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
    }
    return stars;
  };


  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-gray-100 pb-12 pt-1">
      <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-5xl great-vibes-regular custom-color1 text-center mt-8 mb-6 ">Customer Spotlight: Real Stories</h2>
        <Slider ref={sliderRef} {...settings} className=''>
          {reviewData.map((review, index) => (
            <div key={index} className={` px-3 pb-4  ${index === currentIndex ? 'opacity-100' : 'opacity-100'} `}>
              <div className="bg-white rounded-lg shadow-md p-3  relative min-h-72 border-2 border-slate-800">
                <div className=" flex flex-col items-center   mb-1">
                  <img 
                    src='https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg'
                    alt={review.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="text-lg text-green-400 text-center  poppins">{review.name}</h3>
                    <p className="text-gray-400 text-center ">{review.profession}</p>
                  </div>
                  <div className="flex justify-center ">
                  {generateStars(review.rating)}
                 
                </div>
                </div>
                <p className="text-gray-900 mb-4 text-center poppins">{truncateText(review.review, 180)}</p> 
                
              </div>
            </div>
          ))}
        </Slider>
        <div>
        <h2 className="text-2xl md:text-5xl great-vibes-regular custom-color1 text-center mt-8">
        Start your fashion journey with us
        </h2>
        <div className='flex justify-center gap-x-6'>
        <button className='px-4 py-2 mt-8 rounded-md text-white bg-slate-600  '>Get Started</button>
        <button className='px-4 py-2 mt-8 rounded-md text-slate-800 view-services-custome-color'>View Services</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
