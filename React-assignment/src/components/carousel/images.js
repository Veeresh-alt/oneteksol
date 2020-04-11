import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hei1"
            src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hackernoon.com/hn-images/1*ub1DguhAtkCLvhUGuVGr6w.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://okteto.com/blog/how-to-develop-node-apps-in-kubernetes/cover.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hackernoon.com/hn-images/0*-aAkkhZcr4STwJK1.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.skillshare.com/uploads/parentClasses/e242ef59f2e937e8f4a25c93eb7ba5a0/2bb2b305"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://miro.medium.com/max/3920/1*PHmNXbvOfg5AHiMWWuaRXg.jpeg"
            alt="Seventh slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

  export default ControlledCarousel;