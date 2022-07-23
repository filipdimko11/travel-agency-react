import React from 'react'
import styled from 'styled-components'
import avatarImage from "../assets/avatarImage.jpeg"

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2></h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>
                John Smith
              </h4>
              <span>
                CEO - FilDimIO
              </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>
                John Smith
              </h4>
              <span>
                CEO - FilDimIO
              </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>
                John Smith
              </h4>
              <span>
                CEO - FilDimIO
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.25s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          height: 3rem;
          border-radius: 3rem;
        }
        .details {
          span {
            font-size:0.9rem;
          }
        }
      }
    }
  }
`;

export default Testimonials