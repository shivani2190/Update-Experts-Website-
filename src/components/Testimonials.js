import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  padding: 5em 2em;
  color: #000000;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const TestimonialTitle = styled.div`
  margin-bottom: 3em;
  text-align: center;
  position: relative;

  h2 {
    font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 0.5em;
    text-transform: capitalize;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #000000;
    
    i {
      font-size: 3.5rem;
      color: #404040;
      margin-top: -5px;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: #000000;
    }
  }

  p {
    font-size: 1.2rem;
    color: #404040;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const QuoteIcon = styled.div`
  font-size: 5rem;
  color: #000000;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  i {
    display: block;
    line-height: 1;
  }
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 2em;
  margin: 1em;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: -60px auto 20px;
  position: relative;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #000000;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: #000000;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000000;
  flex-shrink: 0;
`;

const StarRating = styled.div`
  color: #000000;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  flex-shrink: 0;

  i {
    margin: 0 2px;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #404040;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  &::before,
  &::after {
    content: '"';
    font-size: 1.5em;
    color: #000000;
  }
`;

const CustomSlider = styled(Slider)`
  padding-bottom: 50px;

  .slick-dots {
    bottom: 0;
    
    li {
      margin: 0 6px;
      
      button:before {
        color: #000000;
        opacity: 0.5;
        font-size: 10px;
      }

      &.slick-active button:before {
        color: #000000;
        opacity: 1;
        font-size: 12px;
      }
    }
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 1;

    &:hover {
      background: #fff;
    }

    &:before {
      color: #000000;
      font-size: 20px;
    }
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      name: "Suruchi Khurana",
      image: '/images/avatars/suruchi.jpg',
      rating: 5,
      text: "Thank you so much for the amazing services. Such a lovely and professional person Supriya is. Really liked the way she provided services to me. The attention to detail and care was exceptional!",
    },
    {
      id: 2,
      name: "Neetu Singh",
      image: '/images/avatars/neetu.jpg',
      rating: 5,
      text: "They provide excellent home service. My experience with them was very good and I am happy with the services. Suman did her job excellently with proper hygiene and she is very polite.",
    },
    {
      id: 3,
      name: "Kirti Grover",
      image: '/images/avatars/kirti.jpg',
      rating: 5,
      text: "Amazing services by them. Supriya came to my place and she is super good in her services. Would give 5 on 5! The professionalism and skill level was outstanding. Keep up the good work!",
    },
    // {
    //   id: 4,
    //   name: "Priya Sharma",
    //   image: '/images/avatars/priya.jpg',
    //   rating: 5,
    //   text: "Exceptional service at home! The convenience and quality of service were outstanding. The beautician was professional and skilled. The entire experience was perfect. Highly recommended!",
    // },
    {
      id: 5,
      name: "Ritu Malhotra",
      image: '/images/avatars/ritu.jpg',
      rating: 5,
      text: "Outstanding experience! The service was perfect and the beautician was very professional. The attention to detail was impressive. Will definitely book again for my beauty needs.",
    },
    {
      id: 6,
      name: "Anjali Gupta",
      image: '/images/avatars/anjali.jpg',
      rating: 5,
      text: "The team's expertise and dedication to customer satisfaction is unmatched. They delivered exactly what I needed, right at my doorstep. The quality of service was exceptional!",
    },
  ];

  return (
    <TestimonialSection>
      <TestimonialTitle>
        <h2>
          <i className="bi bi-quote"></i>
          What Our Clients Say
        </h2>
        <p>Discover why our clients love our services and trust us for their beauty needs</p>
      </TestimonialTitle>
      
      <CustomSlider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard>
              <ImageWrapper>
                <img src={testimonial.image} alt={testimonial.name} />
              </ImageWrapper>
              <CardBody>
                <ClientName>{testimonial.name}</ClientName>
                <StarRating>
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                </StarRating>
                <TestimonialText>{testimonial.text}</TestimonialText>
              </CardBody>
            </TestimonialCard>
          </div>
        ))}
      </CustomSlider>
    </TestimonialSection>
  );
};

export default Testimonials;
